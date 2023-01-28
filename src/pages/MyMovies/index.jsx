import { Container } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movies } from "../../components/Movies"
import { RiAddLine } from "react-icons/ri"
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useSearchParams } from "react-router-dom";

export function MyMovies() {
    const { user } = useAuth();
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();

    const handleCallback = search => {
        setSearch(search)
    }

    useEffect(() => {
        const searchParam = searchParams.get("search")

        if (searchParam) {
            setSearch(searchParam)
        }

        async function fetchMovies() {
            const response = await api.get(`/movies?user_id=${user.id}&title=${search}`)
            setMovies(response.data)
        }

        fetchMovies()
    }, [search]);

    return (
        <Container>
            <Header handleCallback={handleCallback} />
            <main>
                <div>
                    <h2>Meus filmes </h2>
                    <Button to="/new" title="Adicionar filme" icon={RiAddLine} />
                </div>
                <section>

                    {
                        movies.map(movie => (
                            < Movies
                                key={movie.id}
                                data={movie} />
                        ))
                    }

                </section>
            </main>
        </Container >
    )
}