/*
 * Copyright © 2017-2018 Cask Data, Inc.
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
import Box from '@material-ui/core/Box';
import CustomTooltip from 'components/ConnectionList/Components/CustomTooltip';
import { WrangelIcon } from 'components/ConnectionList/iconStore';
import { createWorkspace } from 'components/Connections/Browser/GenericBrowser/apiHelpers';
import { ConnectionsContext } from 'components/Connections/ConnectionsContext';
import * as React from 'react';
import { Redirect } from 'react-router';
import { getCurrentNamespace } from 'services/NamespaceStore';
import { useStyles } from './styles';

const TabLabelCanSample = ({
  label,
  entity,
  initialConnectionId,
  toggleLoader,
}: {
  label: string;
  entity: any;
  initialConnectionId: string;
  toggleLoader: () => any;
}) => {
  const classes = useStyles();
  const [workspaceId, setWorkspaceId] = React.useState(null);
  const [currentConnection, setCurrentConnection] = React.useState(initialConnectionId);
  const { onWorkspaceCreate } = React.useContext(ConnectionsContext);

  const onExplore = (entity) => {
    toggleLoader();
    const { canBrowse } = entity;
    if (!canBrowse) {
      onCreateWorkspace(entity);
    }
  };

  const onCreateWorkspace = async (entity, parseConfig = {}) => {
    try {
      createWorkspaceInternal(entity, parseConfig);
    } catch (e) {}
  };

  const createWorkspaceInternal = async (entity, parseConfig = {}) => {
    const wid = await createWorkspace({
      entity,
      connection: currentConnection,
      properties: parseConfig,
    });
    if (onWorkspaceCreate) {
      return onWorkspaceCreate(wid);
    }
    setWorkspaceId(wid);
    toggleLoader();
  };
  if (workspaceId) {
    return <Redirect to={`/ns/${getCurrentNamespace()}/wrangler-grid/${workspaceId}`} />;
  }
  return (
    <CustomTooltip title={label.length > 16 ? label : ''} arrow>
      <Box className={classes.labelsContainerCanSample}>
        <Typography variant="body1" className={classes.labelStylesCanSample}>
          {label}
        </Typography>
        <div onClick={() => onExplore(entity)}>
          <Box className={classes.wranglingHover} onClick={() => onExplore(entity)}>
            <WrangelIcon />
            <Typography color="primary">Wrangle</Typography>
          </Box>
        </div>
      </Box>
    </CustomTooltip>
  );
};

export default TabLabelCanSample;