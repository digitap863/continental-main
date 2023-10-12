import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRoute from './components/RouteProtection/publicRoute'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import Spinner from './components/Spinner/Spinner'
import ProtectedRoute from './components/RouteProtection/protectedRoute'
import Home from './pages/Home'
import BotInteractions from './pages/BotInteractions';
import DigitalOfficeFormAssets from './pages/DigitalOfficeFormAssets';
import DigitalOffice from './pages/DigitalOffice';
import Streams from './pages/Streams';
import Courses from './pages/Courses';

function App() {
  const isLoading = useSelector((state) => state.alerts.loading);
  return (
    <BrowserRouter>
    {isLoading && <Spinner />}
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            //   <Home />
            // </ProtectedRoute>
            <ProtectedRoute>
              <BotInteractions />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/bot-interactions"
          element={
            <ProtectedRoute>
              <BotInteractions />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/digital-office"
          element={
            <ProtectedRoute>
              <DigitalOffice />
            </ProtectedRoute>
          }
        />
        <Route
          path="/digital-office-form"
          element={
            <ProtectedRoute>
              <DigitalOfficeFormAssets />
            </ProtectedRoute>
          }
        />
         <Route
          path="/Streams"
          element={
            <ProtectedRoute>
              <Streams />
            </ProtectedRoute>
          }
        />
         <Route
          path="/Courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  )
}

export default App
