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

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DataPrepStore from 'components/DataPrep/store';
import DataPrepActions from 'components/DataPrep/store/DataPrepActions';
import EditRecipe from 'components/EditRecipe';
import Snackbar from 'components/Snackbar';
import T from 'i18n-react';
import useSnackbar from 'components/Snackbar/useSnackbar';
import MyDataPrepApi from 'api/dataprep';
import { getCurrentNamespace } from 'services/NamespaceStore';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function() {
  const classes = useStyles();
  const [showEditFormPanel, setShowEditFormPanel] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState([]);
  const [editRecipeData, setEditRecipeData] = useState({
    recipeName: '',
    description: '',
    directives: [],
    recipeId: undefined,
  });
  const [snackbarState, setSnackbar] = useSnackbar();
  const [isNameError, setIsNameError] = useState(false);

  useEffect(() => {
    const params = {
      context: getCurrentNamespace(),
    };
    MyDataPrepApi.getRecipeList(params).subscribe((res) => {
      console.log(res, res.values);
      setRecipeList(res.values);
    });
  }, []);

  console.log(recipeList, 'recipeList');

  useEffect(() => {
    if (snackbarState.open) {
      setTimeout(() => {
        setSnackbar({
          open: false,
          isSuccess: false,
          message: ``,
        });
      }, 5000);
    }
  }, [snackbarState]);

  const onCloseClick = () => {
    setShowEditFormPanel(false);
    setEditRecipeData({
      recipeName: '',
      description: '',
      directives: [],
      recipeId: undefined,
    });
  };

  const onRecipeFormCancel = () => {
    setShowEditFormPanel(false);
    setIsNameError(false);
  };

  const onEdit = (row) => {
    recipeList?.map((eachRecipe) => {
      if (eachRecipe.recipeId.recipeId === row.recipeId.recipeId) {
        setEditRecipeData(eachRecipe);
        setShowEditFormPanel(true);
      }
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipeList?.map((row) => (
              <TableRow key={row.recipeId} onClick={() => onEdit(row)}>
                <TableCell component="th" scope="row">
                  {row.recipeName}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showEditFormPanel && (
        <EditRecipe
          openDrawer={showEditFormPanel}
          headingText={T.translate('features.WranglerNewUI.RecipeForm.labels.editFormTitle')}
          onCloseClick={onCloseClick}
          onCancel={onRecipeFormCancel}
          snackbarState={snackbarState}
          recipeData={editRecipeData}
          setSnackbar={(value) => setSnackbar(() => value)}
        />
      )}
    </>
  );
}