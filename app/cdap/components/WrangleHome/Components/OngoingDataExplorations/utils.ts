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

import DataPrepStore from 'components/DataPrep/store';
import {
  IExistingExplorationCardsData,
  IMassagedObject,
} from 'components/WrangleHome/Components/OngoingDataExplorations/types';
import {
  CONNECTION_NAME,
  CONNECTOR_TYPE,
  COUNT,
  DATA_QUALITY,
  ICON,
  ICON_WITH_TEXT,
  PERCENTAGE_WITH_TEXT,
  RECIPE_STEPS,
  TEXT,
  WORKPSACE_NAME,
  WORKSPACE_ID,
} from 'components/WrangleHome/Components/OngoingDataExplorations/Constants';
import T from 'i18n-react';

export const getUpdatedExplorationCards = (
  existingExplorationCardsData: IExistingExplorationCardsData[]
) => {
  // Massaging the data to map the API response to the Ongoing Data Exploration List

  const updatedExplorationCardsData = [];

  const { dataprep } = DataPrepStore.getState();
  const { connectorsWithIcons } = dataprep;

  const getIconForConnector = (connectorName: string) => {
    const matchingConnector = connectorsWithIcons.find(
      (eachConnector) => eachConnector.name === connectorName
    );
    return matchingConnector.SVG;
  };

  if (
    existingExplorationCardsData &&
    Array.isArray(existingExplorationCardsData) &&
    existingExplorationCardsData.length
  ) {
    existingExplorationCardsData.forEach((eachItem) => {
      const eachExplorationCardData = [];
      Object.keys(eachItem).map((keys) => {
        const obj = {} as IMassagedObject;
        switch (keys) {
          case CONNECTOR_TYPE:
            obj.icon = getIconForConnector(eachItem[keys]);
            obj.label = eachItem[keys];
            obj.type = ICON;
            break;
          case CONNECTION_NAME:
            obj.label = eachItem[keys];
            obj.type = ICON_WITH_TEXT;
            break;
          case WORKPSACE_NAME:
            obj.label = eachItem[keys];
            obj.type = TEXT;
            break;
          case RECIPE_STEPS:
            obj.label = `${eachItem[keys]} ${T.translate(
              'features.WranglerNewUI.OnGoingDataExplorations.labels.recipeSteps'
            )}`;
            obj.type = TEXT;
            break;
          case DATA_QUALITY:
            obj.label = Number(eachItem[keys]);
            obj.percentageSymbol = '%';
            obj.subText = T.translate(
              'features.WranglerNewUI.OnGoingDataExplorations.labels.nullValues'
            );
            obj.type = PERCENTAGE_WITH_TEXT;
            break;
          case WORKSPACE_ID:
            obj.workspaceId = eachItem[keys];
            break;
          case COUNT:
            obj.count = eachItem[keys];
            break;
        }
        eachExplorationCardData.push(obj);
      });

      updatedExplorationCardsData.push(eachExplorationCardData);
    });
  }

  return updatedExplorationCardsData;
};