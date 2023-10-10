import { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await fetch(
            "http://localhost:8000/api/v1/users/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            setAuth(true);
          } else {
            console.error("Failed to fetch user data:", response.statusText);
            setAuth(false);
          }
        } else {
          setAuth(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setAuth(false);
      }
    };

    fetchUser();
  }, [token]);

  return { auth, user };
};

export default useAuth;

// import { useState, useEffect } from "react";
// import { useGetAuthUserQuery } from "path/to/your/apiSlice"; // Adjust the import path

// const getTokenFromLocalStorage = () => {
//   const token = localStorage.getItem("accessToken");
//   return token;
// };

// const useAuth = () => {
//   const [auth, setAuth] = useState(false);
//   const [user, setUser] = useState({});
//   const { data: userData, isError, isLoading } = useGetAuthUserQuery();

//   // Fetch the token from local storage
//   const token = getTokenFromLocalStorage();

//   useEffect(() => {
//     if (userData) {
//       setAuth(true);
//       setUser(userData);
//     } else {
//       setAuth(false);
//     }
//   }, [userData]);

//   return { auth, user, isLoading, isError, token };
// };

// export default useAuth;
// import { useState, useEffect } from "react";
// import { useGetAuthUserQuery } from "path/to/your/apiSlice"; // Adjust the import path

// const getTokenFromLocalStorage = () => {
//   const token = localStorage.getItem("accessToken");
//   return token;
// };

// const useAuth = () => {
//   const [auth, setAuth] = useState(false);
//   const [user, setUser] = useState({});
//   const { data: userData, isError, isLoading } = useGetAuthUserQuery();

//   // Fetch the token from local storage
//   const token = getTokenFromLocalStorage();

//   useEffect(() => {
//     if (userData) {
//       setAuth(true);
//       setUser(userData);
//     } else {
//       setAuth(false);
//     }
//   }, [userData]);

//   return { auth, user, isLoading, isError, token };
// };

// export default useAuth;
