import * as yup from "yup";

export const loginSchema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
});
