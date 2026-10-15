module.exports = {
  apps: [
    {
      name: 'univers-barca-api',
      script: 'dist/server.js',
      instances: process.env.PM2_INSTANCES || 'max',
      exec_mode: 'cluster',
      max_memory_restart: '1G',
      watch: false,
      error_file: '/app/logs/pm2-error.log',
      out_file: '/app/logs/pm2-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      kill_timeout: 30000,
      listen_timeout: 10000,
      env: { NODE_ENV: 'development', PORT: 5000 },
      env_staging: { NODE_ENV: 'staging', PORT: 5000 },
      env_production: { NODE_ENV: 'production', PORT: 5000 },
    },
  ],
};
