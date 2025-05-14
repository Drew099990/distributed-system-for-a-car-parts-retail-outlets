import { NextResponse, NextRequest } from 'next/server'
import mysql from 'mysql2/promise'

let connectionParams = {
host: 'localhost',
port: 3306,
user: 'root',
password: '',
database: 'students'
}


export async function GET(request: Request) {
  try {

    const connection = await mysql.createConnection(connectionParams)

    let get_exp_query = 'SELECT * FROM students.accounts'

    let values: any[] = []


    const [results] = await connection.execute(get_exp_query, values)


    connection.end()


    return NextResponse.json(results)
  } catch (err) {
    console.error('ERROR: API - ', (err as Error).message)

    const response = {
      error: (err as Error).message,

      returnedStatus: 200,
    }

    return NextResponse.json(response, { status: 200 })
  }
}