'use server';

import { eq } from 'drizzle-orm';
import { db } from '@/src/db/drizzle';
import { profile, type Profile } from '@/src/db/schema';

export const getProfile = async (authId: string) => {
  return await db.query.profile.findFirst({
    where: eq(profile.authId, authId)
  });
};

export const updateProfile = async (p: Profile) => {
  return await db
    .update(profile)
    .set({
      firstName: p.firstName,
      lastName: p.lastName,
      familyId: p.familyId
    })
    .where(eq(profile.id, p.id))
    .returning();
};
