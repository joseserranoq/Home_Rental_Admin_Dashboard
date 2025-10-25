import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from './Pages/Login'
import { HouseRental } from './Pages/HouseRental'
import { Dashboard } from './Pages/Dashboard'
import { Provider } from './hooks/Provider'
import { Header } from './components/Header'
import { ProtectedRoute } from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <Header>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path='/house-rental/:id' element={<ProtectedRoute><HouseRental /></ProtectedRoute>} />
            </Routes>
          </Header>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
