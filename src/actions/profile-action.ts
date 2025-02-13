'use server';

import { eq } from 'drizzle-orm';
import { db } from '@/src/db/drizzle';
import { profile } from '@/src/db/schema';

export const getProfile = async (authId: string) => {
  const data = await db
    .select()
    .from(profile)
    .where(eq(profile.authId, authId));
  return data;
};
