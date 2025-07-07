import dotenv from 'dotenv';
import env from 'env-var';

dotenv.config();

export const config = {
    OPENROUTER_API_KEY: env.get("OPENROUTER_API_KEY").required().asString(),
    OPENROUTER_MODEL: env.get("OPENROUTER_MODEL").required().asString(),
    SERPAPI_KEY: env.get("SERPAPI_KEY").required().asString(),
};