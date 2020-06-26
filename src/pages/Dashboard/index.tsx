import React, { useState } from "react";
import { Title, Header, Form } from "./styles";
import { FiSearch } from "react-icons/fi";

const Dashboard: React.FC = () => {
    const [newArticles, setNewArticles] = useState("");
    console.log(newArticles);
    return (
        <React.Fragment>
            <Header>
                <FiSearch size={220} />
                <Title>Pesquise Artigos Cíentificos</Title>
            </Header>
            <Form hasError={false}>
                <input
                    placeholder="Buscar artigos: Entre uma ou mais palavras"
                    value={newArticles}
                    onChange={(e) => setNewArticles(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>
        </React.Fragment>
    );
};

export default Dashboard;
