import {NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <header class="header">

    <div id="menu-btn" className="fas fa-bars"></div>

    <NavLink href="#" className="logo"> coffee <i className="fas fa-mug-hot"></i> </NavLink>

    <nav className="navbar">
        <NavLink href="/home">home</NavLink>
        <NavLink href="/about">about</NavLink>
        <NavLink href="/menu">menu</NavLink>
        <NavLink href="/review">review</NavLink>
        <NavLink href="/book">book</NavLink>
    </nav>

    <NavLink href="#" className="btn">book a table</NavLink>

</header>
  )
}

export default Navigation