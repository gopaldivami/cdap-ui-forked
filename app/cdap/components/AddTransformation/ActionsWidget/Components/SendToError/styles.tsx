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

import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  container: {
    padding: '15px 0px',
    color: grey[700],
  },
  actionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '10px',
  },
  selectAction: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
  },
  greenCheckIcon: {
    width: '20px',
    height: '20px',
  },
  description: {
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.15',
    fontWeight: 400,
    paddingBottom: '15px',
  },
  formInputContainer: {},
  label: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 400,
    letterSpacing: '0.15',
    color: grey[700],
  },
  selectBox: {
    width: '350px',
    height: '40px',
    paddingBottom: '10px',
  },
  extraInputText: {
    marginTop: '20px',
    width: '350px',
    height: '40px',
  },
  textInput: {
    width: '350px',
    height: '40px',
    marginBottom: '10px',
  },
  checkbox: {
    height: '100px',
  },
});