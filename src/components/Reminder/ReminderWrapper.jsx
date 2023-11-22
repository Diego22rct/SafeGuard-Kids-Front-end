
import React ,{ useState } from 'react'
import ReminderForm from './ReminderForm.jsx'
import { v4 as uuidv4 } from 'uuid'
import Reminder from './Reminder.jsx'
import EditReminderForm from './EditReminderForm.jsx'

export default function ReminderWrapper() { 
  const [reminders, setReminder] = useState([])

  const addReminder = (reminder, date) => {
    console.log(reminder, date) 
    setReminder([...reminders, { id: uuidv4(), reminder, completed: false, isEditing: false, dueDate: date }])
  }

  const togleComplete = (id) => {
    setReminder(reminders.map((reminder) => reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder))
  }

  const deleteReminder = (id) => {
    setReminder(reminders.filter((reminder) => reminder.id !== id) )

  }

  const editReminder = (id) => {
    setReminder(reminders.map((reminder) => reminder.id === id ? { ...reminder, isEditing: !reminder.isEditing } : reminder))
  }

  const editThisReminder = (rem, id) => {
    setReminder(
      reminders.map((reminder) =>
        reminder.id === id ? { ...reminder, reminder: rem, isEditing: !reminder.isEditing } : reminder
      )
    )
  }

  return (
    <div className=" inline-block">
        <h1>Recordatorios</h1>
        <ReminderForm addReminder={addReminder} />
        {reminders.map((reminder, index) => (
          reminder.isEditing ? (
            <EditReminderForm editThisReminder={editThisReminder} thisReminder={reminder} />
          ) : (
            <Reminder 
              key={reminder.id} 
              Reminder={reminder}
              deleteReminder={deleteReminder} 
              EditReminder={editReminder} 
              togleComplete={togleComplete} />
          )
          ))
          }
    </div>
  )
}