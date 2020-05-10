import { check, validationResult } from "express-validator";

export default [
  check("username").isEmail(),
  check("password").isLength({ min: 5 }),
];
