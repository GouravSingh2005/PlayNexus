/*
  Warnings:

  - You are about to drop the column `url` on the `Stream` table. All the data in the column will be lost.
  - Added the required column `videolink` to the `Stream` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stream" DROP COLUMN "url",
ADD COLUMN     "videolink" TEXT NOT NULL;
