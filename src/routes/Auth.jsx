import React from 'react'
import { Routes, Route,Navigate } from "react-router-dom";
import {Login,Register} from '../pages'

export default function Auth() {
  return (
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="register" element={<Register/>} />
    <Route path="*" element={<Navigate to="/"/>}/>
  </Routes>
  )
}
