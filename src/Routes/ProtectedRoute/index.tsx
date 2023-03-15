import { Navigate, useLocation } from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  homePath: string;
  correctPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({isAuthenticated, homePath, correctPath, outlet}: ProtectedRouteProps) {
  const currentLocation = useLocation();

  if(isAuthenticated && correctPath === currentLocation.pathname) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: isAuthenticated ? correctPath : homePath }} />;
  }
};