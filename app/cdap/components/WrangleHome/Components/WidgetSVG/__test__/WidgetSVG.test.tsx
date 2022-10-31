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

import React from 'react';
import { render, screen } from '@testing-library/react';
import WidgetSvg from 'components/WrangleHome/Components/WidgetSVG/index';

describe('Test Widget data Component', () => {
  it('Should render Widget data component without dataSrc', () => {
    const container = render(<WidgetSvg />);
    expect(container).toBeDefined();
  });

  it('Should render Widget data component with dataSrc', () => {
    const container = render(<WidgetSvg dataSrc />);
    expect(container).toBeDefined();
  });
});