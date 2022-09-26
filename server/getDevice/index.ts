// import { NextRequest, NextResponse, userAgent } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next'

export function getDevice(req:any) : Promise<boolean>{
  // const url = request.nextUrl
  // const { device } = userAgent(request)
  // const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  // url.searchParams.set('viewport', viewport)
  // return NextResponse.rewrite(url)
  let userAgent;
  if (req) { // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent'] // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent // if you are on the client you can access the navigator from the window object
  }
  return userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );
}
