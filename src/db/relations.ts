import { relations } from 'drizzle-orm/relations';
import { users, profile, family } from './schema';

export const profileRelations = relations(profile, ({ one }) => ({
  usersInAuth: one(users, {
    fields: [profile.authId],
    references: [users.id]
  }),
  family: one(family, {
    fields: [profile.familyId],
    references: [family.id]
  })
}));

export const usersInAuthRelations = relations(users, ({ many }) => ({
  profiles: many(profile)
}));

export const familyRelations = relations(family, ({ many }) => ({
  profiles: many(profile)
}));
