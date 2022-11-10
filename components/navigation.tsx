import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdSearch,
  MdOutlineEmail,
  MdFavorite,
  MdInfoOutline,
} from "react-icons/md";

const navMenu = [
  {
    name: "Courses",
    icon: MdSearch,
    route: "/",
  },
  {
    name: "Contact",
    icon: MdOutlineEmail,
    route: "/contact",
  },
  {
    name: "Content", //Inhaltliches über Erste Hilfe
    icon: MdFavorite,
    route: "/content",
  },
  {
    name: "About",
    icon: MdInfoOutline,
    route: "/about",
  },
];

const Navigation = ({ children }) => {
  return (
    <Box height="100%" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px" display="flex" justifyContent="space-between" alignItems="center">
        <Box width="120px" paddingX="20px">
          <NextImage src="/pulse-icon.png" height={60} width={120} alt={""} />
        </Box>
        <Box marginRight="20px">
          <List display="flex" spacing={2}>
            {navMenu.map((menu) => (
              //normal bracket means implicit return instead of {return XY}
              //NextLink we're opting into client side rendering (instead of server-request with a classic a-tag)
              //passHref is passing the href to the LinkOverlay
              <ListItem paddingX="20px" marginTop="0px !important" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} color="white" marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
