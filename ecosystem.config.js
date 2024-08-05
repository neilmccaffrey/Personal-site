module.exports = {
  apps: [
    {
      name: 'website',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_SECURE: process.env.SMTP_SECURE,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS,
        RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
      },
    },
  ],
};
