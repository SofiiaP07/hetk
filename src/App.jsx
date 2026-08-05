import { useEffect, useState } from "react";
import supabase from "./services/supabase";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from("profiles")
        .select("*");

      console.log("Data:", data);
      console.log("Error:", error);

      if (data) {
        setProfiles(data);
      }
    }

    testConnection();
  }, []);

  return (
    <div>
      <h1>Hetk</h1>

      <h2>Profiles:</h2>

      {profiles.map((profile) => (
        <div key={profile.id}>
          <h3>{profile.full_name}</h3>
          <p>{profile.email}</p>
          <p>{profile.role}</p>
        </div>
      ))}
    </div>
  );
}

export default App;