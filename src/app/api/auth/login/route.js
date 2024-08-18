import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Invalid email" });
    if (!password) return res.status(400).json({ message: "Enter a password" });

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        salt: true,
        password: true,
        name: true,
      },
    });

    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(password, existingUser.salt);

    if (existingUser.password === hashedPassword) {
      const jwtUser = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      };

      const accessToken = jwt.sign(
        jwtUser,
        process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      return res.status(200).json({ message: "Logging in user", accessToken });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
