export const checkout = data => {
    return fetch("https://localhost:3000/transactions", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
};