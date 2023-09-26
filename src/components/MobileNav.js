import React , {useState} from "react";
import NavLinks from "./NavLinks";
import "./styles/MobileNav.css"
import { GrMenu, GrClose } from "react-icons/gr";

const MobileNav = () => {

    const [open, setOpen] = useState(false);
    const closeMenu = <GrMenu className="hamburger" size="20px" onClick={ () =>setOpen(!open)} />
    const openMenu = <GrClose className="hamburger close-menu" size="20px" onClick={ () =>setOpen(!open)} />

    const closeMobileMenuOnClick = () => setOpen(false);

    return (
        <nav className="mobile-nav">
            {open ? openMenu : closeMenu}
            {open && <NavLinks isMobile={true} closeMobileMenu = {closeMobileMenuOnClick} /> }
        </nav>
    )
}

export default MobileNav;