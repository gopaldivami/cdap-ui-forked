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
import { FormGroup } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ParseComponent from '..';
import { DEPTH, DEPTH_PLACEHOLDER, PARSE_AS_XML_TO_JSON } from '../../constants';
import { useStyles } from '../../styles';
import FormInputFieldComponent from '../FormInputFieldComponent';

const ParseXMLToJSONComponent = (props) => {
  const { setDirectiveComponentsValue, directiveComponentValues } = props;
  const [depth, setDepth] = useState(1);

  const classes = useStyles();

  useEffect(() => {
    setDirectiveComponentsValue({ ...directiveComponentValues, depth });
  }, [depth]);

  return (
    <ParseComponent sectionHeading={PARSE_AS_XML_TO_JSON}>
      <FormGroup>
        <div className={classes.formLabelStyles}>{DEPTH}</div>
        <FormInputFieldComponent
          formInputValue={depth}
          classnames={classes.formFieldStyles}
          inputProps={{
            classes: { underline: classes.underlineStyles, input: classes.inputStyles },
            type: 'number',
            value: depth,
            onChange: (e) => setDepth(e.target.value),
            color: 'primary',
            placeholder: DEPTH_PLACEHOLDER,
          }}
        />
      </FormGroup>
    </ParseComponent>
  );
};
export default ParseXMLToJSONComponent;