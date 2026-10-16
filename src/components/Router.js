import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import Home from './HomeComponent'
import  { Component } from 'react'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
