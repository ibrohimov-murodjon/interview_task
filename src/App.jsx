import React, { useState } from "react";
import { Navbar, Hero, Form, Table } from "./components";
import "./App.css";

function App() {
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const handleSetCount = async (userId, categoryId, count) => {
    try {
      // In a real application, you would make an API call here to update the count
      console.log("Updating count:", { userId, categoryId, count });
      // Trigger table refresh
      setUpdateTrigger((prev) => prev + 1);
    } catch (error) {
      console.error("Error updating count:", error);
    }
  };
  return (
    <>
      <Navbar />
      <Hero />
      <Form onSetCount={handleSetCount} />
      <Table key={updateTrigger} />
    </>
  );
}

export default App;
