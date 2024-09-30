import React, { useState } from "react";
import './App.css';

function App() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Add a new reminder
  const addReminder = (e) => {
    e.preventDefault();
    if (newReminder.trim() === "") return;
    
    const reminderObj = {
      text: newReminder,
      date: new Date().toLocaleDateString(), // Add date
    };
    
    setReminders([...reminders, reminderObj]);
    setNewReminder("");
  };

  // Delete a reminder
  const deleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  // Enable edit mode
  const enableEditMode = (index) => {
    setEditIndex(index);
    setEditText(reminders[index].text);
  };

  // Update the reminder text
  const updateReminder = (index) => {
    const updatedReminders = reminders.map((reminder, i) =>
      i === index ? { ...reminder, text: editText } : reminder
    );
    setReminders(updatedReminders);
    setEditIndex(null);
  };

  return (
    <div className="App">
      <h1>Reminders App</h1>
      <form onSubmit={addReminder}>
        <input
          type="text"
          className="Inputfield"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
          placeholder="Enter reminder"
        />
        <button type="submit" className="add-btn">Add Reminder</button>
      </form>

      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <>
                <span>{reminder.text} </span>
                <span>({reminder.date})</span>
              </>
            )}
            <div>
              {editIndex === index ? (
                <button className="Save" onClick={() => updateReminder(index)}>Save</button>
              ) : (
                <button className="Edit" onClick={() => enableEditMode(index)}>Edit</button>
              )}
              <button className="Delete" onClick={() => deleteReminder(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
