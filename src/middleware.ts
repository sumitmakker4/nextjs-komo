import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/settings(.*)"])

export default clerkMiddleware((auth,req) => {
  if (isProtectedRoute(req)) {
    // Check if the user is authenticated
    const { userId } = auth();
        
    if(!userId) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: 'http://' + req.nextUrl.host, // Absolute redirection URL
        },
      });
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};