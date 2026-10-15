import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getClientByHost } from "@/lib/clients";
import { normalizeHostname } from "@/lib/domains";

export function proxy(request: NextRequest) {
  const hostname = normalizeHostname(
    request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  );
  const client = getClientByHost(hostname);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-pk-lang",
    /^\/en(\/|$)/.test(request.nextUrl.pathname) ? "en" : "fr"
  );

  if (!client) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const vercelHostname = normalizeHostname(client.vercelSubdomain);
  const customHostname = normalizeHostname(client.domain);

  if (customHostname && hostname === vercelHostname) {
    const redirectUrl = new URL(request.nextUrl.pathname, `https://${customHostname}`);
    redirectUrl.search = request.nextUrl.search;

    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|mov|ico)$).*)",
  ],
};
