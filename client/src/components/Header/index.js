import React from 'react';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { selectors, actions } = useAuth();
    return (
        <>
            { 
                selectors.isConnected() ?  
                    <button onClick={actions.logout}>Logout</button>
                : 
                    (<>
                        <a href="/login"> Login </a>
                        <a href="/register"> Register </a>
                    </>)
            }
        </>
    );
};

export default Header;