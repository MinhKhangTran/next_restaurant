import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //Go to strapi log this user in
  if (req.method === "POST") {
    try {
      //   console.log("hi");
      const { identifier, password } = req.body;
      const strapiRes = await axios.post(
        `${process.env.API_ENDPOINT}/auth/local`,
        {
          identifier,
          password,
        }
      );
      const { data } = strapiRes;
      console.log(strapiRes);

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7,
          sameSite: "strict",
          path: "/",
        })
      );

      res.status(200).json(data.user);
    } catch (error) {
      console.log(error);

      res.status(error.response.data.statusCode);
      // .json(error.response.data.message[0].messages[0].message);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Mehtod ${req.method} not allowed` });
  }
  //create a token with cookie
};
