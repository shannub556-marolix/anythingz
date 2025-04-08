import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Navbar2 from './Navbar2';

const PrivateRoutes = () => {
  const login = useSelector(state => state.userLogin)
  const { accessToken } = login;
  return (
    <div>
      {/* {accessToken && <Navbar2 title="VST Technologies" />}
      {accessToken ? <Outlet /> : <Navigate to="/" />} */}
      {accessToken === true ? (
    <>
      <Navbar2 title="VST Technologies"/>
      <Outlet />
    </>
  ) : (
    null
  )}
      {/* {accessToken ? <Navbar2 title="VST Technologies"/> : null} */}
      {/* <Outlet /> */}
      {!accessToken && <Navigate to="/" />}
    </div>

  )
}

export default PrivateRoutes