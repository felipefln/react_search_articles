import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { Header, Article, Loading, ButtonDownload } from "./styles";

import search from "../../assets/search.png";
import api from "../../services/api";
import { Title } from "./styles";

interface Article {
    id: number;
    authors: string;
    title: string;
    fullText: string;
    downloadUrl: string;
    fullTextIdentifier: string;
    publisher: string;
}

interface Params {
    id: string;
}

const Repository: React.FC = () => {
    const [load, setLoad] = useState(true);
    const [article, setArticle] = useState<Article | null>(null);
    const { params } = useRouteMatch<Params>();
    let coreId = params.id;
    const [favorite] = useState<Article[] | null>(() => {
        const storagedFavorite = localStorage.getItem(
            "@ReactSearchArticles:favorites"
        );
        if (storagedFavorite) {
            return JSON.parse(storagedFavorite);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            "@ReactSearchArticles:favorites",
            JSON.stringify(favorite)
        );
    }, [favorite]);

    useEffect(() => {
        api.get("", {
            params: {
                id: coreId,
            },
        }).then((response) => {
            setLoad(false);
            setArticle(response.data.data);
        });
    }, [coreId]);

    function download() {
        localStorage.setItem(
            "@ReactSearchArticles:favorites",
            JSON.stringify(favorite)
        );
    }
    console.log(article);
    return (
        <React.Fragment>
            <Header>
                <img src={search} alt="Teste" style={{ width: "100px" }} />
                <span>Resultado Artigos Cíentificos</span>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            {article && (
                <Article>
                    <button onClick={download}>
                        <FiHeart size={20} />
                    </button>

                    <div>
                        <a key={article.id} href={article.fullTextIdentifier}>
                            <div>
                                <Title>
                                    <strong>{article.title}</strong>
                                </Title>
                                <p>Authors: {article.authors}</p>
                                <p>{article.fullText}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </a>
                    </div>
                    <ButtonDownload>
                        <a href="#" download={article.downloadUrl}>
                            Download do Artigo
                        </a>
                    </ButtonDownload>
                </Article>
            )}
            {load && <Loading />}
        </React.Fragment>
    );
};

export default Repository;
