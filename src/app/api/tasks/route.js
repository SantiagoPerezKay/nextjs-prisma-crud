import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

NextResponse;
export async function GET() {
  const data = await prisma.task.findMany();
 
  return NextResponse.json(data);
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json(data);
}


