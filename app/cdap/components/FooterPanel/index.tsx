import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useCss } from './styles';
import { ColumnIcon, ZoomIn, ArrowIcon } from './images';

const Footer = ({ showRecipePanelHandler, showAddTransformationHandler, recipeStepsCount }) => {
  const classes = useCss();

  return (
    <Box className={classes.containerProps}>
      <Box className={classes.cont}>
        <Box className={classes.imgCont}>{ColumnIcon}</Box>
        <Box>
          <p className={classes.data}> Current data - 1000 rows and 30 columns</p>
        </Box>
        <Box className={classes.zoomCont}>
          {ZoomIn}
          <p className={classes.spanElement}> 100%</p>
          {ArrowIcon}
        </Box>
        <p className={classes.directivesCont}> Directives </p>
        <Box className={classes.recipeCont} onClick={showRecipePanelHandler}>
          <p> Recipe Steps</p>
          <p className={classes.spanElement1}>{recipeStepsCount}</p>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;