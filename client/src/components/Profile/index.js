import React from 'react';
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { selectors } = useAuth();


    const format = data => {
        if(!data) return;
        return Object.keys(data).map(key => (
            key !== "password" &&
                <span>{ key }: { data[key] } </span>
        ));
    }
    return (
        <>
            { format(selectors.user()) } 
        </>
    );
}

export default Profile;