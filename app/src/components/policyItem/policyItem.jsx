import React, { useState } from 'react';
import { number, string, func, shape } from 'prop-types';
import className from 'classnames';

import StatusPill from '../statusPill/statusPill';
import ActionButton from '../actionButton/actionButton';

import './policyItem.scss';

export const BASE = 'policy-item';

const PolicyItem = ({
  index,
  policy,
  policy: { icon, title, notes, period, status },
  onPolicyChange,
}) => {
  const [titleInput, setTitleInput] = useState(title);
  const [notesInput, setNotesInput] = useState(notes);

  const onTitleChange = newTitle => {
    onPolicyChange(index, { ...policy, title: newTitle, notes: notesInput });
    setTitleInput(newTitle);
  };

  const onNotesChange = newNotes => {
    onPolicyChange(index, { ...policy, title: titleInput, notes: newNotes });
    setNotesInput(newNotes);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={BASE}>
      <div className={className(`${BASE}__icon`)}>
        <i
          className={className('if', 'icon', 'product', icon)}
          aria-hidden="true"
        />
      </div>
      <div className={className(`${BASE}__text`)}>
        <input
          className={className(
            `${BASE}__text__title`,
            'if',
            'heading',
            'smallest',
          )}
          value={titleInput}
          onChange={e => onTitleChange(e.target.value)}
          aria-label="Policy title"
        />
        <input
          className={`${BASE}__text__notes`}
          value={notesInput}
          onChange={e => onNotesChange(e.target.value)}
          aria-label="Policy notes"
        />
      </div>
      <div className={className(`${BASE}__period`)}>
        <span aria-label="Policy period">{period}</span>
      </div>
      <div className={className(`${BASE}__status`)}>
        <StatusPill status={status} />
      </div>
      <div className={className(`${BASE}__action`)}>
        <ActionButton status={status} />
      </div>
    </div>
  );
};

PolicyItem.propTypes = {
  index: number.isRequired,
  policy: shape({
    icon: string.isRequired,
    title: string.isRequired,
    notes: string.isRequired,
    period: string.isRequired,
    status: string.isRequired,
  }).isRequired,
  onPolicyChange: func.isRequired,
};

export default React.memo(PolicyItem);
