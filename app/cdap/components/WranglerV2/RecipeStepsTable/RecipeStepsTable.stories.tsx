/*
 * Copyright © 2023 Cask Data, Inc.
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

import { ComponentMeta, ComponentStory } from '@storybook/react';

import RecipeStepsTable, {
  RecipeStepsTableContainer,
} from 'components/WranglerV2/RecipeStepsTable';

export default {
  title: 'RecipeStepsTable',
  component: RecipeStepsTable,
} as ComponentMeta<typeof RecipeStepsTable>;

const mockRecipe = [
  "delete-column 'body1'",
  "parse-column 'body2' with delimiter 'comma' and set first row as header",
  "change-data-type 'body2' to string",
  "parse-column 'body2' with delimiter 'comma'",
];

const Template: ComponentStory<typeof RecipeStepsTable> = (args) => <RecipeStepsTable {...args} />;

export const RecipeStepsPanel = Template.bind({});

RecipeStepsPanel.args = {
  recipeSteps: mockRecipe,
  Container: RecipeStepsTableContainer,
};