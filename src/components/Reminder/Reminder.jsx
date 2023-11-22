import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Reminder({Reminder, togleComplete, deleteReminder, EditReminder}){
  return (
    <div className='bg-cyan-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full'>
        <div className='text-xl' onClick={() => togleComplete(Reminder.id)}>
          <p className='font-bold'>
          {Reminder.reminder} 
          </p>
          <p>
          -  Programado para: {Reminder.dueDate} 
          </p>
          - Estado de la tarea:
          {Reminder.completed ? <p className='text-green-500'>Completado</p> : <p className='text-red-500'>Pendiente</p>}
          </div>
        <div>
            <DeleteIcon onClick={() => deleteReminder(Reminder.id)} />
            <EditIcon onClick={() => EditReminder(Reminder.id)} />
        </div>
    </div>
  )
}