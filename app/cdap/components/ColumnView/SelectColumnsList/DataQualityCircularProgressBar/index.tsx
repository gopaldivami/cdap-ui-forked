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

import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from 'components/ColumnView/SelectColumnsList/DataQualityCircularProgressBar/styles';
import { IDataQualityCircularProgressBarProps } from 'components/ColumnView/SelectColumnsList/DataQualityCircularProgressBar/types';

import styled from 'styled-components';

const RenderGraph = styled(Typography)`
    border-bottom-color: ${(props) => props.color};
    border-left-color: ${(props) => props.color};
    transform: ${(props) => `rotate(${45 + props.dataQualityPercentValue * 1.8}deg)`}%;
    position: 'absolute',
    top: 0;
    left: 0;
    width: 59;
    height: 59;
    borderRadius: 50%;
    boxSizing: border-box;
    border: ' 4px solid #dbdbdb;
`;

export default function({ dataQualityPercentValue, index }: IDataQualityCircularProgressBarProps) {
  const classes = useStyles();
  return (
    <>
      <Typography
        component="div"
        className={classes.progress}
        data-testid="circular-progress-bar-parent"
      >
        <Typography component="div" className={classes.barOverflow}>
          <RenderGraph
            color={dataQualityPercentValue === 0 ? '#8BCC74' : '#E97567'}
            dataQualityPercentValue={dataQualityPercentValue}
            className={classes.bar}
            component="div"
          />
        </Typography>
        <Typography
          component="span"
          className={`${
            dataQualityPercentValue === 0 ? classes.dataQualityGreen : classes.dataQualityRed
          }`}
          data-testid={`data-quality-percent-${index}`}
        >
          {dataQualityPercentValue.toFixed(1)}%
        </Typography>
      </Typography>
    </>
  );
}