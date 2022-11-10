import { Box } from "@chakra-ui/layout";
import Navigation from "./navigation";

const MainPage = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0" width="100%" height="150px">
        <Navigation children={undefined} />
      </Box>
      <Box position="absolute" marginTop="150px">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0" width="100%" height="75px">
        Footer
      </Box>
    </Box>
  );
};

export default MainPage;
