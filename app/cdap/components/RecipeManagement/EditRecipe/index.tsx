/*
 * Copyright © 2022 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import React, { useState, ChangeEvent, useRef, FormEvent, useEffect } from 'react';
import styled from 'styled-components';
import RecipeForm from 'components/RecipeManagement/RecipeForm';
import {
  IEditRecipeProps,
  IRecipeData,
  IRecipeNameErrorData,
} from 'components/RecipeManagement/types';
import { debounce } from 'lodash';
import {
  getRecipeByNameService,
  updateRecipeService,
} from 'components/RecipeManagement/EditRecipe/services';
import T from 'i18n-react';
import { ActionType } from 'components/RecipeList/types';

const StyledEditFormWrapper = styled.div`
  margin-top: 30px;
`;

const recipeNameRegEx = /^[a-z\d\s]+$/i;
const PREFIX = 'features.WranglerNewUI.RecipeForm.labels';

const noErrorState: IRecipeNameErrorData = {
  isRecipeNameError: false,
  recipeNameErrorMessage: '',
};

export default function({
  selectedRecipe,
  onCancelClick,
  setSnackbar,
  setRecipeFormOpen,
  setIsRecipeListUpdated,
}: IEditRecipeProps) {
  const [recipeFormData, setRecipeFormData] = useState<IRecipeData>({
    recipeName: '',
    description: '',
    directives: [],
  });
  const [isSaveDisabled, setIsSaveDisabled] = useState<boolean>(true);
  const [recipeNameErrorData, setRecipeNameErrorDataState] = useState<IRecipeNameErrorData>(
    noErrorState
  );

  const recipeSteps = ['uppercase: body1', 'titlecase: body2'];

  useEffect(() => {
    if (selectedRecipe) {
      recipeFormData.recipeName = selectedRecipe.recipeName;
      recipeFormData.description = selectedRecipe.description;
      recipeFormData.directives = selectedRecipe.directives;
      setRecipeFormData((prevState) => ({ ...prevState, recipeFormData }));
    }
  }, [selectedRecipe]);

  const setRecipeNameErrorData = (
    recipeNameError: IRecipeNameErrorData,
    formData: IRecipeData = recipeFormData
  ) => {
    setRecipeNameErrorDataState(recipeNameError);
    handleSaveButtonMode(formData, recipeNameError);
  };

  const handleSaveButtonMode = (
    formData: IRecipeData,
    nameErrorData: IRecipeNameErrorData = recipeNameErrorData
  ) => {
    if (
      formData.recipeName === '' ||
      formData.description === '' ||
      formData.recipeName?.trim().length === 0 ||
      formData.description?.trim().length === 0 ||
      nameErrorData.isRecipeNameError
    ) {
      setIsSaveDisabled(true);
    } else {
      setIsSaveDisabled(false);
    }
  };

  const handleRecipeFormData = (formData: IRecipeData) => {
    setRecipeFormData(formData);
    handleSaveButtonMode(formData);
  };

  const onRecipeNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleRecipeFormData({
      ...recipeFormData,
      recipeName: event.target.value,
    });
    validateRecipeNameExists.current({
      recipeName: event.target.value,
      description: recipeFormData.description,
    });
  };

  const validateRecipeNameExists = useRef(
    debounce((formData: IRecipeData) => {
      if (formData.recipeName && !recipeNameRegEx.test(formData.recipeName)) {
        setRecipeNameErrorData(
          {
            isRecipeNameError: true,
            recipeNameErrorMessage: T.translate(`${PREFIX}.validationErrorMessage`).toString(),
          },
          formData
        );
      } else {
        if (formData.recipeName) {
          getRecipeByNameService({ formData, onGetRecipeByNameResponse, onGetRecipeByNameError });
        } else {
          setRecipeNameErrorData(noErrorState, formData);
        }
      }
    }, 500)
  );

  const onGetRecipeByNameResponse = (formData: IRecipeData) => {
    !recipeNameErrorData.isRecipeNameError &&
      setRecipeNameErrorData(
        {
          isRecipeNameError: true,
          recipeNameErrorMessage: T.translate(`${PREFIX}.sameNameErrorMessage`).toString(),
        },
        formData
      );
  };

  const onGetRecipeByNameError = (err: Record<string, unknown>, formData: IRecipeData) => {
    if (err.statusCode === 404) {
      setRecipeNameErrorData(noErrorState, formData);
    }
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRecipeDataSave(recipeFormData);
  };

  const onUpdateRecipeResponse = () => {
    setRecipeNameErrorData(noErrorState);
    setRecipeFormOpen(false);
    setSnackbar({
      open: true,
      isSuccess: true,
      message: `${recipeSteps.length} ${T.translate(`${PREFIX}.recipeUpdateSuccessMessage`)}`,
    });
    setIsRecipeListUpdated(true);
  };

  const onUpdateRecipeError = (err: Record<string, unknown>) => {
    setRecipeFormOpen(false);
    setSnackbar({
      open: true,
      isSuccess: false,
      message: (err.response as Record<string, string>).message,
    });
  };

  const onRecipeDataSave = (recipeFormData: IRecipeData) => {
    const payload = {
      recipeName: recipeFormData.recipeName,
      description: recipeFormData.description,
      directives: recipeFormData.directives,
    };
    updateRecipeService({
      selectedRecipe,
      payload,
      onUpdateRecipeResponse,
      onUpdateRecipeError,
    });
  };

  const onRecipeDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleRecipeFormData({
      ...recipeFormData,
      description: event.target.value,
    });
  };

  return (
    <StyledEditFormWrapper>
      {recipeFormData && (
        <RecipeForm
          recipeFormData={recipeFormData}
          isRecipeNameError={recipeNameErrorData.isRecipeNameError}
          recipeNameErrorMessage={recipeNameErrorData.recipeNameErrorMessage}
          onRecipeNameChange={onRecipeNameChange}
          onFormSubmit={onFormSubmit}
          onCancel={onCancelClick}
          isSaveDisabled={isSaveDisabled}
          recipeFormAction={ActionType.EDIT_RECIPE}
          onRecipeDescriptionChange={onRecipeDescriptionChange}
        />
      )}
    </StyledEditFormWrapper>
  );
}