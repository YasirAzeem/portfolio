import connectMongo from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    await connectMongo();
    console.log("mongo connected");
    const { firstName, lastName, email, phoneNumber, message } =
      await req.json();

    try {
      const newContact = new Contact({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      });

      await newContact.save();

      return NextResponse.json(
        { message: "Contact saved successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to save contact" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
