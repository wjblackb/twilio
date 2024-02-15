import * as Flex from '@twilio/flex-ui';

import { FlexComponent } from '../../../../types/feature-loader';
import ContactHistory from '../../custom-components/ContactHistoryView/ContactHistoryView';

export const componentName = FlexComponent.ViewCollection;
export const componentHook = function addContactHistoryView(flex: typeof Flex) {
  flex.ViewCollection.Content.add(
    <flex.View name="contact-history" key="contact-history-view">
      <ContactHistory key="contact-history-view-content" />
    </flex.View>,
  );
};
