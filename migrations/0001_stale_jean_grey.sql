-- CREATE TABLE "auth"."users" (
-- 	"id" uuid PRIMARY KEY NOT NULL,
-- 	"email" text NOT NULL,
-- 	"created_at" timestamp,
-- 	"last_sign_in_at" timestamp
-- );
-- --> statement-breakpoint
-- ALTER TABLE "family" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
-- ALTER TABLE "family" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;--> statement-breakpoint
-- ALTER TABLE "profile" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;