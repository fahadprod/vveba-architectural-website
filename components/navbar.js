export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand navbar-brand">
        <div className="logo1"></div>
        <div className="logo2"></div>
        <div className="logo3"></div>
        <span>ARCHITECTURE</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="What are you looking for?" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="hamburger-menu">
        <div className="menu-icon">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <div className="navigation">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">BLOG</a>
          <a href="#">CUSTOMERS</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}