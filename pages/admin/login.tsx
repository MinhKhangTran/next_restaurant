import { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Formik und yup
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/context/authContext";

const Login = () => {
  const toast = useToast();
  const { login, user, error } = useAuth();
  const bgColor = useColorModeValue("cyan.50", "cyan.800");
  const borderColor = useColorModeValue("cyan.400", "cyan.200");
  const textColor = useColorModeValue("cyan.600", "cyan.100");
  const router = useRouter();
  const [showPW, setShowPW] = useState(false);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Eine Email ist nötig!"),
      password: Yup.string()
        .required("Ein Passwort ist nötig!")
        .min(6, "mindestens 6 Zeichen!"),
    }),
    onSubmit: (daten, { resetForm }) => {
      //@ts-expect-error
      login(daten.email, daten.password);

      // console.log(daten);
    },
  });

  useEffect(() => {
    error &&
      toast({
        title: "Fehler 🙅‍♂️.",
        description: { error },
        status: "error",
        duration: 3000,
        isClosable: true,
      });
  });

  return (
    <Box
      border="2px"
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      borderColor={borderColor}
      background={bgColor}
      w={{ base: "90%", md: "75%" }}
      mx="auto"
      my={8}
    >
      <Heading bgGradient="linear(to-l,cyan.300,cyan.400)" bgClip="text">
        Login
      </Heading>
      {/* TODO Toast */}

      <form onSubmit={formik.handleSubmit}>
        {/* Email */}
        <FormControl
          isInvalid={!!formik.errors.email && formik.touched.email}
          id="email"
          mt={4}
        >
          <FormLabel bgGradient="linear(to-l,cyan.300,cyan.400)" bgClip="text">
            E-Mail
          </FormLabel>
          <Input
            variant="flushed"
            type="text"
            placeholder="E-Mail Adresse"
            {...formik.getFieldProps("email")}
          />

          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        {/* Password */}
        <FormControl
          isInvalid={!!formik.errors.password && formik.touched.password}
          id="password"
          mt={4}
        >
          <FormLabel bgGradient="linear(to-l,cyan.300,cyan.400)" bgClip="text">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              variant="flushed"
              type={showPW ? "text" : "password"}
              placeholder="******"
              {...formik.getFieldProps("password")}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                aria-label="hide/show password"
                onClick={() => setShowPW(!showPW)}
                variant="ghost"
                colorScheme="cyan"
                h="1.75rem"
              >
                {showPW ? <FaEyeSlash /> : <FaEye />}
              </IconButton>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>

        <Button
          //   Loading
          mt={8}
          colorScheme="cyan"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
