/*
  Warnings:

  - You are about to drop the column `image` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `response` on the `Question` table. All the data in the column will be lost.
  - Added the required column `answer` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Question` DROP COLUMN `image`,
    DROP COLUMN `response`,
    ADD COLUMN `answer` TEXT NOT NULL,
    ADD COLUMN `link` VARCHAR(191) NULL;
