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

import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles';

export default function({ headingText }) {
  const classes = useStyles();

  return (
    <Box className={classes.headingStyles}>
      <div className={classes.headingTextStyles}>{headingText}</div>
      <img src="/cdap_assets/img/Underline.svg" alt="header line" />
    </Box>
  );
}