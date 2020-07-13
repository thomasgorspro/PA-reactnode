import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { selectors, actions } = useAuth();
    const user = selectors.user();
 
    const logout = () => {
        actions.logout();
        return <Redirect to="/"/>
    };
    return (
        <>
            {
                selectors.isConnected() ?  
                    (<>
                        <span> Hello { user.username || user.compagnyName } </span>
                        <Link to="/profile" className="text-white inline-block align-baseline font-bold text-sm hover:text-gray-500 mr-6"> Profile </Link>
                        <Link to="/" onClick={logout} className="text-white inline-block align-baseline font-bold text-sm hover:text-gray-500"> Logout </Link>
                    </>)
                : 
                    (<>
                        <Link to="/login" className="text-white inline-block align-baseline font-bold text-sm hover:text-gray-500 mr-6"> Login </Link>
                        <Link to="/user/register" className="text-white inline-block align-baseline font-bold text-sm hover:text-gray-500 mr-6"> Register as User</Link>
                        <Link to="/merchant/register" className="text-white inline-block align-baseline font-bold text-sm hover:text-gray-500"> Register as Merchant</Link>
                    </>)
            }
        </>
    );
};

export default Header;