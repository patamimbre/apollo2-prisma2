# Migration `20200606162352-username-unique`

This migration has been generated by German Castro at 6/6/2020, 4:23:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "User.username" ON "public"."User"("username")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200606160015-addding-user..20200606162352-username-unique
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -20,7 +20,7 @@
 model User {
   id          Int       @id @default(autoincrement()) 
   createdAt   DateTime  @default(now())
   updatedAt   DateTime  @updatedAt
-  username    String
+  username    String    @unique
   password    String
 }
```


