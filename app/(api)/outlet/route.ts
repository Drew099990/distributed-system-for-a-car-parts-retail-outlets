import { NextResponse, NextRequest } from 'next/server';
import mysql from 'mysql2/promise';

const connectionParams = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'retail2',
};

async function connectToDatabase() {
    return mysql.createConnection(connectionParams);
}

export async function GET(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const [rows] = await connection.query('SELECT * FROM retail2.transaction'); // Adjust your table name
        return NextResponse.json(rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const body = await request.json();
        const { customer,itemID,quantity,method } = body; 

        await connection.query('INSERT INTO retail2.transaction (customer,itemID,quantity,method) VALUES (?,?,?,?)', [customer,itemID,quantity,method]); // Adjust your query
        return NextResponse.json({ message: 'Created successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const body = await request.json();
        const { id, name } = body; 

        await connection.query('UPDATE retail2 SET name = ? WHERE id = ?', [name, id]); // Adjust your query
        return NextResponse.json({ message: 'Updated successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        await connection.query('DELETE FROM retail2 WHERE id = ?', [id]); // Adjust your query
        return NextResponse.json({ message: 'Deleted successfully' }, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}