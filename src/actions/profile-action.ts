"use server"

import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/src/db/drizzle";
import { profile } from "@/src/db/schema/public";

export const getProfile = async (authId: string) => {
    const data = await db.select().from(profile).where(eq(profile.authId, authId));
    return data;
}