import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiSolidChevronsDown } from "react-icons/bi";

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BiSolidChevronsDown />}>
          Order by Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Average rating</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
