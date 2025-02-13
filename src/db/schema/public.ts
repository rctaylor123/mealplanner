import { bigint, integer, text, boolean, date, pgTable, timestamp, AnyPgColumn } from "drizzle-orm/pg-core";
import { users } from "./auth";

export const profile = pgTable("profile", {
    id: integer("id").primaryKey(),
    authId: text("auth_id").notNull().references((): AnyPgColumn => users.id),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    birthday: date("birthday"),
    familyId: integer("family_id").references((): AnyPgColumn => family.id)
});

export type Profile = typeof profile.$inferSelect;

export const family = pgTable("family", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    createdAt: timestamp("created_at").notNull()
})