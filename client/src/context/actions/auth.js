export const login = (data) => {
  return fetch("http://localhost:3000/login_check", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
  })
  .then((res) => res.json())
  .catch(err => err);
};

export const register = (data) => {
  return fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
  })
  .then((res) => res.json())
  .catch(err => err);
}
