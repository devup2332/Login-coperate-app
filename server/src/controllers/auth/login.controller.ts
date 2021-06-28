import { Request, Response } from "express";
import UserModel from "../../models/user.model";

export const LoginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email,
  });

  return res.status(200).json({
    status: "User logged successfully",
  });
};
