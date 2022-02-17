import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required("email is required")
    .email("email should be valid"),
  message: yup.string().required("message is required"),
});

export default schema;
