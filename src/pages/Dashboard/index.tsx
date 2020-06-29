import React, { useState, useEffect, FormEvent } from "react";
import { Title, Header, Form, Repositories, Error, Loading } from "./styles";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";

interface Article {
    title: string;
    id: number;
    authors: string;
    description: string;
}

const Dashboard: React.FC = () => {
    const [load, setLoad] = useState(false);
    const [newArticles, setNewArticles] = useState("");
    const [inputError, setInputError] = useState("");
    const [articles, setArticles] = useState<Article[] | null>(() => {
        const storagedArticles = localStorage.getItem(
            "@ReactSearchArticles:articles"
        );
        if (storagedArticles) {
            return JSON.parse(storagedArticles);
        } else {
            return [];
        }
    });

    // useEffect(() => {
    //     localStorage.setItem(
    //         "@ReactSearchArticles:articles",
    //         JSON.stringify(articles)
    //     );
    // }, [articles]);

    async function handleAddArticle(
        e: FormEvent<HTMLFormElement>
    ): Promise<void> {
        e.preventDefault();
        setLoad(true);

        if (!newArticles) {
            setInputError("Digite o artigo/author a ser buscado");
            return;
        }

        try {
            const dataPost = {
                searchInput: newArticles,
            };
            const response = await api.post<Article[]>("", dataPost);
            const articlesData = response.data;
            let { data }: any = articlesData;
            setArticles(data);
            setInputError("");
            setLoad(false);
        } catch (err) {
            setInputError("Erro na busca desse Artigo");
            setLoad(false);
        }
    }

    return (
        <React.Fragment>
            <Header>
                <FiSearch size={220} />
                <Title>Pesquise Artigos Cíentificos</Title>
                <Link to="/favorites">Favoritos</Link>
            </Header>
            <Form hasError={!!inputError} onSubmit={handleAddArticle}>
                <input
                    placeholder="Buscar artigos: Entre uma ou mais palavras"
                    value={newArticles}
                    onChange={(e) => setNewArticles(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            {load && <Loading />}
            {articles && articles.length > 1 && (
                <Repositories>
                    {articles.map((a) => (
                        <Link key={a.id} to={`/article/${a.id}`}>
                            <div>
                                <strong>{a.title}</strong>
                                <p>Authors: {a.authors}</p>
                                <span>{a.description}</span>
                            </div>
                            <FiChevronRight size={20} />
                        </Link>
                    ))}
                </Repositories>
            )}
        </React.Fragment>
    );
};

export default Dashboard;
