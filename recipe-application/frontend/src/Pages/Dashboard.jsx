import { useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import axios from "axios"


function Dashboard() {
  const [text, setText] = useState("");
  const [data, setData]=useState([])
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = async(e) => {
    e.preventDefault();

    //console.log(text);
    try{
      setIsLoading(true)
      let res=await axios.post("http://localhost:8080/api/search", {text:text})


      console.log("data",res.data)
      setData(res.data)
      setIsLoading(false)

    }catch(err){
      console.log(err)
      setIsLoading(false)
      toast({
        title: "Error",
        description: "Something Went Wrong.",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

    }

    setText("");
  };

  const handleSave = () => {
    toast({
      title: "Recipe Saved",
      description: "Your Recipe Save Successfully.",
      status: "success",
      position: "top",
      duration: 5000,
      isClosable: true,
    });
  };

  console.log("result", data)

  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <Box width={["80%", "80%", "50%", "20%"]} margin={"auto"} mt={"130px"}>
        <Heading size={"xl"} fontFamily={"sans-serif"}>
          Search Recipe's
        </Heading>
        <br />
        <Input
          type="text"
          placeholder="Enter a recipe name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        {isLoading ? (
          <Button
            isLoading
            colorScheme="blue"
            spinner={<BeatLoader size={8} color="white" />}
          >
            Search
          </Button>
        ) : (
          <Button colorScheme="blue" variant={"solid"} onClick={handleSubmit} isDisabled={text==""}>
            Search
          </Button>
        )}
      </Box>
      <br />
      <br />
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
                  <Button
                    onClick={handleSave}
                    colorScheme="orange"
                    variant={"solid"}
                  >
                    Save
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

export default Dashboard;
