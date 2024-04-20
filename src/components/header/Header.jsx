import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
       <header>
            <nav>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About Us
                </NavLink>
            </nav>
       </header>
    );
}


