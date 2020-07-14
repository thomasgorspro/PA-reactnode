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
                        <Link to="/profile"> Profile </Link>
                        <Link to="/" onClick={logout}> Logout </Link>
                    </>)
                : 
                    (<>
                        <Link to="/login"> Login </Link>
                        <Link to="/user/register"> Register as User</Link>
                        <Link to="/merchant/register"> Register as Merchant</Link>
                    </>)
            }
        </>
    );
};

export default Header;