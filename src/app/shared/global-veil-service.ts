/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVeilService {
  private isVeilEnabled = false;

  constructor() {
  }

  showVeil(): void {
    this.isVeilEnabled = true;
  }

  hideVeil(): void {
    this.isVeilEnabled = false;
  }

  isEnabled(): boolean {
    return this.isVeilEnabled;
  }
}

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
