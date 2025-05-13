import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/login", "/cadastro"];

export function middleware(request: NextRequest) {
    
  console.log("Cookies:", request.cookies.getAll());
  const cookie = request.cookies.get("auth_user");
  const isLoggedIn = !!cookie;


  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);
  
  if (isLoggedIn && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/perfil", "/configuracoes", "/login", "/cadastro"],
};
