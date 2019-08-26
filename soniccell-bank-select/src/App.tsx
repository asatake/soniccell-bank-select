import React, { useState } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Content, Container } from "react-bulma-components";
import Search from "./Search";

type Group = {
  id: number;
  name: string;
};

type Bank = {
  id: number;
  name: string;
  lsb: number;
  msb: number;
  pc: number;
};

type GeneralProps = {
  group: string[];
  banks: string[];
};

const App: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState({});

  return (
    <Content>
      <Container>
        <Search />
      </Container>
    </Content>
  );
};

export default App;
