import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

config({ path: '.env' });

export const db = drizzle({
  connection: process.env.DATABASE_URL!,
  logger: true,
  casing: 'snake_case',
  schema: { ...schema }
});
