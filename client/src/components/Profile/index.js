import React from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { actions, selectors } = useAuth();
  const token = localStorage.getItem('token');

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="sm:w-auto w-full sm:bg-white sm:shadow-md rounded sm:px-8 px-4 pt-6 pb-8 mb-4">
          <div className="flex flex-col">
            {selectors.user().role ? (
              <>
                <span className="text-xl text-purple-600 font-bold text-center mb-6">
                  {selectors.user().firstname} {selectors.user().lastname}
                </span>

                <span className="text-base">
                  E-mail:{" "}
                  <span className="text-blue-600">
                    {selectors.user().username || selectors.user().email}
                  </span>
                </span>
                <span className="text-base">Role: User</span>
                <span>Created at : {selectors.user().createdAt}</span>
              </>
            ) : (
              <>
                <span className="text-xl text-purple-600 font-bold text-center mb-6">
                  {selectors.user().compagnyName}
                </span>
                <span className="text-base">
                  E-mail: {selectors.user().email}
                </span>
                <span className="text-base">Role: Merchant</span>
                <span>Created at : {selectors.user().createdAt}</span>
                <span>Currency : {selectors.user().currency}</span>
                <br></br>
                <span>Client Secret : <b>{selectors.user().clientSecret}</b></span>
                <span>Client Token : <b>{selectors.user().clientToken}</b></span>
                <br></br>
                <span>
                  Confirmation URL: {selectors.user().confirmationURL}
                </span>
                <span>Redirection URL: {selectors.user().redirectionURL}</span>
                <div className="mt-3 w-full">
                  <button
                    className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={() => actions.generateCredentials(selectors.user().id, token)}
                  >
                    Regenerate Credentials
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
