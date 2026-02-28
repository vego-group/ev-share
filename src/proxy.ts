import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Exclude static files (e.g. /images/logo.svg) from locale middleware.
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
