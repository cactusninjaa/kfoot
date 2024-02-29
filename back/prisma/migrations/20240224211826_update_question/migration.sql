/*
  Warnings:

  - Added the required column `response` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Question` ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `response` TEXT NOT NULL;
