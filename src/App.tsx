import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //992
        }}
      >
        <GridItem area="nav" >
       <NavBar/>
        </GridItem>
        <Show above="lg">
        <GridItem area="aside">
          <GenereList/>
        </GridItem>

        </Show>
        <GridItem area="main">
         <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
