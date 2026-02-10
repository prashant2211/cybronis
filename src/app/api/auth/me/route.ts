import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

export async function GET(request: NextRequest) {
  try {
    console.log('API /auth/me called');
    await connectDB();

    const authHeader = request.headers.get('authorization');
    console.log('Auth header:', authHeader);
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('No valid auth header');
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    console.log('Token extracted:', token.substring(0, 20) + '...');
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
      console.log('Token decoded successfully:', decoded);
      
      const user = await User.findById(decoded.userId).select('-password');
      console.log('User found:', user ? 'Yes' : 'No');
      
      if (!user) {
        console.log('User not found in database');
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      const userData = {
        _id: user._id,
        email: user.email,
        name: user.name || '',
        createdAt: user.createdAt
      };
      
      console.log('Returning user data:', userData);
      return NextResponse.json(userData);
    } catch (jwtError) {
      console.log('JWT verification failed:', jwtError);
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
