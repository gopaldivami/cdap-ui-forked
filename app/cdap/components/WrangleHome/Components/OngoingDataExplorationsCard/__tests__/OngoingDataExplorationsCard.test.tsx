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
import OngoingDataExplorationCard from '../index';
import { mockItems, mockItemsWithPercentage, mockItemsPercentageData } from '../mock/mock';

describe('Test Ongoing Data Explrations Component', () => {
  it('Should render OngoingDataExplorationCard component', () => {
    render(
      <OngoingDataExplorationCard explorationCardDetails={mockItemsWithPercentage} cardIndex={1} />
    );
    const ele = screen.getByTestId(/wrangler-home-ongoing-data-exploration-card/i);
    expect(ele).toBeInTheDocument();
  });
});