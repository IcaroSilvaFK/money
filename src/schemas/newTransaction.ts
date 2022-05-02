import * as yup from "yup";

export const NewTransactionSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  value: yup.string().required(),
});
