import { Container } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Movie } from "../../components/Movie";
import { useParams } from 'react-router-dom';

import { FiArrowLeft } from "react-icons/fi";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Details() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      const response = await api.get(`/movies/${id}`)
      setMovie(response.data)
    }

    fetchMovieById()
  }, []);
  return (
    <Container>
      <Header />
      <ButtonText id="buttonText" title="Voltar" icon={FiArrowLeft} to="/" />

      <div>
        <Movie data={movie} />
      </div>
    </Container>
  )
}

