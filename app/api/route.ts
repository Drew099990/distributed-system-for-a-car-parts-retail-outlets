import { NextResponse, NextRequest } from 'next/server'



export async function GET(request: Request) {
  try {
  

    

    return NextResponse.json({value:Request})
  } catch (err) {
    console.error('ERROR: API - ', (err as Error).message)

    const response = {
      error: (err as Error).message,

      returnedStatus: 200,
    }

    return NextResponse.json(response, { status: 200 })
  }
}