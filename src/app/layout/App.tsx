import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import NavBar from './navbar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{ margin: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}


export default observer(App);