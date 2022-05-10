import { NavLink } from 'react-router-dom';
import './style.css';


export default function Navbar() {
    return (
        <nav className='nav'>
            <ul>
                <li className='navlist'>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li className='navlist'>
                    <NavLink
                        exact
                        to="/products"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Products
                    </NavLink>
                </li>
                <li className='navlist'>
                    <NavLink
                        exact
                        to="/reports"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Reports
                    </NavLink>
                </li>
                <li className='navlist'>
                    <NavLink
                        exact
                        to="/dashbord"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Dashbord
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};