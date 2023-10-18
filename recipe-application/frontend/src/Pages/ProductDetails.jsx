import { Box, Heading, Image, SimpleGrid, SkeletonCircle, SkeletonText, Text, useToast } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  let params = useParams();
  const toast = useToast();

  useEffect(() => {
    handleGetData();
  }, [params.id]);

  const handleGetData = () => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8080/api/singleproduct/${params.id}`)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        
      });
  };

  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <Heading mt={"130px"}>Product Details</Heading>
      <br />
      <Box width={"70%"} margin={"auto"}>
        {isLoading ? (
          <Box>
            <SkeletonText mt="4" noOfLines={15} spacing="4" skeletonHeight="2" />
          </Box>
        ) : (
          <SimpleGrid columns={[1,1,2,2]} spacing={5} alignItems={"center"}>
            <Box>
                <Image w={"100%"} src={data && data.image} alt={data && data.title}/>
            </Box>
            <Box textAlign={"left"}>
                <Heading size={"lg"}>{data && data.title}</Heading>
                <br />
                <Heading size={"md"}>Summary</Heading>
                <Text mt={"10px"} fontWeight={"bold"}>
                    {data && data.summary}
                </Text>
            </Box>
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
}

export default ProductDetails;
