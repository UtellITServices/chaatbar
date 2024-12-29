import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_TOKEN_KEY } from "./constants";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_TOKEN_KEY)?.value;
  const pathname = request.nextUrl.pathname;
  if (token) {
    if (!pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  } else {
    if (!pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};
