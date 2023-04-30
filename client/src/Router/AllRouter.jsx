import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Policy } from '../pages/Policy'
import { Pagenotefound } from '../pages/Pagenotefound'
import { Register } from '../pages/Register';

const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="*" element={<Pagenotefound />} />
        </Routes>
    )
}

export default AllRouter
