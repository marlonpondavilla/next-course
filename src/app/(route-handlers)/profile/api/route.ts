import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get('Authorization'));

  const headerList = await headers();
  console.log(headerList.get('Authorization')); 

  const theme = request.cookies.get('theme');
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set('page', '20')
  console.log(cookieStore.get('page'));
  return new Response(
    'Profile route handler', 
    {
      headers: {
        'Content-Type': 'text/plain',
        'Set-Cookie': 'theme=dark'
      }
    }
);
}