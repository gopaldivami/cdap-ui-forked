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

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Route, Router, Switch } from 'react-router';
import MenuComponent from '..';
import { createBrowserHistory as createHistory } from 'history';

const history = createHistory({
  basename: '/',
});

describe('To Test Grid Menu Component', () => {
  it('Should check if the component is rendered', () => {
    const container = render(
      <Router history={history}>
        <Switch>
          <Route>
            <MenuComponent
              anchorEl={false}
              menuOptions={['test1']}
              setAnchorEl={() => jest.fn()}
              submitOption={() => jest.fn()}
            />
          </Route>
        </Switch>
      </Router>
    );
    expect(container).toBeDefined();
    const ele = screen.getAllByTestId(/menu-component-menu/i);
    fireEvent.click(ele[0]);
  });
});