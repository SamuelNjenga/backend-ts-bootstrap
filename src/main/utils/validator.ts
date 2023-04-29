import { Request, Response } from "express";
import { Validator } from "node-input-validator";

class ReqValidator {
  public static async validate(
    req: Request,
    res: Response,
    rules: { [key: string]: string } // define rules as an index type
  ): Promise<boolean> {
    const v = new Validator(req.body, rules);
    const matched = await v.check();
    if (!matched) {
      const errors = Object.keys(v.errors).map(
        (key: string) => v.errors[key] && v.errors[key].message
      );
      res.status(400).json({ error: errors, status: "error" });
      return false;
    }
    return true;
  }
}

export default ReqValidator;
