-- CreateEnum
CREATE TYPE "GeneralTaskUnit" AS ENUM ('HOURS', 'PAGES');

-- CreateTable
CREATE TABLE "GeneralTask" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "unit" "GeneralTaskUnit" NOT NULL DEFAULT 'HOURS',
    "targetAmount" DOUBLE PRECISION NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GeneralTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralTaskLog" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GeneralTaskLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GeneralTaskLog_date_idx" ON "GeneralTaskLog"("date");

-- CreateIndex
CREATE UNIQUE INDEX "GeneralTaskLog_taskId_date_key" ON "GeneralTaskLog"("taskId", "date");

-- AddForeignKey
ALTER TABLE "GeneralTaskLog" ADD CONSTRAINT "GeneralTaskLog_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "GeneralTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;
