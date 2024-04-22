import { NavLink } from 'react-router-dom';
import LogoSvg from '../../assets/logo.svg';
import css from './Header.module.css';
import clsx from 'clsx';
import { SlMenu } from "react-icons/sl";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.nav, isActive && css.active);
};

export const Header = () => {
    return (
      
            <header className={css.header}>
                    <img src={LogoSvg} alt="Logo" className={css.svg} />
                    <nav className={css.navigation}>
                        <NavLink to='/' className={buildLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to='/about' className={buildLinkClass}>
                            About Us
                        </NavLink>
                       
                        <NavLink to='/servises' className={buildLinkClass}>Servises</NavLink>
                        <NavLink to='/investing' className={buildLinkClass}>
                            Invest in Cyprus
                        </NavLink>
                        <NavLink to='/contact' className={buildLinkClass}>
                            Contact Us
                        </NavLink>
                    </nav>
                    <button type='button' className={css.btn}>Get in touch</button>
                    <button type='button' className={css.btnMenu}> <SlMenu className={css.burger } /></button>
           </header>
    );
}



