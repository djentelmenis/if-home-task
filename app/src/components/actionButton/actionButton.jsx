import React from 'react';
import { string } from 'prop-types';
import className from 'classnames';

import { POLICY_STATUS } from '../../constants/constants';

import './actionButton.scss';

const BASE = 'action-button';

const ActionButton = ({ status }) => {
  const { ACTIVE, UNPAID, ENDING_SOON } = POLICY_STATUS;
  let text;
  let modifier = '';

  switch (status) {
    case ACTIVE:
      text = 'Fill a claim';
      break;
    case UNPAID:
      text = 'Pay 24.47$';
      modifier = 'unpaid';
      break;
    case ENDING_SOON:
      text = 'Renew';
      break;
    default:
      text = 'Fill a claim';
      break;
  }

  return (
    <button
      type="button"
      className={className(BASE, { [`${BASE}--${modifier}`]: modifier })}
    >
      <span
        className={className(`${BASE}__text`, {
          [`${BASE}__text--${modifier}`]: modifier,
        })}
      >
        {text}
      </span>
      <div className={`${BASE}__icon`}>
        <span className={className('if', 'icon', 'ui', 'chevron-down')} />
      </div>
    </button>
  );
};

ActionButton.propTypes = {
  status: string.isRequired,
};

export default ActionButton;
