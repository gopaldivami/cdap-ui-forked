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

import React, { useState } from 'react';
import DrawerWidget from '.';

export default function() {
  const [open, setOpen] = useState<boolean>(true);

  const closeClickHandler = () => {
    setOpen(false);
  };

  return (
    <DrawerWidget
      headingText={'Drawer Widget Header'}
      openDrawer={open}
      showDivider={true}
      headerActionTemplate={<button>Click</button>}
      closeClickHandler={closeClickHandler}
    >
      <div>This is Drawer Body</div>
    </DrawerWidget>
  );
}