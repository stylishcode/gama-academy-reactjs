import React, { useEffect, useState } from "react";
import { Container, Title, List, ListItem, LinkHome  } from "./styled";
import { useHistory } from "react-router";

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repoNames = localStorage.getItem("repoNames");
    if (repoNames !== null) {
      repoNames = JSON.parse(repoNames);
      setRepositories(repoNames);
      localStorage.clear();
    } else {
      history.push("/");
    }
  }, [history]);

  return (
    <>
      <Container>
        <Title>Repositórios</Title>
        <List>
          { 
            repositories.map((repo, index) => {
              return <ListItem key={ index }> Repositório: { repo } </ListItem>;
            })
          }
        </List>
        <LinkHome to="/">Voltar</LinkHome>
      </Container>
    </>
  );
}