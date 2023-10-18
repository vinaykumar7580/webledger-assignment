import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 654959,
    title: "Pasta With Tuna",
    image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 511728,
    title: "Pasta Margherita",
    image: "https://spoonacular.com/recipeImages/511728-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 511729,
    title: "Pasta Margherita",
    image: "https://spoonacular.com/recipeImages/511728-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 5117210,
    title: "Pasta Margherita",
    image: "https://spoonacular.com/recipeImages/511728-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 5117211,
    title: "Pasta Margherita",
    image: "https://spoonacular.com/recipeImages/511728-312x231.jpg",
    imageType: "jpg",
  },
];

function Product() {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleLike = () => {
    toast({
      title: "Recipe Liked",
      description: "You are Like Recipe's.",
      status: "success",
      position: "top",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Navbar />
      <br />
      <Heading size={"xl"} fontFamily={"sans-serif"} mt={"150px"}>
        Saved Products
      </Heading>

      <SimpleGrid
        columns={[1, 1, 2, 3]}
        spacing={5}
        alignItems={"center"}
        p={"20px"}
        width={["100%", "100%", "90%", "70%"]}
        margin={"auto"}
      >
        {data &&
          data.map((el) => (
            <Box boxShadow={"2xl"} p={"15px"}>
              {isLoading ? (
                <Box padding="6" boxShadow="lg" bg="white">
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </Box>
              ) : (
                <Box key={el.id}>
                  <Image w={"100%"} src={el.image} />
                  <Heading size={"md"} mt={"10px"}>
                    {el.title}
                  </Heading>
                  <br />
                  <Button
                    onClick={handleLike}
                    colorScheme="orange"
                    variant={"solid"}
                  >
                    Like
                  </Button>

                  <Link to={`/product/${el.id}`}>
                    <Button colorScheme="green" variant={"solid"} ml={4}>
                      Details
                    </Button>
                  </Link>
                  <Button colorScheme="red" variant={"solid"} ml={4}>
                    Delete
                  </Button>
                </Box>
              )}
            </Box>
          ))}
      </SimpleGrid>
      <br />
    </Box>
  );
}

export default Product;
