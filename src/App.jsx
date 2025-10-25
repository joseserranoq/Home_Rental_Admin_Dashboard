import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from './Pages/Login'
import { HouseRental } from './Pages/HouseRental'
import { Dashboard } from './Pages/Dashboard'
import { Provider } from './hooks/Provider'
import { Header } from './components/Header'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <Header>
            <Routes>
              <Route path='/' element={<Login />} />



              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/house-rental/:id' element={<HouseRental />} />
            </Routes>
          </Header>
        </Provider>

      </BrowserRouter>
    </>
  )
}

export default App
