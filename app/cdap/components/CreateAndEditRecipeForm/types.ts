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

import { ISnackbar } from 'components/Snackbar';

export interface ICreateAndEditRecipeFormProps {
  recipeData: IRecipeData;
  setIsCreateAndEditRecipeFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSnackbar: React.Dispatch<React.SetStateAction<ISnackbar>>;
  recipeFormAction: string;
}

export interface IRecipeData {
  recipeName: string;
  description: string;
  directives: string[];
  createdTimeMillis?: number;
  recipeStepsCount?: number;
  updatedTimeMillis?: number;
  recipeId?: IRecipeId;
}

export interface IRecipeId {
  recipeId: string;
  namespace: INameSpace;
}

export interface INameSpace {
  name: string;
  generation: number;
}