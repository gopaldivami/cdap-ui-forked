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
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { ICheckBoxInput } from '../../types';

export default function({
  selectedColumns,
  handleDisableCheckbox,
  eachColumn,
  onMultipleSelection,
}: ICheckBoxInput) {
  return (
    <>
      <FormControlLabel
        disabled={
          (Array.isArray(selectedColumns) &&
            selectedColumns?.filter((el) => el.label === eachColumn.label).length) ||
          !handleDisableCheckbox()
            ? false
            : true
        }
        control={
          <Checkbox
            color="primary"
            checked={
              selectedColumns?.length &&
              selectedColumns?.filter((el) => el.label === eachColumn.label).length
                ? true
                : false
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onMultipleSelection(event, eachColumn)
            }
            data-testid="transformation-checkbox-select-multiple-columns"
          />
        }
        label=""
      />
    </>
  );
}