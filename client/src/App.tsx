import React from "react";

import "./App.css";
import styled from "styled-components";
import Layout from "./components/Layout";
import { useStore } from "./context";

const Container = styled.div``;

function App() {
  const store = useStore();
  return (
    <Container>
      <Layout />
    </Container>
  );
}

export default App;
