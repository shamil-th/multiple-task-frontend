import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { taskListCollecton } from '../../features/taskSlice';

const TaskList = () => {
    const tasklist = useSelector((state) => state.tasklist.tasklist);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(taskListCollecton());
    },[])
    console.log('tasklist',tasklist)

  return (
    <div>TaskList</div>
  )
}

export default TaskList