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

import { MENU_OPTIONS } from 'components/WranglerGrid/NestedMenu/menuOptions/menuOptions';
import {
  ColumnIcon,
  FragmentIcon,
  MathIcon,
  NullIcon,
  SecurityIcon,
  StructureIcon,
} from 'components/WranglerGrid/TransformationToolbar/iconStore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import ReplayIcon from '@material-ui/icons/Replay';
import { TOOLBAR_ICONS_LABEL_PREFIX } from 'components/WranglerGrid/TransformationToolbar/constants';
import T from 'i18n-react';
import { IMenuItem } from 'components/WranglerGrid/NestedMenu/MenuItemComponent';

export const nestedMenuOptions: IMenuItem[] = [
  {
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.undoIcon`).toString(),
    action: 'undo',
    dataType: ['all'],
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.undoIcon`).toString(),
    icon: ReplayIcon,
    options: [],
    open: false,
  },
  {
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.redoIcon`).toString(),
    action: 'redo',
    dataType: ['all'],
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.redoIcon`).toString(),
    icon: ReplayIcon,
    options: [],
    open: false,
  },
  {
    options: [],
    iconSVG: NullIcon,
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.nullIcon`).toString(),
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.nullIcon`).toString(),
    open: false,
  },
  {
    options: [],
    iconSVG: ColumnIcon,
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.columnIcon`).toString(),
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.columnIcon`).toString(),
    open: false,
  },
  {
    options: MENU_OPTIONS,
    iconSVG: StructureIcon,
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.structureIcon`).toString(),
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.structureIcon`).toString(),
    open: false,
  },
  {
    options: [],
    iconSVG: FragmentIcon,
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.fragmentIcon`).toString(),
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.fragmentIcon`).toString(),
    open: false,
  },
  {
    options: [],
    iconSVG: MathIcon,
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.mathIcon`).toString(),
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.mathIcon`).toString(),
    open: false,
  },
  {
    options: [],
    iconSVG: SecurityIcon,
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.securityIcon`).toString(),
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.securityIcon`).toString(),
    open: false,
  },
  {
    options: [],
    icon: MoreHorizIcon,
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.moreHorizIcon`).toString(),
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.moreHorizIcon`).toString(),
    open: false,
  },
  {
    title: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.gridIcon`).toString(),
    toolName: T.translate(`${TOOLBAR_ICONS_LABEL_PREFIX}.gridIcon`).toString(),
    icon: GridOnOutlinedIcon,
    options: [],
    open: false,
  },
];