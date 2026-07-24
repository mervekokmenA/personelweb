-- AlterTable
ALTER TABLE "RoutineTemplate" ADD COLUMN     "trackCompletion" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "FocusAreaItemCompletion" (
    "id" TEXT NOT NULL,
    "focusAreaId" TEXT NOT NULL,
    "itemText" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FocusAreaItemCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FocusAreaItemCompletion_date_idx" ON "FocusAreaItemCompletion"("date");

-- CreateIndex
CREATE UNIQUE INDEX "FocusAreaItemCompletion_focusAreaId_itemText_date_key" ON "FocusAreaItemCompletion"("focusAreaId", "itemText", "date");

-- AddForeignKey
ALTER TABLE "FocusAreaItemCompletion" ADD CONSTRAINT "FocusAreaItemCompletion_focusAreaId_fkey" FOREIGN KEY ("focusAreaId") REFERENCES "FocusArea"("id") ON DELETE CASCADE ON UPDATE CASCADE;
