module.exports = {
  apps: [
    {
      name: 'dgt-nextjs',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: '/var/www/dgt-nextjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '1200M',
      exp_backoff_restart_delay: 100,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=1536'
      }
    }
  ]
};
