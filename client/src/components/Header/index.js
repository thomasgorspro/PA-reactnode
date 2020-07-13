import React from 'react';
import { Redirect } from 'react-router-dom';
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
                        <span> Hello { user } </span>
                        <button onClick={logout}> Logout </button>
                    </>)
                : 
                    (<>
                        <a href="/login"> Login </a>
                        <a href="/user/register"> Register as User</a>
                        <a href="/merchant/register"> Register as Merchant</a>
                    </>)
            }
        </>
    );
};

export default Header;