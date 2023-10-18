import { Link } from "react-router-dom";
import { Box, SimpleGrid, Text, space } from "@chakra-ui/react";
import { CheckCircleIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <SimpleGrid
      columns={[1, 1, 1, 3]}
      spacing={2}
      p={["20px 30px", "20px 30px", "20px 40px", "20px 60px"]}
      boxShadow="2xl"
      bg="#FEDFE5"
      position={"fixed"}
      w={"100%"}
      margin={"auto"}
      zIndex={10}
      color={"blue.600"}
    >
      <Box>
        <Link to={"/"}>
          <Text
            fontSize={["4xl", "4xl", "3xl", "3xl"]}
            fontFamily={"cursive"}
            fontWeight={"extrabold"}
          >
            Recipe App
          </Text>
        </Link>
      </Box>
      <Box></Box>
      <Box>
      <SimpleGrid
        columns={[3, 3, 3, 3]}
        alignItems={"center"}
        spacing={[2, 2, 3, 1]}
      >
        <Link to={"/product"}>
          <Text
            fontWeight={"bold"}
            border={"1px solid blueviolet"}
            padding={"5px"}
            borderRadius={"5px"}
            _hover={{ bg: "#E0B0FF", color: "#ED0331" }}
          >
            <span>
              <EditIcon boxSize={4} color="#ED0331" />
            </span>{" "}
            Products
          </Text>
        </Link>
        <Text fontWeight={"bold"}>
          <span>
            <ViewIcon boxSize={6} color="#ED0331" />
          </span>{" "}
          Saves: 0
        </Text>
        <Text fontWeight={"bold"}>
          <span>
            <CheckCircleIcon boxSize={4} color="#ED0331" />
          </span>{" "}
          Likes: 0
        </Text>
      </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
}

export default Navbar;
