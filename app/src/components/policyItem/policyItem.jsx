import React from 'react';
import { number, string, func } from 'prop-types';
import className from 'classnames';

import StatusPill from '../statusPill/statusPill';
import ActionButton from '../actionButton/actionButton';

import './policyItem.scss';

const BASE = 'policy-item';

const PolicyItem = ({
  index,
  icon,
  title,
  notes,
  date,
  status,
  onPolicyChange,
}) => {
  const onNotesChange = newNotes => {
    // TODO add debounce
    onPolicyChange(index, { icon, title, notes: newNotes, date, status });
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={className(BASE, 'if', 'row')}>
      <div
        className={className(
          `${BASE}__icon`,
          'if',
          'col-1--xs',
          'col-1--smlr',
          'col-1--sm',
        )}
      >
        <i
          className={className('if', 'icon', 'product', icon)}
          aria-hidden="true"
        />
      </div>
      <div
        className={className(
          `${BASE}__text`,
          'if',
          'col-3--xs',
          'col-4--smlr',
          'col-5--sm',
        )}
      >
        <h4 className={className('if', 'heading', 'smallest')}>{title}</h4>
        <input value={notes} onChange={e => onNotesChange(e.target.value)} />
      </div>
      <div className={className(`${BASE}__date`, 'if', 'col-2--xs')}>
        <span>{date}</span>
      </div>
      <div
        className={className(
          `${BASE}__status`,
          'if',
          'col-3--xs',
          'col-2--smlr',
        )}
      >
        <StatusPill status={status} />
      </div>
      <div
        className={className(
          `${BASE}__action`,
          'if',
          'col-3--xs',
          'col-3--smlr',
          'col-2--sm',
        )}
      >
        <ActionButton status={status} />
      </div>
    </div>
  );
};

PolicyItem.propTypes = {
  index: number.isRequired,
  icon: string.isRequired,
  title: string.isRequired,
  notes: string.isRequired,
  date: string.isRequired,
  status: string.isRequired,
  onPolicyChange: func.isRequired,
};

export default PolicyItem;
