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

import { ISnackbar } from 'components/Snackbar/types';
import { Dispatch, SetStateAction } from 'react';

export interface IRecords {
  [key: string]: string | number | IRecords | boolean;
}

export interface ITabsData {
  data: IRecords[];
  showTabs: boolean;
  selectedTab: string;
  toggleSearch: boolean;
}

export interface IConnectionTabsProps {
  tabsData: ITabsData;
  handleChange: (entity: IRecords, index: number) => void;
  value: string;
  connectionColumnIndex: number;
  connectionId: string;
  setSnackbar: Dispatch<SetStateAction<ISnackbar>>;
  toggleLoader: (isLoading: boolean, isError?: boolean) => void;
}