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

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CheckBoxInput from 'components/AddTransformation/ColumnTable/Components/CheckboxInput';

describe('It should render ', () => {
  it('Should render the checkBox component and click the checkbox', () => {
    const container = render(
      <CheckBoxInput
        selectedColumns={[{ label: 'test', type: [''], name: '' }]}
        handleDisableCheckbox={() => false}
        eachColumn={{ label: 'test', type: [''], name: '' }}
        onMultipleSelection={() => jest.fn()}
      />
    );

    const checkboxInputElement = screen.getByTestId(/check-box-input-checkbox/i);
    fireEvent.click(checkboxInputElement);
    expect(container).toBeDefined();
  });

  it('Should render the checkBox component and click the checkbox', () => {
    const container = render(
      <CheckBoxInput
        selectedColumns={[{ label: 'test', type: [''], name: '' }]}
        handleDisableCheckbox={() => true}
        eachColumn={{ label: 'test', type: [''], name: '' }}
        onMultipleSelection={() => jest.fn()}
      />
    );

    const checkboxInputElement = screen.getByTestId(/check-box-input-checkbox/i);
    fireEvent.click(checkboxInputElement);
    expect(container).toBeDefined();
  });
});