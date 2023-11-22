import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Reminder({Reminder, togleComplete, deleteReminder, EditReminder}){
  return (
    <div>
        <p onClick={() => togleComplete(Reminder.id)}>{Reminder.reminder} -  Programado para: {Reminder.dueDate} - Estado de la tarea: {Reminder.completed ? "Completado" : "Pendiente"}</p>
        <div>
            <DeleteIcon onClick={() => deleteReminder(Reminder.id)} />
            <EditIcon onClick={() => EditReminder(Reminder.id)} />
        </div>
    </div>
  )
}