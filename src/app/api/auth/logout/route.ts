import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Remove authentication session cookie
    (await
          // Remove authentication session cookie
          cookies()).delete("sessionToken");

    return NextResponse.json({ message: "Logged out successfully" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
