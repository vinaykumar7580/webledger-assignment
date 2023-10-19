import { LockIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  return (
    <Box bg={"blue.500"} height={"100vh"} pt={"100px"}>
      <Heading color={"white"} fontFamily={"cursive"}>
        WelCome To Recipe Application
      </Heading>
      <br />
      <br />
      <Box
        bg={"#FEDFE5"}
        w={["80%", "80%", "50%", "30%"]}
        margin={"auto"}
        padding={"20px"}
        boxShadow={"2xl"}
        rounded={10}
      >
        <Heading size={"lg"} color={"red"}>
          Login With Google
        </Heading>
        <br />
        <Button
          bg={"blueviolet"}
          colorScheme="blue"
          color={"white"}
          padding={"10px 20px"}
          fontSize={"25px"}
          fontWeight={"bold"}
          borderRadius={"7px"}
          onClick={handleLogin}
        >
          <span>
            <LockIcon boxSize={5} />
          </span>
          {"  "}
          Google
        </Button>
        <br />
      </Box>
    </Box>
  );
}

export default Login;
