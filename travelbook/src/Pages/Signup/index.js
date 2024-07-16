
import React from 'react';
import { useForm } from 'react-hook-form';
import { ChakraProvider, Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

const Signup = () => {
const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
const email = document.getElementById('email').value;
const submit = document.getElementById('submit');
submit.addEventListener("click", clickMe)


function clickMe(){
    this.preventDefault()
    alert("Done!!")
}
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={10} p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Name"
              {...register("name")}
            />
          </FormControl>

          <FormControl mt={4} isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="age">Age</FormLabel>
            <Input
              id="age"
              type="number"
              placeholder="Age"
              {...register("age", {
                min: { value: 0, message: "Age must be a positive number" },
              })}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="dob">Date of Birth</FormLabel>
            <Input
              id="dob"
              type="date"
              {...register("dob")}
            />
          </FormControl>

          <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
            Sign Up
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default Signup;
