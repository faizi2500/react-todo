import React from "react"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]

  const handleNav = () => {
    setNavOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavOpen(false)
  }

  return (
    <nav className ="navBar">
      <button onClick={handleNav}>{navOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}</button>
      <ul className ={`menuNav ${navOpen ? " showMenu" : ""}`}>
        {links.map(each => {
          return (
            <li key = {each.id}>
              <NavLink to={each.path} activeClassName="active-link" onClick={() => closeMenu()} exact>{each.text}</NavLink>
            </li>
          )     
        })}
      </ul>

    </nav>
  )
}
export default Navbar