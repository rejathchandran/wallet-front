import React from 'react'

import { Wallet ,Layout} from '../components';
import { Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <Routes>
          <Route path="/" element={<Layout/>}>
                <Route index element={<Wallet/>} />
           </Route>
  </Routes>
  )
}
