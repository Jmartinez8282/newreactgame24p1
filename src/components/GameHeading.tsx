import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenres from "../hooks/useGeneres"

import usePlatform from "../hooks/usePlatform"
import useGenre from "../hooks/useGenre"

interface Props {
    gameQuery:GameQuery
}


const GameHeading = ({gameQuery}:Props) => {

    //Games
    //Action Games
    //Xbox Games    
    //Xbox Action Games
   

    const platform = usePlatform(gameQuery.platformId)
    const genre = useGenre(gameQuery.genreId);

    
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
  <>
    <Heading marginY={5} fontSize={'5xl'} as={'h1'}>
    {heading}
    </Heading>
  </>
  )
}

export default GameHeading