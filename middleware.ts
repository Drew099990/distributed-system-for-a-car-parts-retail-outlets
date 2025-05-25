import { clerkMiddleware ,createRouteMatcher} from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils';
import { NextResponse } from 'next/server';
import { SignInButton } from '@clerk/nextjs';

const isNotProtected = createRouteMatcher("/");
const isManager = createRouteMatcher("/home(.*)");
const isWarehouse = createRouteMatcher("/warehouse(.*)");
const isprotected = createRouteMatcher("/admin(.*)");

export default clerkMiddleware(async (auth, req ) => {

if(!isNotProtected(req)){

return NextResponse.redirect(new URL("/Signin",req.url))
}

  if (isprotected(req) && ((await auth()).sessionClaims?.metadata?.manager !== "admin")){
    const url = new URL("/home", req.url)
    return NextResponse.redirect(url)
   }

  if (isWarehouse(req) && ((await auth()).sessionClaims?.metadata?.warehouse !== "warehouse")){
    const url = new URL("/home", req.url)
    return NextResponse.redirect(url)
  }


  if (isManager(req) && (await auth()).sessionClaims?.metadata?.manager == 'admin') {
    const url = new URL('/admin', req.url)
    return NextResponse.redirect(url)
  }
  else if (isManager(req) && (await auth()).sessionClaims?.metadata?.warehouse == 'warehouse') {
    const url = new URL('/warehouse', req.url)
    return NextResponse.redirect(url)
  }
  }
);
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}