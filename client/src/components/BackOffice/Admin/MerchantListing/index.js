import React, { useEffect, useState } from "react";

const MerchantListing = () => {
  const [merchants, setMerchants] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchMerchants() {
      let response = await fetch("http://localhost:3000/merchant", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      response = await response.json();
      setMerchants(response);
    }
    fetchMerchants();
  }, []);

  const acceptAccount = (id) => {
    fetch(`http://localhost:3000/admin/validate_merchant/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const deleteMerchant = (id) => {
    fetch(`http://localhost:3000/merchant/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => setMerchants(merchants.filter((user) => user.id !== id)));
  };

  return (
    <section className="flex justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">KBIS</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Telephone</th>
            <th className="px-4 py-2">Account Status</th>
          </tr>
        </thead>
        <tbody>
          {merchants &&
            merchants.map((merchant) => {
              return (
                <tr>
                  <td className="border px-4 py-2">{merchant.compagnyName}</td>
                  <td className="border px-4 py-2">{merchant.KBIS}</td>
                  <td className="border px-4 py-2">{merchant.email}</td>
                  <td className="border px-4 py-2">{merchant.phone}</td>
                  <td className="border px-4 py-2">
                    {!merchant.confirmed ? (
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => acceptAccount(merchant.id)}
                      >
                        Accept
                      </button>
                    ) : (
                      "Accepted"
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-fold py-2 px-4 rounded"
                      onClick={() => deleteMerchant(merchant.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default MerchantListing;
