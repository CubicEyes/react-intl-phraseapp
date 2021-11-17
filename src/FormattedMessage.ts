import {createElement} from 'react';
import {
    FormattedMessage as IntlFormattedMessage
} from 'react-intl';

import {escapeId, isPhraseEnabled} from './functions'

// @ts-ignore
export class FormattedMessage extends IntlFormattedMessage {
    render() {
        if (isPhraseEnabled()) {
            // @ts-ignore
            return createElement("span", null, escapeId(this.props.id));
        } else {
            return super.render();
        }
    }
}
