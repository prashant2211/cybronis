import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';

function verifyToken(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
  } catch (error) {
    return null;
  }
}

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({ status: 'active' });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const decoded = verifyToken(request);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { 
      name, 
      description, 
      features, 
      mongodbUrl, 
      databaseName,
      status,
      category,
      version,
      apiEndpoint,
      collectionName,
      environment,
      port,
      sslEnabled,
      maxConnections,
      timeout
    } = await request.json();

    if (!name || !description || !features || !mongodbUrl || !databaseName || !category || !version || !apiEndpoint || !collectionName) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    await connectDB();

    const product = await Product.create({
      name,
      description,
      features: features.filter(f => f.trim() !== ''),
      mongodbUrl,
      databaseName,
      status: status || 'active',
      category,
      version,
      apiEndpoint,
      collectionName,
      environment: environment || 'production',
      port: port || '',
      sslEnabled: sslEnabled !== undefined ? sslEnabled : true,
      maxConnections: maxConnections || 100,
      timeout: timeout || 30000,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
