import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ViewIcon } from "@chakra-ui/icons";

function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const toast = useToast();

  useEffect(() => {
    handleData();
  }, [count]);

  const handleData = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:8080/product/data")
      .then((res) => {
        console.log("use", res.data);
        setData(res.data);
        setCount(res.data.length);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast({
          title: "Error",
          description: "Something Went Wrong.",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/product/delete/${id}`)
      .then((res) => {
        console.log(res);
        toast({
          title: "Recipe Deleted",
          description: "You are deleted Recipe's.",
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
        handleData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      <Navbar />
      <br />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"baseline"}
        width={["100%", "100%", "90%", "70%"]}
        margin={"auto"}
        p={"15px"}
      >
        <Box></Box>
        <Heading size={"xl"} fontFamily={"sans-serif"} mt={"150px"}>
          Saved Products
        </Heading>
        <Text fontWeight={"bold"}>
          <span>
            <ViewIcon boxSize={6} color="#ED0331" />
          </span>{" "}
          Saves: {count}
        </Text>
      </Box>

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
            <Box boxShadow={"2xl"} p={"15px"} key={el.id}>
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
                  {/* <Button
                    onClick={handleLike}
                    colorScheme="orange"
                    variant={"solid"}
                  >
                    Like
                  </Button> */}

                  <Link to={`/product/${el.id}`}>
                    <Button colorScheme="green" variant={"solid"} ml={4}>
                      Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(el._id)}
                    colorScheme="red"
                    variant={"solid"}
                    ml={4}
                  >
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
