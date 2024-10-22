import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/imageUrl";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenereList = ({ onSelectGenre,selectedGenreId }: Props) => {
  // const { data, isLoading, error } = useData<Genre>("/genres");
  const {data,isLoading,error} = useGenres();
  return (
    <>
    <Heading fontSize={'2xl'} paddingBottom={5}>Genres</Heading>
      <List>
        {isLoading && <Spinner />}
        {error && <Text>{error.message}</Text>}
        {data?.results.map((genre) => (
          <ListItem marginBottom={4} key={genre.id}>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={4}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
              fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                fontSize={"100%"}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
                color={genre.id === selectedGenreId ? 'blue.500' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereList;
