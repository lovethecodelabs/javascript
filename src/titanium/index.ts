import PubNubCore from '../core/pubnub-common';
import Networking from '../networking';
import Database from '../db/common';
import { get, post } from '../networking/modules/titanium';
import { InternalSetupStruct } from '../core/interfaces';

class PubNub extends PubNubCore {
  constructor(setup: InternalSetupStruct) {
    setup.db = new Database();
    setup.sdkFamily = 'TitaniumSDK';
    setup.networking = new Networking({ get, post });

    super(setup);
  }
}

export { PubNub as default };