import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { selectors, actions } = useAuth();
    const user = selectors.user();

    const logout = () => {
        actions.logout();
        return <Redirect to="/" />
    };
    return (
        <>
            <header className="bg-gradient">
                <nav className="flex flex-col lg:flex-row items-center justify-between flex-wrap p-6 mb-8">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <img src="/images/amazon-icon.svg" width="30" className="mr-3" />
                        <a href="/" className="">
                            <div className="flex flex-col">
                                <span className="font-semibold text-2xl leading-none">Amazonax</span>
                                <span className="text-xs font-bold leading-none">Dashboard</span>
                            </div>
                        </a>
                        <div className="flex ml-10 text-md">
                            <Link to="/admin/merchants-list" className="hover:text-gray-400 inline-block px-4 py-2 leading-none text-white mt-4 lg:mt-0 transition duration-300 mr-6"> Merchants List </Link>
                        </div>
                        <div className="flex text-md">
                            <Link to="/merchant/backoffice" className="hover:text-gray-400 inline-block px-4 py-2 leading-none text-white mt-4 lg:mt-0 transition duration-300 mr-6"> Transactions List </Link>
                        </div>
                    </div>

                    <div className="flex">
                        {
                            selectors.isConnected() ?
                                (<>
                                    <Link to="/profile" className="shadow border-none bg-indigo-700 hover:bg-gray-100 hover:text-indigo-700 inline-block text-sm px-4 py-2 leading-none border rounded text-white mt-4 lg:mt-0 transition duration-300 mr-6"> {user.username || user.compagnyName} </Link>
                                    <Link to="/" onClick={logout} className="shadow border-none bg-red-700 hover:bg-white hover:text-red-700 inline-block text-sm px-4 py-2 leading-none border rounded text-white mt-4 lg:mt-0 transition duration-300 mr-6"> Logout </Link>
                                </>)
                                :
                                (<>
                                    <Link to="/login" className="hover:text-gray-400 inline-block text-sm px-4 py-2 leading-none text-white mt-4 lg:mt-0 transition duration-300 mr-6"> Login </Link>
                                    <Link to="/user/register" className="shadow border-none bg-indigo-700 hover:bg-gray-100 hover:text-indigo-700 inline-block text-sm px-4 py-2 leading-none border rounded text-white mt-4 lg:mt-0 transition duration-300 mr-6"> Register as User</Link>
                                    <Link to="/merchant/register" className="shadow border-none bg-indigo-700 hover:bg-gray-100 hover:text-indigo-700 inline-block text-sm px-4 py-2 leading-none border rounded text-white mt-4 lg:mt-0 transition duration-300"> Register as Merchant</Link>
                                </>)
                        }
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;