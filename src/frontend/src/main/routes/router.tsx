import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DistributionList from '../../presentation/pages/distribution-list/distribution-list'
import UserList from '../../presentation/pages/user-list/user-list'
import ResearchList from '../../presentation/pages/research-list/research-list'
import ResearchResult from '../../presentation/pages/research-result/research-result'
import Header from '../../components/header/header';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ResearchList />}></Route>
                <Route path='/userList' element={<UserList />}></Route>
                <Route path='/distributionList' element={<DistributionList />}></Route>
                <Route path='/researchResult' element={<ResearchResult/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router