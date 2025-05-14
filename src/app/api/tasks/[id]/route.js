import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, context) {
  const { id } = await context.params;

  try {
    const result = await prisma.task.findUnique({
      where: { id: Number(id) },
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function PUT(request, context) {
  const { id } = await context.params;

  try {
    const data = await request.json();
    const result = await prisma.task.update({
      where: { id: Number(id) },
      data: data,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(request, context) {
  const { id } = await context.params;

  try {
    const result = await prisma.task.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
