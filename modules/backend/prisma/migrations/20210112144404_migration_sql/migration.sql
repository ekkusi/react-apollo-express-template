/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Marking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Marking" DROP CONSTRAINT "Marking_userName_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";

-- DropTable
DROP TABLE "Marking";
