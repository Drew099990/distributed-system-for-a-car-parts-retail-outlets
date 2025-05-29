import { NextResponse, NextRequest } from 'next/server';
import mysql from 'mysql2/promise';

const connectionParams = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'order',
};

async function connectToDatabase() {
    return mysql.createConnection(connectionParams);
}

export async function GET(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const [rows] = await connection.query('SELECT * FROM order.stocks'); // Adjust your table name
        return NextResponse.json(rows, { status: 200 });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const body = await request.json();
        const { itemID, quantity} = body; 

        await connection.execute(
            'INSERT INTO stocks (itemID, quantity) VALUES (?, ?)',
            [itemID, quantity]
        ); 
        return NextResponse.json({ message: 'Created successfully' }, { status: 201 });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const body = await request.json();
        const { id, name } = body; // Adjust based on your fields

        await connection.query('UPDATE order.stocks SET name = ? WHERE id = ?', [name, id]); // Adjust your query
        return NextResponse.json({ message: 'Updated successfully' }, { status: 200 });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        await connection.query('TRUNCATE TABLE stocks'); // Adjusted table name
        return NextResponse.json({ message: 'All records deleted successfully' }, { status: 204 });
    } catch (error) {
    }
}

