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
import { CALCULATE_OPTIONS } from '../components/NestedMenu/constants';

const DirectiveContent: React.FC<any> = (props) => {
  const { directiveComponents, functionName: type, functionName } = props;

  const Component =
    directiveComponents.find((item) => item.type === type)?.component ||
    CALCULATE_OPTIONS.find((item) => item.value === functionName)?.component;

  return (
    <Component
      directiveComponentValues={props.directiveComponentValues}
      setDirectiveComponentsValue={props.setDirectiveComponentsValue}
      functionName={functionName}
      {...props}
    />
  );
};

export default DirectiveContent;