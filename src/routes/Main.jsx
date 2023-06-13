import React from 'react'

import { Wallet ,Layout,History} from '../components';
import { Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <Routes>
          <Route path="/" element={<Layout/>}>
                <Route index element={<Wallet/>} />
                <Route path="/history" element={<History/>} />
           </Route>
  </Routes>
  )
}
