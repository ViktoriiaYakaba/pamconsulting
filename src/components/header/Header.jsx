import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderModal from './HeaderModal'
import LogoSvg from '../../assets/logo.svg';
import css from './Header.module.css';
import clsx from 'clsx';
import { SlMenu } from 'react-icons/sl';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.nav, isActive && css.active);
};

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <NavLink to='/services' className={buildLinkClass}>
          Services
        </NavLink>
        <NavLink to='/investing' className={buildLinkClass}>
          Invest in Cyprus
        </NavLink>
        <NavLink to='/contact' className={buildLinkClass}>
          Contact Us
        </NavLink>
      </nav>
      <button type='button' className={css.btn} onClick={openModal}>
        Get in touch
      </button>
      <button type='button' className={css.btnMenu} onClick={openModal}>
        <SlMenu className={css.burger} />
      </button>

     
      <HeaderModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </header>
  );
};



