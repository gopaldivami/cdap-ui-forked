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

export const mockConnectorTypeData = [
  {
    name: 'PostgreSQL',
    type: 'connector',
    category: 'Database',
    description: 'Connection to access data in PostgreSQL databases using JDBC.',
    className: 'io.cdap.plugin.postgres.PostgresConnector',
    artifact: {
      name: 'postgresql-plugin',
      version: '1.9.0-SNAPSHOT',
      scope: 'SYSTEM',
    },
  },
  {
    name: 'File',
    type: 'connector',
    category: 'File',
    description: 'Connection to browse and sample data from the local file system.',
    className: 'io.cdap.plugin.batch.connector.FileConnector',
    artifact: {
      name: 'core-plugins',
      version: '2.10.0-SNAPSHOT',
      scope: 'SYSTEM',
    },
  },
  {
    name: 'File',
    type: 'connector',
    category: 'File',
    description: 'Connection to browse and sample data from the local file system.',
    className: 'io.cdap.plugin.batch.connector.FileConnector',
    artifact: {
      name: 'core-plugins',
      version: '2.10.0-SNAPSHOT',
      scope: 'SYSTEM',
    },
  },
];

export const mockConnectorTypeWithNoCategory = [
  {
    name: 'PostgreSQL',
    type: 'connector',

    description: 'Connection to access data in PostgreSQL databases using JDBC.',
    className: 'io.cdap.plugin.postgres.PostgresConnector',
    artifact: {
      name: 'postgresql-plugin',
      version: '1.9.0-SNAPSHOT',
      scope: 'SYSTEM',
    },
  },
];

export const mockConnectorTypeWithDuplicates = [
  {
    name: 'PostgreSQL',
    type: 'connector',

    description: 'Connection to access data in PostgreSQL databases using JDBC.',
    className: 'io.cdap.plugin.postgres.PostgresConnector',
    artifact: {
      name: 'postgresql-plugin',
      version: '1.9.0-SNAPSHOT',
      scope: 'SYSTEM',
    },
  },
  {
    name: 'PostgreSQL',
    type: 'connector',

    description: 'Connection to access data in PostgreSQL databases using JDBC.',
    className: 'io.cdap.plugin.postgres.PostgresConnector',
    artifact: {
      name: 'postgresql-plugin',
      version: '1.9.0-SNAPSHOT',
      scope: 'SYSTEM',
    },
  },
];

export const mockConnectorTypeWithoutDuplicates = [
  {
    name: 'PostgreSQL',
    type: 'connector',

    description: 'Connection to access data in PostgreSQL databases using JDBC.',
    className: 'io.cdap.plugin.postgres.PostgresConnector',
    artifact: {
      name: 'postgresql-plugin',
      version: '1.9.0-SNAPSHOT',
      scope: 'SYSTEM',
    },
  },
  {
    name: 'File',
    type: 'connector',

    description: 'Connection to access data in PostgreSQL databases using JDBC.',
    className: 'io.cdap.plugin.postgres.PostgresConnector',
    artifact: {
      name: 'postgresql-plugin',
      version: '1.9.0-SNAPSHOT',
      scope: 'SYSTEM',
    },
  },
];