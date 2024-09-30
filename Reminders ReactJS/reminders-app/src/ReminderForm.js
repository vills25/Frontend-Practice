// src/ReminderForm.js
import React, { useState } from 'react';

const ReminderForm = ({ addReminder }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addReminder(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter reminder"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Reminder</button>
    </form>
  );
};

export default ReminderForm;
