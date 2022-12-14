import { Link } from 'react-router-dom'

const Header = ({ handleLogout, user }) => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="link nav-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/add">Add Stoop</Link>
          <Link to="/list">List View</Link>
        </div>
        {user ? (
          <Link onClick={handleLogout} to="/">
            Log Out
          </Link>
        ) : (
          <div>
            <Link to="/signIn">Sign In</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
