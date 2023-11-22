import React, { useState } from 'react'

//fecha actual 
const currentDate = new Date().toISOString().split('T')[0]


export default function EditReminderForm({editThisReminder, thisReminder}) {
    const [reminder, setReminder] = useState(thisReminder.reminder)
    const [date, setDate] = useState(thisReminder.dueDate)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        editThisReminder(reminder, thisReminder.id, date)
    }
    return (
        <form className='bg-cyan-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full' onSubmit={handleSubmit} >
            <input className='w-1/4 p-2 px-3' onChange={(e) => setReminder(e.target.value)} type="text" 
            value={reminder} placeholder="Actualizar recodatorio"/>
            <input className='w-1/4 p-2 px-3' value={date} type="date" onChange={(e) => setDate(e.target.value)} />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">actualizar recodatorio</button>
        </form>
    )
}
