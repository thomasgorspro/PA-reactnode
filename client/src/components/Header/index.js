import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; 

const Header = () => {
    const { selectors, actions } = useAuth();
    const user = selectors.user();

    return (
        <header>
            <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-8">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/shop"> 
                        <span>E-commerce website</span>
                    </Link>
                </div>
                
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <Link to="/cart">
                            Cart
                        </Link>
                    </div>
                    <div class="flex items-center flex-shrink-0 text-white mr-6">
                        {
                            selectors.isConnected() ?  
                                (<>
                                    <span> Hello { user.email } </span>
                                    <button onClick={actions.logout}>Logout</button>
                                </>)
                            : 
                                (<>
                                    <Link to ="/login"> Login as Merchant</Link>
                                    <Link to="/register"> Register </Link>
                                </>)
                        }
                    </div>
                </div>
            </nav>

        </header>
    )
};

export default Header;