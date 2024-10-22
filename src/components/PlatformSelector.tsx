import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BiSolidChevronsDown } from "react-icons/bi"
import usePlatforms, { Platform } from "../hooks/usePlatforms"


interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}


const PlatformSelector = ({onSelectPlatform,selectedPlatformId}:Props) => {

   const {data,error} = usePlatforms()

   const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId);

   if(error) return null;
  return (
   <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BiSolidChevronsDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
       <MenuList>
            {data?.results.map(platform => <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
       </MenuList>
    </Menu>
   </>
  )
}

export default PlatformSelector