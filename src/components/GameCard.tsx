import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game  from "../entities/Game";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";
import { Link } from "react-router-dom";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={3}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>

          <Heading fontSize={"100%"}>
            <Link to={"/games/" + game.slug}>{game.name}</Link>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
