/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { isIOS } from '@react-native-firebase/app/lib/common';
import {
  createModuleNamespace,
  FirebaseModule,
  getFirebaseRoot,
} from '@react-native-firebase/app/lib/internal';

import version from './version';

const statics = {};

const namespace = 'appDistribution';

const nativeModuleName = 'RNFBAppDistributionModule';

class FirebaseAppDistributionModule extends FirebaseModule {
  isTesterSignedIn() {
    // eslint-disable-next-line no-console
    console.warn(
      'This method is deprecated. Please use `isTesterSignedIn()` from the modular API instead.',
    );
    if (isIOS) {
      return this.native.isTesterSignedIn();
    }

    return Promise.reject(new Error('App Distribution is not supported on this platform.'));
  }

  signInTester() {
    // eslint-disable-next-line no-console
    console.warn(
      'This method is deprecated. Please use `signInTester()` from the modular API instead.',
    );
    if (isIOS) {
      return this.native.signInTester();
    }

    return Promise.reject(new Error('App Distribution is not supported on this platform.'));
  }

  checkForUpdate() {
    // eslint-disable-next-line no-console
    console.warn(
      'This method is deprecated. Please use `checkForUpdate()` from the modular API instead.',
    );
    if (isIOS) {
      return this.native.checkForUpdate();
    }

    return Promise.reject(new Error('App Distribution is not supported on this platform.'));
  }

  signOutTester() {
    // eslint-disable-next-line no-console
    console.warn(
      'This method is deprecated. Please use `signOutTester()` from the modular API instead.',
    );
    if (isIOS) {
      return this.native.signOutTester();
    }

    return Promise.reject(new Error('App Distribution is not supported on this platform.'));
  }
}

export * from './modular';

// import { SDK_VERSION } from '@react-native-firebase/app-distribution';
export const SDK_VERSION = version;

// import appDistribution from '@react-native-firebase/app-distribution';
// appDistribution().X(...);
export default createModuleNamespace({
  statics,
  version,
  namespace,
  nativeModuleName,
  nativeEvents: false,
  hasMultiAppSupport: false,
  hasCustomUrlOrRegionSupport: false,
  ModuleClass: FirebaseAppDistributionModule,
});

// import appDistribution, { firebase } from '@react-native-firebase/app-distribution';
// appDistribution().X(...);
// firebase.appDistribution().X(...);
export const firebase = getFirebaseRoot();
