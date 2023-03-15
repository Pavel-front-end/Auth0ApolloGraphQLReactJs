import React, {useEffect} from 'react'
import { NavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import './header.module.css'

export default function Header() {
  const {
    isAuthenticated,
    user,
    loginWithPopup,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  

  useEffect(() => {
    isAuthenticated && (async () => {
      try {
        const token = await getAccessTokenSilently();
        console.log(token);
        
      } catch (e) {
        console.error(e);
      }
    })();
    
  }, [getAccessTokenSilently, isAuthenticated]);


  return (
    <header>
        <div>
            <p>Logo Sona</p>
        </div>
        <nav>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/genesis-sona-nft'>GenesisSonaNft</NavLink>
            {isAuthenticated && <NavLink to='/dashboard' >Dashboard</NavLink>}
        </nav>
        <div>
          { !isAuthenticated ? 
            <button onClick={loginWithPopup}>Log in</button> : 
            <>
            <p>Hello {user?.name}{' '}</p>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
            </>
          }
        </div>
    </header>
  )
}
