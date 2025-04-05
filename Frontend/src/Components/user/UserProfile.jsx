import axios from "axios";

const getUserInfo = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get("http://localhost:5000/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.data.success) {
      console.log("User info:", res.data.user);
      return res.data.user;
    } else {
      console.log("Failed to fetch user info");
    }
  } catch (err) {
    console.error("Error fetching user info:", err.response?.data || err.message);
  }
};
