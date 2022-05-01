import * as yup from "yup";

export const NewTransactionSchema = yup.object().shape({
  description: yup.string().required(),
  value: yup.string().required(),
});
