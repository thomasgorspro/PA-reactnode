import React from 'react';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { selectors, actions } = useAuth();
    const user = selectors.user();
    return (
        <>
            {
                selectors.isConnected() ?  
                    (<>
                        <span> Hello { user.email } </span>
                        <button onClick={actions.logout}>Logout</button>
                    </>)
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