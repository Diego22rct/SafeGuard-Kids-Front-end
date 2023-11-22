import React, { useState } from 'react'

//fecha actual 
const currentDate = new Date().toISOString().split('T')[0]


export default function EditReminderForm({editThisReminder, thisReminder}) {
    const [reminder, setReminder] = useState(thisReminder.reminder)
    const [date, setDate] = useState(thisReminder.dueDate)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(reminder, thisReminder.id)
        editThisReminder(reminder, thisReminder.id)
    }
    return (
        <form onSubmit={handleSubmit} >
            <input onChange={(e) => setReminder(e.target.value)} type="text" 
            value={reminder} placeholder="Actualizar recodatorio"/>
            <input value={thisReminder.dueDate} type="date" onChange={(e) => setDate(e.target.value)} />
            <button type="submit">actualizar recodatorio</button>
        </form>
    )
}
