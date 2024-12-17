import { NextResponse } from "next/server";

export function middleware(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("user-id");

    const response = NextResponse.next();
    return response;
}

