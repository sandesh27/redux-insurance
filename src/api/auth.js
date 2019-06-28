const authUserApi = (userid, password) => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        if (userid === "admin" && password === "password") {
          resolve("THIS_IS_JWT_TOKEN");
        }
      });
    },
    reject => {
      // handle reject here
      reject("Invalid credentials!");
    }
  );
};

export const authenticateUser = (userid, password) => {
  return new Promise((resolve, reject) => {
    authUserApi(userid, password)
      .then(response => {
        localStorage.setItem("token", response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};
