import React, { useState } from "react";
import { Navbar, Hero, Form, Table } from "./components";
import "./App.css";

function App() {
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const handleSetCount = async (userId, categoryId, count) => {
    try {
      console.log("Updating count:", { userId, categoryId, count });
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
