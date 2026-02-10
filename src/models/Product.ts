import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  features: string[];
  mongodbUrl: string;
  databaseName: string;
  status: 'active' | 'inactive';
  category: string;
  version: string;
  apiEndpoint: string;
  collectionName: string;
  environment: 'development' | 'staging' | 'production';
  port: string;
  sslEnabled: boolean;
  maxConnections: number;
  timeout: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  features: [{
    type: String,
    required: true,
  }],
  mongodbUrl: {
    type: String,
    required: [true, 'MongoDB URL is required'],
  },
  databaseName: {
    type: String,
    required: [true, 'Database name is required'],
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true,
  },
  version: {
    type: String,
    required: [true, 'Product version is required'],
    trim: true,
  },
  apiEndpoint: {
    type: String,
    required: [true, 'API endpoint is required'],
    trim: true,
  },
  collectionName: {
    type: String,
    required: [true, 'Collection name is required'],
    trim: true,
  },
  environment: {
    type: String,
    enum: ['development', 'staging', 'production'],
    default: 'production',
  },
  port: {
    type: String,
    trim: true,
  },
  sslEnabled: {
    type: Boolean,
    default: true,
  },
  maxConnections: {
    type: Number,
    default: 100,
    min: 1,
  },
  timeout: {
    type: Number,
    default: 30000,
    min: 1000,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
