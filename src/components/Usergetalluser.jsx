import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function useGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setloading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/getUserProfile", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Assuming backend sends an array directly
        setAllUsers(response.data.allusers || response.data);
      } catch (error) {
        console.log("Error in useGetAllUsers:", error);
      } finally {
        setloading(false);
      }
    };

    getUser();
  }, []);

  return [allUsers, loading];
}

export default useGetAllUsers;
