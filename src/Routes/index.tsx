import { FC } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";
import Home from '../Pages'
import Dashboard from '../Pages/Dashboard'
import GenesisSonaNft from '../Pages/GenesisSonaNft'

const RoutesPath: FC = () => {
    const currentLocation = useLocation();
    const {
        isAuthenticated,
      } = useAuth0();

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: isAuthenticated,
    homePath: '/',
    correctPath: currentLocation.pathname,
  };
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='genesis-sona-nft' element={<GenesisSonaNft />} />
            <Route path='/dashboard' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={ <Dashboard />} />} />
        </Routes>
    )
}
export default RoutesPath