process.env.NODE_ENV = 'test';
process.env.JWT_ACCESS_SECRET ??= 'test_access_secret_0123456789_abcdefghijklmnop';
process.env.JWT_REFRESH_SECRET ??= 'test_refresh_secret_0123456789_abcdefghijklmnop';
process.env.MONGODB_URI ??= 'mongodb://127.0.0.1:27017/univers_barca_test';
process.env.REDIS_URL ??= '';
process.env.LOG_LEVEL = 'error';
process.env.CORS_ORIGINS = 'http://localhost:5173';
