import * as yup from "yup";

export const newAccountSchema = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});
