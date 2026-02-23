import { motion } from 'framer-motion';
import { 
  Code, 
  BookOpen, 
  Zap, 
  Database, 
  Shield, 
  ArrowRight,
  Copy,
  CheckCircle,
  ExternalLink,
  Terminal,
  Globe,
  Lock
} from 'lucide-react';
import { useState } from 'react';

const ApiDocsPage = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/auth/register',
      description: 'Register a new user account',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'User full name' },
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password (min 6 characters)' }
      ],
      example: {
        request: `{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}`,
        response: `{
  "message": "User created successfully",
  "userId": "64f8a1b2c3d4e5f6a7b8c9d0"
}`
      }
    },
    {
      method: 'POST',
      endpoint: '/api/auth/login',
      description: 'Authenticate user and get access token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      example: {
        request: `{
  "email": "john@example.com",
  "password": "securepassword123"
}`,
        response: `{
  "message": "Login successful",
  "user": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`
      }
    },
    {
      method: 'GET',
      endpoint: '/api/products',
      description: 'Get all products (public endpoint)',
      parameters: [],
      example: {
        request: `GET /api/products`,
        response: `[
  {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "name": "CybronisAI",
    "description": "AI-powered automation platform",
    "features": ["Multi-LLM Support", "RAG", "Salesforce Integration"],
    "mongodbUrl": "mongodb://localhost:27017",
    "databaseName": "cybronisai_db",
    "status": "active",
    "category": "AI Platform",
    "version": "1.0.0",
    "apiEndpoint": "https://api.cybronis.com",
    "collectionName": "products",
    "environment": "production",
    "port": "27017",
    "sslEnabled": true,
    "maxConnections": 100,
    "timeout": 30000,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]`
      }
    },
    {
      method: 'POST',
      endpoint: '/api/products',
      description: 'Create a new product (admin only)',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'Product name' },
        { name: 'description', type: 'string', required: true, description: 'Product description' },
        { name: 'features', type: 'array', required: true, description: 'Array of product features' },
        { name: 'mongodbUrl', type: 'string', required: true, description: 'MongoDB connection URL' },
        { name: 'databaseName', type: 'string', required: true, description: 'Database name' },
        { name: 'category', type: 'string', required: true, description: 'Product category' },
        { name: 'version', type: 'string', required: true, description: 'Product version' },
        { name: 'apiEndpoint', type: 'string', required: true, description: 'API endpoint URL' },
        { name: 'collectionName', type: 'string', required: true, description: 'MongoDB collection name' }
      ],
      example: {
        request: `{
  "name": "Wise Deployer",
  "description": "Deployment automation platform",
  "features": ["One-click Deploy", "CI/CD Pipeline", "Live Tracking"],
  "mongodbUrl": "mongodb://localhost:27017",
  "databaseName": "cybronis_bridge_db",
  "category": "Deployment Tool",
  "version": "2.1.0",
  "apiEndpoint": "https://bridge.cybronis.com/api",
  "collectionName": "deployments",
  "environment": "production",
  "port": "3000",
  "sslEnabled": true,
  "maxConnections": 50,
  "timeout": 60000
}`,
        response: `{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d2",
  "name": "Wise Deployer",
  "description": "Deployment automation platform",
  "features": ["One-click Deploy", "CI/CD Pipeline", "Live Tracking"],
  "mongodbUrl": "mongodb://localhost:27017",
  "databaseName": "cybronis_bridge_db",
  "status": "active",
  "category": "Deployment Tool",
  "version": "2.1.0",
  "apiEndpoint": "https://bridge.cybronis.com/api",
  "collectionName": "deployments",
  "environment": "production",
  "port": "3000",
  "sslEnabled": true,
  "maxConnections": 50,
  "timeout": 60000,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}`
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                <Code className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">API Documentation</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Complete API reference for Cybronis platform. Build powerful integrations with our comprehensive REST API.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 mr-2" />
                <span>Secure Authentication</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Zap className="w-5 h-5 mr-2" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Database className="w-5 h-5 mr-2" />
                <span>MongoDB Integration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running with our API in minutes. Follow these simple steps to start building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Get API Key</h3>
              <p className="text-gray-600 mb-6">
                Register for an account and get your API key from the dashboard.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                <div>curl -X POST https://api.cybronis.com/auth/register \</div>
                <div>  -H &quot;Content-Type: application/json&quot; \</div>
                <div>  -d &apos;{`{"name": "Your Name", "email": "your@email.com", "password": "password"}`}&apos;</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Authenticate</h3>
              <p className="text-gray-600 mb-6">
                Use your credentials to get an access token for API requests.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                <div>curl -X POST https://api.cybronis.com/auth/login \</div>
                <div>  -H &quot;Content-Type: application/json&quot; \</div>
                <div>  -d &apos;{`{"email": "your@email.com", "password": "password"}`}&apos;</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Make Requests</h3>
              <p className="text-gray-600 mb-6">
                Start making API calls with your access token.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                <div>curl -X GET https://api.cybronis.com/products \</div>
                <div>  -H "Authorization: Bearer YOUR_TOKEN"</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete reference for all available API endpoints with examples and parameters.
            </p>
          </motion.div>

          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <p className="text-gray-600 mb-6">{endpoint.description}</p>
                  
                  {endpoint.parameters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Parameters</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 font-semibold text-gray-700">Name</th>
                              <th className="text-left py-2 font-semibold text-gray-700">Type</th>
                              <th className="text-left py-2 font-semibold text-gray-700">Required</th>
                              <th className="text-left py-2 font-semibold text-gray-700">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex} className="border-b border-gray-100">
                                <td className="py-2 font-mono text-blue-600">{param.name}</td>
                                <td className="py-2 text-gray-600">{param.type}</td>
                                <td className="py-2">
                                  {param.required ? (
                                    <span className="text-red-600 font-semibold">Yes</span>
                                  ) : (
                                    <span className="text-gray-400">No</span>
                                  )}
                                </td>
                                <td className="py-2 text-gray-600">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">Request Example</h4>
                        <button
                          onClick={() => copyToClipboard(endpoint.example.request, `request-${index}`)}
                          className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
                        >
                          {copiedCode === `request-${index}` ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          <span>{copiedCode === `request-${index}` ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                          {endpoint.example.request}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">Response Example</h4>
                        <button
                          onClick={() => copyToClipboard(endpoint.example.response, `response-${index}`)}
                          className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
                        >
                          {copiedCode === `response-${index}` ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          <span>{copiedCode === `response-${index}` ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                          {endpoint.example.response}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs and Libraries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SDKs & Libraries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our official SDKs and community libraries to integrate Cybronis into your applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript/Node.js', icon: '🟨', status: 'Official' },
              { name: 'Python', icon: '🐍', status: 'Official' },
              { name: 'PHP', icon: '🐘', status: 'Community' },
              { name: 'Go', icon: '🐹', status: 'Community' },
              { name: 'Java', icon: '☕', status: 'Community' },
              { name: 'Ruby', icon: '💎', status: 'Community' },
              { name: 'C#', icon: '🔷', status: 'Community' },
              { name: 'Swift', icon: '🍎', status: 'Community' },
            ].map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{sdk.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{sdk.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  sdk.status === 'Official' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {sdk.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start building with our API today. Get your API key and begin integrating Cybronis into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                <BookOpen className="w-5 h-5 mr-2" />
                View Full Documentation
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
                <Terminal className="w-5 h-5 mr-2" />
                Try API Explorer
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocsPage;
