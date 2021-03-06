import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import * as db from '../db';
import brandingImg from '../images/vroom-car-text.svg';

// To support a fixed header, add this class to document head
// document.documentElement.classList.add('has-navbar-fixed-top');

class Nav extends React.PureComponent {

  state = {
    open: false,
    loggedIn: !!db.getUser(),
  }

  componentDidMount() {
    this.unsubscribe = db.authChange(() => {
      this.setState({ loggedIn: !!db.getUser() });
    });
  }

  componentDidUpdate(props) {
    if (this.props.location !== props.location)
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ open: false });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toggle = () => this.setState(({ open }) => ({ open: !open }))

  signIn = () => db.signIn()
  .then((path) => this.props.history.push(path))
  .catch(console.error);

  render() {
    const { open, loggedIn } = this.state;
    const front = this.props.location.pathname === '/';

    const userData = db.userData();

    let NavBarEnd = null;
    if (!loggedIn) {
      NavBarEnd = (
        <div className="navbar-item">
          <button className="button is-outlined is-link is-inverted" onClick={this.signIn}>
            Sign In
          </button>
        </div>
      );
    } else if (userData && userData.setup) {
      NavBarEnd = (
        <>
          <NavLink className="navbar-item" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="navbar-item" exact to="/listings">
            Listings
          </NavLink>
          <NavLink className="navbar-item" exact to="/listings/new">
            Create Listing
          </NavLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink className="navbar-link" to="/account">
              {userData.name}
            </NavLink>
            <div className="navbar-dropdown is-right is-boxed">
              <Link className="navbar-item" to="/mylistings">
                My Listings
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to="/account">
                Account
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to="/logout">
                Logout
              </Link>
            </div>
          </div>
        </>
      );
    } else {
      NavBarEnd = (
        <>
          <NavLink className="navbar-item" to="/setup">
            Setup
          </NavLink>
          <Link className="navbar-item" to="/logout">
            Logout
          </Link>
        </>
      );
    }

    return (
      <nav className={`navbar is-fixed-top ${front ? 'is-transparent' : 'is-link'}`}>
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to={loggedIn ? '/dashboard' : '/'}>
              <img src={brandingImg} alt="Logo" />
            </Link>
            <div className={`navbar-burger burger ${open ? 'is-active' : ''}`}
              onClick={this.toggle} role="button" tabIndex="0">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <NavLink className="navbar-item" to="/about">
                About
              </NavLink>
            </div>
            <div className="navbar-end">
              {NavBarEnd}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
