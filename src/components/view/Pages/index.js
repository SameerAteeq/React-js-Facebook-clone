import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from '../../common/Navbar'
import Friends from '../Friends'
import FriendRequest from '../Friends/FriendRequest'
import Content from '../Friends/FriendRequest/content'
import UserProfilePost from '../Friends/FriendRequest/content/post'
import Group from '../Group'
import Home from '../Home'
import MarketPlace from '../MarketPlace'
import Watch from '../watch'
const Pages = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />} >
                    <Route index element={<Home />} />
                    <Route path='/friends' element={<Friends />} />
                    <Route path='/friends/request/:id' element={<FriendRequest />} />
                    <Route path='/friends/request/:id/:tab' element={<FriendRequest />} />
                    <Route path='/friends/:id/:tab' element={<Content />} />
                    <Route path='/friends/request' element={<FriendRequest />} />
                    <Route path='/watch' element={<Watch />} />
                    <Route path='/marketplace' element={<MarketPlace />} />
                    <Route path='/group' element={<Group />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Pages