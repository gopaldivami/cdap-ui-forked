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
import TransformationComponents from 'components/WranglerGrid/TransformationComponents/index';

describe('Test TransformationComponents', () => {
  const xyz = () => {
    return <h2>Hello world</h2>;
  };

  it('Should render TransformationComponent', () => {
    render(
      <TransformationComponents
        setTransformationComponentsValue={jest.fn()}
        transformationComponent={[{ type: 'abhilash', component: xyz }]}
        transformationComponentValues={undefined}
        transformationName={'SQUARE'}
        transformationDataType={[]}
        columnsList={[]}
        missingItemsList={undefined}
        onCancel={jest.fn()}
        applyTransformation={jest.fn()}
      />
    );
  });
});