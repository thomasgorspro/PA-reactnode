import React from 'react';
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { selectors } = useAuth();

    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className="sm:w-auto w-full sm:bg-white sm:shadow-md rounded sm:px-8 px-4 pt-6 pb-8 mb-4">
                    <div className="flex flex-col">
                        <span className="text-xl text-purple-600 font-bold text-center mb-6">{selectors.user().firstname} {selectors.user().lastname}</span>
                        <span className="text-base">Username : {selectors.user().username}</span>
                        <span className="text-base">Role : {selectors.user().role === 'USER' ? "User" : "Merchant"}</span>
                        <span>Created at : {selectors.user().createdAt}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;