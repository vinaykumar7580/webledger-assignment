import {
  Box,
  Center,
  Container,
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
      .get(`https://busy-rose-harp-seal-cape.cyclic.app/api/singleproduct/${params.id}`)
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

  function stripHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <Heading mt={"130px"}>Product Details</Heading>
      <br />
      <Box width={["90%", "90%", "80%", "70%"]} margin={"auto"}>
        {isLoading ? (
          <Box>
            <Center>
              <SkeletonCircle size="150" />
            </Center>
            <SkeletonText
              mt="4"
              noOfLines={15}
              spacing="4"
              skeletonHeight="2"
            />
          </Box>
        ) : (
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={5} alignItems={"center"}>
            <Box height={"100%"}>
              <Image
                w={"100%"}
                boxShadow={"2xl"}
                pt={"15px"}
                pb={"15px"}
                src={data && data?.image}
                alt={data && data?.title}
              />
            </Box>
            <Box textAlign={"left"} boxShadow={"2xl"} p={"20px"}>
              <Heading size={"lg"} color="orange" fontFamily={"sans-serif"}>
                {data && data?.title}
              </Heading>
              <br />
              <Heading size={"md"} color={"blue.500"}>
                {data && data?.instructions ? "Instructions :" : ""}
              </Heading>
              <Container mt={"10px"} fontWeight={"bold"}>
                {data && data?.instructions}
              </Container>
              <br />
              <Heading size={"md"} color={"blue.500"}>
                {data && data?.summary ? "Summary :" : ""}
              </Heading>
              <Container mt={"10px"} fontWeight={"bold"}>
                {data && data?.summary}
              </Container>
            </Box>
          </SimpleGrid>
        )}
      </Box>
      <br />
      <br />
    </Box>
  );
}

export default ProductDetails;
