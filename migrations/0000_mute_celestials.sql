-- CREATE TABLE IF NOT EXISTS "auth"."users" (
-- 	"id" uuid PRIMARY KEY NOT NULL,
-- 	"email" text NOT NULL,
-- 	"created_at" timestamp,
-- 	"last_sign_in_at" timestamp
-- );
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "family" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile" (
	"id" integer PRIMARY KEY NOT NULL,
	"auth_id" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"birthday" date,
	"family_id" integer
);
--> statement-breakpoint
--ALTER TABLE "profile" ADD CONSTRAINT "profile_auth_id_users_id_fk" FOREIGN KEY ("auth_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
--ALTER TABLE "profile" ADD CONSTRAINT "profile_family_id_family_id_fk" FOREIGN KEY ("family_id") REFERENCES "public"."family"("id") ON DELETE no action ON UPDATE no action;