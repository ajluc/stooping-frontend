import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-grid">
        <p>StoopCity</p>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/add">Add Building</Link>
        </div>
        <Link to="/signIn">Sign In</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  )
}

export default Header
