/*
 *  Copyright © 2022 Cask Data, Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not
 *  use this file except in compliance with the License. You may obtain a copy of
 *  the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 *  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *  License for the specific language governing permissions and limitations under
 *  the License.
 */

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import EditRecipe from 'components/EditRecipe';
import { ISnackbar } from 'components/Snackbar';

describe('Test Create Recipe Component', () => {
  const mockSetSnackbar = jest.fn();
  beforeEach(() => {
    render(
      <EditRecipe
        recipeData={{ recipeName: 'recipeName', description: '', directives: [] }}
        onRecipeDataSave={jest.fn()}
        onCancel={jest.fn()}
        isNameError={false}
        headingText={''}
        openDrawer={true}
        onCloseClick={jest.fn()}
        setIsNameError={jest.fn()}
        setSnackbar={mockSetSnackbar}
        snackbarState={{
          open: true,
          message: '',
          isSuccess: false,
        }}
      />
    );
  });

  it('should render the component as expected', () => {
    const parentElement = screen.getByTestId(/edit-recipe-drawer-widget-parent/i);
    expect(parentElement).toBeInTheDocument();
  });

  it('should trigger handleClose function', () => {
    const closeIconElement = screen.getByTestId(/snackbar-close-icon/i);
    fireEvent.click(closeIconElement);
    expect(mockSetSnackbar).toBeCalled();
  });
});