import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGeneres";
import PlatformSelector from "./components/PlatformSelector";

import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

//undefined: is an absence of a value;
//null: is an intentional absence of a value;


export interface GameQuery {
  genreId?: number;
  platformId?: number; 
  sortOrder: string
  searchText: string
}


const App = () => {
  
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //992
        }}

        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area="nav" >
       <NavBar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}/>
       
        </GridItem>
        <Show above="lg">
        <GridItem area="aside"  margin={1}>
          <GenereList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre) => setGameQuery({...gameQuery,genreId: genre.id})}/>
        </GridItem>

        </Show>
        <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery}/>
            <HStack spacing={5} marginBottom={5} >
              <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
                <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery,sortOrder})}/>
            </HStack>
        </Box>
         <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
