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
import ColumnDataDistribution from 'components/ColumnInsights/Components/ColumnDataDistribution';
import history from 'services/history';
import { Route, Router, Switch } from 'react-router';
import { mockGraphData } from 'components/ColumnInsights/mock/mockDataForColumnInsights';

describe('It Should test Column Data Distribution Component', () => {
  it('Should test whether  Column Data Distribution Component is rendered in the screen and the Graph label is as expected.', () => {
    render(
      <Router history={history}>
        <Switch>
          <Route>
            <ColumnDataDistribution graphData={mockGraphData} />
          </Route>
        </Switch>
      </Router>
    );
    const distributionText = screen.getByTestId(/distribution-text/i);
    expect(distributionText).toHaveTextContent(
      `features.NewWranglerUI.ColumnInsights.distribution`
    );
  });

  it('Should test whether View Full Chart Text is as expected.', () => {
    render(
      <Router history={history}>
        <Switch>
          <Route>
            <ColumnDataDistribution graphData={mockGraphData} />
          </Route>
        </Switch>
      </Router>
    );
    const viewFullChartText = screen.getByTestId(/view-full-chart-text/i);
    expect(viewFullChartText).toHaveTextContent(
      `features.NewWranglerUI.ColumnInsights.viewFullChart`
    );
  });

  it('Should test whether Data Distribution Graph is rendered in the Screen.', () => {
    render(
      <Router history={history}>
        <Switch>
          <Route>
            <ColumnDataDistribution graphData={mockGraphData} />
          </Route>
        </Switch>
      </Router>
    );
    const dataDistributionGraph = screen.getByTestId(/data-distribution-graph/i);
    fireEvent.click(dataDistributionGraph);
    expect(dataDistributionGraph).toBeInTheDocument();
  });
});