'use server';

import { db } from '@/src/db/drizzle';
import { NewFamily, family } from '@/src/db/schema';

export const createFamily = async (newFamily: NewFamily) => {
  return await db.insert(family).values(newFamily).returning();
};
