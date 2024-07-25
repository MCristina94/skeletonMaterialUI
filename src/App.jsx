import { Toys } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Container, Skeleton, Typography } from "@mui/material"
import Character from "./Components/Character"
import CharacterSkeleton from "./Components/CharacterSkeleton"
import { useEffect, useState } from "react"


function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  //el fackepromise se usa por que la api es rapida, y necesitabamos visualizar en el caso que se demorara en cargar
  const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 4000));

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      await fakePromise()
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();      
      setCharacters(data.results)
    } catch (error) {
      console.error(error)
    }finally{
      setLoading(false);
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" textAlign="center" mb={3}>Rick and Morty</Typography>
      <Box sx={{display: "grid", gap: 2, maxWidth: 250, mx: "auto"}}>

        {
          loading ? 
            Array.from(new Array (4)).map((_, index) => (
              <CharacterSkeleton key={index} /> ))
              : characters.map((character) => (
                <Character
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
              ))
        }
        {/* <Character/> */}
       {/* <CharacterSkeleton/> */}
    </Box>
    </Container>
  )
}

export default App
