import { NextResponse } from "next/server";

export async function POST(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/login";

  const response = NextResponse.redirect(url);

  response.cookies.set("directus_session_token", "", {
    path: "/", 
    httpOnly: true, 
    expires: new Date(0)
  });

  return response;
}
