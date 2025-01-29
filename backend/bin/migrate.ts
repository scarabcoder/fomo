import { migrate } from "drizzle-orm/pglite/migrator"
import { db } from '@/database/db.ts';

await migrate(db, {
  migrationsFolder: "./drizzle/",
});