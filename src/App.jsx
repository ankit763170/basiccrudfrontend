import React, { useEffect, useState } from "react";
import "./App.css";
import { Splitter, SplitterPanel } from "primereact/splitter";
import UserCard from "./components/card";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://basiccrud-3m24.onrender.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await fetch(`https://basiccrud-3m24.onrender.com/users/:id`, {
        method: "DELETE",
      });
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="App">
        <Splitter style={{ height: "100vh", width: "100vw" }}>
          <SplitterPanel size={80}>
            <Splitter layout="vertical">
              <SplitterPanel size={85}>
                <Splitter>
                  <SplitterPanel
                    className="flex align-items-center justify-content-center"
                    size={20}
                    className="sp"
                  >
                    Pane 1{" "}
                  </SplitterPanel>
                  <SplitterPanel
                    className="flex align-items-center justify-content-center "
                    size={80}
                    className="sp"
                  >
                    Panel 2
                    {users.map((user) => (
                      <div key={user.id}>
                        <UserCard user={user} onDelete={deleteUser} />
                      </div>
                    ))}
                  </SplitterPanel>
                </Splitter>
              </SplitterPanel>
              <SplitterPanel
                className="flex align-items-center justify-content-center"
                size={15}
                className="sp"
              >
                Panel 3
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>
      </div>
    </>
  );
}

export default App;
