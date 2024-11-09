
import { SimpleGrid,Image } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShoots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
console.log(data)
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2,sm:2}} spacing={4}>
      {data?.results.map(file => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShoots;
