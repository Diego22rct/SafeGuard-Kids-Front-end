
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
        <form onSubmit={handleSubmit} >
            <input onChange={(e) => setReminder(e.target.value)} type="text" 
            value={reminder} placeholder="¿Cúal es el recodatorio hoy?"/>
            <input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
            <button type="submit">Agregar recodatorio</button>
        </form>
    )
}
