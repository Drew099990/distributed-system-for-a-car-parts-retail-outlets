import { NextResponse, NextRequest } from 'next/server';
import mysql from 'mysql2/promise';

const connectionParams = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'warehouse',
};

async function connectToDatabase() {
    return mysql.createConnection(connectionParams);
}

export async function GET(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const [rows] = await connection.query('SELECT * FROM warehouse.paymentlist'); // Adjust your table name
        return NextResponse.json(rows, { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const body = await request.json();
        const { customer, itemID, quantity, method } = body; // Adjust based on your fields

        await connection.query(
            'INSERT INTO warehouse.paymentlist (customer, itemID, quantity, method) VALUES (?, ?, ?, ?)',
            [customer, itemID, quantity, method] // Adjust your query
        );
        return NextResponse.json({ message: 'Created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error creating payment:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const body = await request.json();
        const { id, name } = body; // Adjust based on your fields

        await connection.query('UPDATE retail2.payments2 SET name = ? WHERE id = ?', [name, id]); // Adjust your query
        return NextResponse.json({ message: 'Updated successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error updating payment:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const connection = await connectToDatabase();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        await connection.query('DELETE FROM retail2.payments2 WHERE id = ?', [id]); // Adjust your query
        return NextResponse.json({ message: 'Deleted successfully' }, { status: 204 });
    } catch (error) {
        console.error('Error deleting payment:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}