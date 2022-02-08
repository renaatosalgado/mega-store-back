import joi from "joi";

export const loginSchema = joi.object({
  email: joi.string().email().trim().required(),
  password: joi.string().min(6).required(),
});
