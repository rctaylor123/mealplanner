import {
  pgSchema,
  pgTable,
  bigint,
  text,
  timestamp,
  foreignKey,
  pgPolicy,
  uuid
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

const authSchema = pgSchema('auth');

export const users = authSchema.table('users', {
  id: uuid('id').primaryKey(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at'),
  lastSignInAt: timestamp('last_sign_in_at')
});

export const family = pgTable('family', {
  id: bigint({ mode: 'number' }).generatedByDefaultAsIdentity({
    name: 'family_id_seq',
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 9223372036854775807,
    cache: 1
  }),
  name: text().notNull(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull()
});

export const profile = pgTable(
  'profile',
  {
    id: bigint({ mode: 'number' }).generatedByDefaultAsIdentity({
      name: 'profile_id_seq',
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9223372036854775807,
      cache: 1
    }),
    authId: uuid('auth_id'),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    familyId: bigint('family_id', { mode: 'number' })
  },
  (table) => [
    foreignKey({
      columns: [table.authId],
      foreignColumns: [users.id],
      name: 'profile_auth_id_fkey'
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.familyId],
      foreignColumns: [family.id],
      name: 'profile_family_id_fkey'
    }),
    pgPolicy('Enable users to view their own data only', {
      as: 'permissive',
      for: 'select',
      to: ['authenticated'],
      using: sql`(( SELECT auth.uid() AS uid) = auth_id)`
    })
  ]
);

export type Profile = typeof profile.$inferSelect;
