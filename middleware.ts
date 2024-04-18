import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Specify any options for the middleware here, if necessary
});

export const config = {
  matcher: [
    // Routes you want to protect
    "/",
    "/upcoming",
    "/meeting(.*)",
    "/previous",
    "/recordings",
    "/personal-room",
    
    // Other routes that should not match specific file extensions or paths
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};
