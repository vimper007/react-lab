import { Route, Routes } from 'react-router'
import LazyLoading from '../pages/LazyLoading'
import { Home } from '../components/home'
import { About } from '../components/about'
import { Contact } from '../components/contact'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/lazy-loading/*' element={<LazyLoading />}></Route>
        </Routes>
    )
}

export default AppRouter