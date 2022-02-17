import { useForm } from "react-hook-form";
import {
  VStack,
  FormControl,
  Input,
  Box,
  HStack,
  Button,
  FormErrorMessage,
  Center,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../validation/schema";
import emailjs from "@emailjs/browser";
const Form = () => {
  // useForm hook

  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  // onSubmit

  const onSubmit = async (data) => {
    try {
      emailjs
        .send(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          data,
          process.env.USER_ID
        )
        .then(() => {
          toast({
            status: "success",
            title: "Submitted Successfully",
          });
          reset();
        })
        .catch(() => {
          toast({
            status: "error",
            title: "something went wrong",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Center width={{ base: "100%", md: "55%", lg: "50%" }}>
        <Box width={"lg"}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom"
          >
            <VStack spacing={"1rem"}>
              <HStack width={"100%"} spacing={"1rem"}>
                <FormControl isInvalid={errors.name}>
                  <Input
                    variant={"flushed"}
                    placeholder="name"
                    id={"name"}
                    background={"lightDark"}
                    _focus={{ borderColor: "teal" }}
                    padding={"1rem"}
                    autoComplete="off"
                    {...register("name")}
                  />
                </FormControl>

                <FormControl isInvalid={errors.email}>
                  <Input
                    variant={"flushed"}
                    placeholder="email"
                    id="email"
                    background={"lightDark"}
                    _focus={{ borderColor: "teal" }}
                    padding={"1rem"}
                    autoComplete="off"
                    {...register("email")}
                    onBlur={() => clearErrors("email")}
                  />
                  {errors.email?.type === "required" && (
                    <FormErrorMessage color={"red"}>
                      {errors.email.message}
                    </FormErrorMessage>
                  )}
                  {errors.email?.type === "email" && (
                    <FormErrorMessage color={"red"}>
                      {errors.email.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </HStack>

              <FormControl>
                <Input
                  variant={"flushed"}
                  placeholder="subject"
                  id="subject"
                  background={"lightDark"}
                  _focus={{ borderColor: "teal" }}
                  padding={"1rem"}
                  autoComplete="off"
                  {...register("subject")}
                />
              </FormControl>
              <FormControl isInvalid={errors.message}>
                <Textarea
                  height={"sm"}
                  variant={"flushed"}
                  resize={"none"}
                  id={"message"}
                  placeholder="message"
                  background={"lightDark"}
                  _focus={{ borderColor: "teal" }}
                  padding={"1rem"}
                  autoComplete="off"
                  {...register("message")}
                  onBlur={() => clearErrors("message")}
                />

                {errors.message?.type === "required" && (
                  <FormErrorMessage color={"red"}>
                    {errors.message.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <Flex justifyContent={"end"} width="100%">
                <Button
                  isLoading={isSubmitting}
                  background={"transparent"}
                  type="submit"
                  variant={"outline"}
                  borderColor={"teal"}
                  color={"teal"}
                  _hover={{
                    color: "black",
                    background: "teal",
                  }}
                >
                  Send Message
                </Button>
              </Flex>
            </VStack>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Form;
