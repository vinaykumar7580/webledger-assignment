import { Link } from "react-router-dom";
import axios from "axios";
import { Box, SimpleGrid, Text, space } from "@chakra-ui/react";
import { CheckCircleIcon, EditIcon, ViewIcon, LockIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

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
        <Link to={"/home"}>
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
          <Link to={"/"}>
            <Text
              fontWeight={"bold"}
              border={"1px solid blueviolet"}
              padding={"5px"}
              borderRadius={"5px"}
              _hover={{ bg: "#E0B0FF", color: "#ED0331" }}
            >
              <span>
                <LockIcon boxSize={4} color="#ED0331" />
              </span>{" "}
              Logout
            </Text>
          </Link>
          {/* <Text fontWeight={"bold"}>
          <span>
            <ViewIcon boxSize={6} color="#ED0331" />
          </span>{" "}
          Saves: {count}
        </Text> */}
          {/* <Text fontWeight={"bold"}>
          <span>
            <CheckCircleIcon boxSize={4} color="#ED0331" />
          </span>{" "}
          Likes: 0
        </Text> */}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
}

export default Navbar;
