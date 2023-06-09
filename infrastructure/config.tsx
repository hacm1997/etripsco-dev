const config = {
    URL: process.env.NEXT_PUBLIC_BASE_URL,
    USERNAME: process.env.NEXT_PUBLIC_USERNAME,
    PASSWORD: process.env.NEXT_PUBLIC_LOGIN_PASSWORD,
    ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    HOST: process.env.NEXT_PUBLIC_MAILER_HOST,
    USER_MAIL_SENDER: process.env.NEXT_PUBLIC_MAILER_SENDER,
    USER_MAIL_PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
    TRACKING_ID: process.env.NEXT_PUBLIC_TRACKING_ID
};

export default config;
