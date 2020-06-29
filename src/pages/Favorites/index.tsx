import React, { useEffect, useState } from "react";
import { Title } from "./styles";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header } from "./styles";

interface Article {
    title: string;
    id: number;
    authors: string;
    description: string;
}

const Favorites: React.FC = () => {
    const [articles] = useState<Article[] | null>(() => {
        const storagedFavorites = localStorage.getItem(
            "@ReactSearchArticles:favorites"
        );
        if (storagedFavorites) {
            return JSON.parse(storagedFavorites);
        } else {
            return [];
        }
    });

    useEffect(() => {
        const favoritos = localStorage.getItem(
            "@ReactSearchArticles:favorites"
        );
        console.log(favoritos);
    }, [articles]);
    console.log(articles);
    return (
        <React.Fragment>
            <Header>
                <Title>Artigos Favoritos</Title>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
        </React.Fragment>
    );
};

export default Favorites;
