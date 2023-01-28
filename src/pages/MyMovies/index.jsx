import { Container } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movies } from "../../components/Movies"
import { RiAddLine } from "react-icons/ri"
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";



export function MyMovies() {
    const { user } = useAuth();
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const handleCallback = search => {
        setSearch(search)
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movies?user_id=${user.id}&title=${search}`)
        }
        const a = [{ id: 1, title: "titulo 1" }, { id: 2, title: "titulo 2" }]
        setMovies(a)

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
                        movies.map(movie => {

                            <p>{movie}</p>
                        })
                    }


                </section>
            </main>
        </Container >
    )
}