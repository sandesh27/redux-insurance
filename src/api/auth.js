export const authenticateUser = (userid, password) => {
  return new Promise((resolve, reject) => {
    authUserApi(userid, password)
      .then(response => {
        localStorage.setItem("token", response);
        resolve(response);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};
const authUserApi = (userid, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userid === "admin" && password === "password") {
        resolve("THIS_IS_JWT_TOKEN");
      } else {
        reject("Login failed");
      }
    });
  }, 2000);
};
