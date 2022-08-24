/*
 * Copyright © 2017-2018 Cask Data, Inc.
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

import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  canBrowseHover: {
    display: 'none',
  },
  iconBoxStyles: {
    width: 30,
    height: 30,
    boxSizing: 'border-box',
  },
  tooltipStyles: {
    backgroundColor: 'black',
    color: 'white',
  },
  tabHeaders: {
    backgroundColor: '#F1F8FF',
  },
  StyleForLevelZero: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '50px',
    paddingLeft: '38px',
  },
  beforeSearchIconClickDisplay: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    paddingRight: '18px',
    paddingLeft: '30px',
  },
  hideComponent: {
    display: 'none',
  },
  tabsContainerWithHeader: {
    display: 'flex',
    flexDirection: 'column',
    height: '100% !important',
    borderRight: '1px solid #DADCE0',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    opacity: 0.5,
    background: 'white',
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});