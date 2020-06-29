import React from 'react';
import { string } from 'prop-types';
import className from 'classnames';

import { POLICY_STATUS } from '../../constants/constants';

import './statusPill.scss';

export const BASE = 'status-pill';

const statusPill = ({ status }) => {
  const { ACTIVE, UNPAID, ENDING_SOON } = POLICY_STATUS;
  let text;
  let modifier;

  switch (status) {
    case ACTIVE:
      text = 'Active';
      modifier = 'active';
      break;
    case UNPAID:
      text = 'Unpaid';
      modifier = 'unpaid';
      break;
    case ENDING_SOON:
      text = 'Ending soon';
      modifier = 'ending';
      break;
    default:
      text = 'Active';
      modifier = 'active';
      break;
  }

  return (
    <div className={className(BASE, `${BASE}--${modifier}`)}>
      <span
        className={className(`${BASE}__text`, `${BASE}__text--${modifier}`)}
      >
        {text}
      </span>
    </div>
  );
};

statusPill.defaultProps = {
  status: '',
};

statusPill.propTypes = {
  status: string,
};

export default statusPill;
