import {NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <header class="header">

    <div id="menu-btn" className="fas fa-bars"></div>

    <NavLink href="#" className="logo"> coffee <i className="fas fa-mug-hot"></i> </NavLink>

    <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#review">review</a>
        <a href="#book">book</a>
    </nav>

    <NavLink href="#" className="btn">book a table</NavLink>

</header>
  )
}

export default Navigation