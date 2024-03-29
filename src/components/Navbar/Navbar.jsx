import classes from "./Navbar.module.css"

const NavBar = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}><a>Profile</a></div>
    <div className={classes.item}><a>Messages</a></div>
    <div className={classes.item}><a>News</a></div>
    <div className={classes.item}><a>Music</a></div>
  </nav>
}

export default NavBar;