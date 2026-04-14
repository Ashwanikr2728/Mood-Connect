declare namespace NodeJS {
  interface ProcessEnv {
    DOCTOR_SECRET: string;
    USER_JWT_SECRET: string;
    MONGO_URL: string;
    GEMINI_API_KEY: string;
  }
}
