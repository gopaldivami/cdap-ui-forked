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
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import React, { Fragment, useRef, useState } from 'react';
import DrawerWidgetHeading from './DrawerWidgetHeading';
import { useStyles } from './styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const ColumnViewWidget = (props) => {
  const classes = useStyles();
  const { headingText, children, closeClickHandler, searchedTermHandler } = props;
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  const handleSearch = (event) => {
    searchedTermHandler(event.target.value);
  };

  const handleFocus = () => {
    ref?.current.focus();
    setFocused(true);
  };

  return (
    <Box className={classes.drawerContainerStyles} role="presentation">
      <header className={classes.headerStyles}>
        <div className={classes.headerTextWithBackIconStyles}>
          <DrawerWidgetHeading headingText={headingText} />
        </div>
        <Box className={classes.headerRightStyles}>
          <Box className={classes.searchFormControl}>
            <input
              className={focused ? classes.isFocused : classes.isBlurred}
              onChange={handleSearch}
              ref={ref}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <Box className={classes.searchInputAdornment} onClick={handleFocus}>
              <SearchOutlinedIcon />
            </Box>
          </Box>

          <div className={classes.dividerLineStyles} />
          <CloseRoundedIcon
            className={classes.pointerStyles}
            color="action"
            onClick={closeClickHandler}
          />
        </Box>
      </header>
      <Fragment>{children}</Fragment>
    </Box>
  );
};

export default ColumnViewWidget;