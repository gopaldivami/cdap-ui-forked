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

import {
  mockStatistics,
  mockColumnList,
  mockUtilsForNullValues,
  mockColumnListForNullValues,
} from 'components/WranglerGrid/AddTransformationPanel/mock/mockDataForAddTransformation';
import { getDataQuality } from 'components/common/DataQualityCircularProgressBar/utils';

describe('It should test prepareDataQualtiy function', () => {
  it('mock prepareDataQuality function ', () => {
    expect(getDataQuality(mockStatistics, mockColumnList)).toStrictEqual([
      { label: 'body_0', value: '0' },
    ]);
  });

  it('mock prepareDataQuality function branching ', () => {
    expect(getDataQuality(mockUtilsForNullValues, mockColumnListForNullValues)).toStrictEqual([
      { label: 'body_0', value: 10 },
    ]);
  });
});