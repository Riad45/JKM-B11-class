export default function ToDo({task, isDone,time=0}){

    // conditional rendering using ternary 
   return isDone ?
   <li>Done : {task} Duration: {time} </li>
   : <li>Pending: {task} Duration: {time} </li>


// conditional rendering using && (shows the true part)

// return isDone && <li> Done : {task} Duration: {time}</li>


// conditional rendering using || (shows the false part)

//  return isDone || <li> Pending : {task} Duration: {time}</li>


}