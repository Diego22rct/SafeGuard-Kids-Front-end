
import React, { useState } from 'react'

//fecha actual 
const currentDate = new Date().toISOString().split('T')[0]


export default function ReminderForm({addReminder}) {
    const [reminder, setReminder] = useState("")
    const [date, setDate] = useState(currentDate)
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(reminder, date)
        addReminder(reminder, date)

        setReminder("")
        setDate(currentDate)
    }
    return (
        <form className='bg-cyan-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full' onSubmit={handleSubmit} >
            <input className='p-2 px-3 w-1/4 border-2' onChange={(e) => setReminder(e.target.value)} type="text" 
            value={reminder} placeholder="¿Cúal es el recodatorio hoy?"/>
            <input className='w-auto p-2 px-3' value={date} type="date" onChange={(e) => setDate(e.target.value)} />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Agregar recodatorio</button>
        </form>
    )
}
