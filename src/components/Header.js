import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header( {isMobile} ) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuBtnHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    } 


    return (
        <div id="header" style={{
            display: 'flex',
            justifyContent: 'flex-end',
            zIndex: 1
        }}>

            <div id="header-container" style={{
            display:"flex", 
            justifyContent:"space-between",

            width: "100%"
            }}>
                <div id='div-for-mobile-btn-menu'>
                    <p id="title-at-header" style={{
                        height: 'auto',
                        fontWeight: 700,
                        fontSize: '32px',
                        color: '#fff'
                    }}>Arsen Baiseupov</p>
                    {isMobile ? (
                        <button onClick={() => menuBtnHandler()} style={{background: 'transparent', border: 'transparent'}}><MenuIcon style={{color: '#fff'}} /></button>
                    ):''}
                    
                </div>

                <div id="navbar" style={{
                    display: `${(isMobile && !isMenuOpen) ? "none" : "flex"}`, 
                    justifyContent:"space-between",
                    gap: '32px'
                    }}>
                    <a className="headerButton" href="#about">About</a>
                    <a className="headerButton" href="#experience">Experience</a>
                    <a className="headerButton" href="#projects">Projects</a>
                    <a className="headerButton" href="#contacts">Contacts</a>
                </div>
            </div>
        </div>
    )
}