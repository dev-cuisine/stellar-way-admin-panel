import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// middleware.ts
export default withAuth(
  function middleware(req) {
    const token = req.nextauth?.token;
    const pathname = req.nextUrl.pathname;

    // টোকেন আছে কি না তা নিশ্চিত করুন
    const isAuth = !!token;
    const isAdmin = token?.role === "admin";

    if (!isAuth && pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (isAuth && !isAdmin && pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (isAuth && isAdmin && pathname === "/") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, 
    },
  },
);

export const config = {
  matcher: ["/", "/admin/:path*"],
};
