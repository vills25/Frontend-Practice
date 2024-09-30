// src/ReminderList.js
import React from 'react';
import Reminder from './Reminder';

const ReminderList = ({ reminders, deleteReminder }) => {
  return (
    <ul>
      {reminders.map((reminder) => (
        <Reminder key={reminder.id} reminder={reminder} deleteReminder={deleteReminder} />
      ))}
    </ul>
  );
};

export default ReminderList;
