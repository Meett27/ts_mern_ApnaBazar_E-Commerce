import { useContext } from 'react'
import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Store } from './Store'

function App() {
  const {
    state: { cart, userInfo },
    dispatch,
  } = useContext(Store)
  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }
  return (
    <div className='d-flex flex-column vh-100'>
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar expand="lg">
          <Container>
          <LinkContainer to="/">
              <Navbar.Brand>ApnaBazar</Navbar.Brand>
            </LinkContainer>
          </Container>
          <Nav>
            <Link to="/cart" className="nav-link">
              Cart
            {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            )}
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>

      </main>
      <footer>
        <div className="text-center">All rights reserved</div> 
        </footer>
    </div>
  )
}

export default App
