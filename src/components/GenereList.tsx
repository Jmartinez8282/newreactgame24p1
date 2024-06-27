import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/imageUrl";
import { color } from "framer-motion";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}

const GenereList = ({ onSelectGenre,selectedGenre }: Props) => {
  const { data, isLoading, error } = useData<Genre>("/genres");
  return (
    <>
      <List>
        {isLoading && <Spinner />}
        {error && <Text>{error}</Text>}
        {data.map((genre) => (
          <ListItem marginBottom={4} key={genre.id}>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={4}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize={"lg"}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
                color={genre.id === selectedGenre?.id ? 'blue.500' : 'normal'}
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
