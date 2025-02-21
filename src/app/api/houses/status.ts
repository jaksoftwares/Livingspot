import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getAuthUser } from "@/middleware/authMiddleware";

export async function PUT(req) {
  const user = await getAuthUser(req);
  if (!user || user.role !== "HOMEOWNER") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { houseId, status } = await req.json();
  const updatedHouse = await prisma.house.update({
    where: { id: houseId },
    data: { status },
  });

  return NextResponse.json({ message: "House status updated", updatedHouse });
}
