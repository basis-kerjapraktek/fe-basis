import { useState, useEffect } from "react";

export const useProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulasi fetch profile dari API atau local storage
    const fakeProfile = {
      name: "Herlina Putri",
      employeeId: "2215061028",
      department: "ICT",
      phone: "081234567181",
    };
    setProfile(fakeProfile);
  }, []);

  return profile;
};
