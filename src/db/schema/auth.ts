import { uuid, integer, text, boolean, timestamp, pgSchema } from "drizzle-orm/pg-core";

const authSchema = pgSchema("auth");

export const users = authSchema.table("users", {
    id: uuid("id").primaryKey(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at"),
    lastSignInAt: timestamp("last_sign_in_at")
})