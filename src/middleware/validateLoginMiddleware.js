import { loginSchema } from "../schemas/loginSchema.js";

export function validateLogin(req, res, next) {

  const validation = loginSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);

    return res.status(422).send(errors);
  }
  next();
}
