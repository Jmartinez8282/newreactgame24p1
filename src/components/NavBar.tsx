import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from "react-router-dom"



const NavBar = () => {
  return (
    <>
        <HStack>
          <Link to={'/'}>
            <Image marginLeft={10} marginRight={3}  src={logo} boxSize='60px'/>
          
          </Link>
            <SearchInput />
            <ColorModeSwitch/>
        </HStack>
    </>
  )
}

export default NavBar