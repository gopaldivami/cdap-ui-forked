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

import { render } from '@testing-library/react';
import React from 'react';
import { screen } from '@testing-library/dom';
import TypographyComponent from 'components/GridTable/components/Typography/index';

describe('It Should test Typography Component', () => {
  render(<TypographyComponent className="material" label="test" />);
  it('Should contain label', () => {
    expect(screen.getByTestId('typography-component-test')).toHaveTextContent('test');
  });
});