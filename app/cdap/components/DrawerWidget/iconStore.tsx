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
import { blue } from '@material-ui/core/colors';

export const BackIcon = (
  <svg
    width="13"
    height="23"
    viewBox="0 0 13 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="drawer-backIcon"
  >
    <path
      d="M11.2303 1.19922L1 11.429L11.2303 21.1992"
      stroke="#757575"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const UnderLine = (
  <svg
    width="67"
    height="2"
    viewBox="0 0 67 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="drawer-heading-underline"
  >
    <path d="M0 0H50L53 2H3L0 0Z" fill={blue[500]} />
    <path d="M54 0H63.5L66.5 2H57L54 0Z" fill={blue[500]} />
  </svg>
);