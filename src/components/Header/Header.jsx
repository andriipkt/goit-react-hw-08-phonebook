import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import css from './Header.module.css';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: #ffc107;
  height: 38px;
  width: 60px;
  border-radius: 6px;
  transition: fill 200ms ease-in-out, background-color 200ms ease-in-out;

  &:hover {
    fill: black;
    background-color: #ffc107;
  }

  &.active {
    fill: black;
    background-color: #ffc107;
  }
`;

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={css.shadow}>
        <nav className="navbar bg-dark mb-3">
          <div
            className="container-fluid"
            style={{ paddingLeft: '32px', paddingRight: '32px' }}
          >
            <div className={css.navSemiWrapper}>
              <StyledNavLink to="/">
                <svg height="34px" width="34px" viewBox="0 0 488.901 488.901">
                  <g>
                    <g>
                      <path
                        d="M468.8,0H94.6C42.5,0,0,42.5,0,94.6v299.7c0,52.1,42.5,94.6,94.6,94.6h374.1c11.7,0,20.2-9.6,20.2-20.2V20.2
			C489,8.5,480.5,0,468.8,0z M40.4,394.4V94.6c0-29.8,24.4-54.2,54.2-54.2h28.7v408.2H94.6C64.9,448.6,40.4,424.1,40.4,394.4z
			 M448.6,448.6H163.7V40.4h284.9L448.6,448.6L448.6,448.6z"
                      />
                      <path
                        d="M301.9,242.4c40.4,0,72.3-31.9,72.3-72.3s-32.9-72.3-72.3-72.3c-40.4,0-72.3,33-72.3,72.3
			C229.6,210.5,262.6,242.4,301.9,242.4z M301.9,140.3c18.1,0,30.8,13.8,30.8,30.8s-13.8,30.8-30.8,30.8s-30.8-13.8-30.8-30.8
			C271.1,154.2,284.9,140.3,301.9,140.3z"
                      />
                      <path
                        d="M221.1,368.9h162.6c11.7,0,20.2-9.6,21.3-20.2c0-51-45.7-91.4-102-91.4s-102,41.5-102,91.4
			C200.9,359.3,209.4,368.9,221.1,368.9z M303,298.7c24.4,0,45.7,12.8,55.3,29.8H246.6C256.2,310.4,278.5,298.7,303,298.7z"
                      />
                    </g>
                  </g>
                </svg>
              </StyledNavLink>
              <NavLink
                className="btn btn-outline-warning"
                to="/phonebook"
                style={
                  !isLoggedIn
                    ? {
                        opacity: '0.5',
                        pointerEvents: 'none',
                      }
                    : {}
                }
              >
                Phonebook
              </NavLink>
            </div>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <div className={css.navSemiWrapper}>
                <NavLink className="btn btn-outline-warning" to="/register">
                  Register
                </NavLink>
                <NavLink className="btn btn-outline-warning" to="/login">
                  Log in
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className={css.Main}>
        <Suspense fallback={null}>
          <div className="container">
            <Outlet />
          </div>
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};

export default Header;
