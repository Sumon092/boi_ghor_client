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

  return { auth, user,token };
};

export default useAuth;


