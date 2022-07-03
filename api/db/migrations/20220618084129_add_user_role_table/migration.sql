/*
  Warnings:

  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "UserType" ADD VALUE 'editor';
ALTER TYPE "UserType" ADD VALUE 'publisher';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "type";

-- CreateTable
CREATE TABLE "UserRole" (
    "id" TEXT NOT NULL,
    "name" "UserType" NOT NULL DEFAULT E'public',
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_name_userId_key" ON "UserRole"("name", "userId");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
