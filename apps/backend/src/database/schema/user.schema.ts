import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const UserTable = pgTable(
  'user',
  {
    id: uuid('id').notNull().primaryKey().defaultRandom(),
    descopeLoginID: text('descope_login_id').notNull().unique(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    email: text('email').notNull().unique(),
    phone: text('phone').notNull().unique(),
  }
)