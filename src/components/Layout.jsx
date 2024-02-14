import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import TaskList from './TaskList/TaskList';
import Task from './Task/Task';

const Layout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tasklist' element={<TaskList/>} />
        <Route path='task/' element={<Task/>} />
    </Routes>
  )
}

export default Layout

