import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { HomeContainer, Content, Input, Button, ErrorMsg } from "./styled";

export default function Home() {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState("");
  const [ erro, setErro ] = useState(false);

  const handlePesquisa = () => {
    const url = `https://api.github.com/users/${usuario}/repos`;
    axios.get(url)
      .then(response => {
        const repositories = response.data;
        const repoNames = [];
        repositories.map(repo => repoNames.push(repo.name));
        localStorage.setItem("repoNames", JSON.stringify(repoNames));
        history.push("/repositories");
      })
      .catch(() => setErro(true));
  }

  return (
    <HomeContainer>
      <Content>
        <Input
          className="usuarioInput"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />
        <Button type="button" onClick={handlePesquisa}>Pesquisar</Button>
      </Content>
      {erro && <ErrorMsg>Ocorreu um erro. Tente novamente.</ErrorMsg> }
    </HomeContainer>
  );
}