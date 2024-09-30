import React from 'react';

const Reminder = ({ reminder, deleteReminder }) => {
  return (
    <li>
      {reminder.text}
      <button onClick={() => deleteReminder(reminder.id)}>Delete</button>
    </li>
  );
};

export default Reminder;