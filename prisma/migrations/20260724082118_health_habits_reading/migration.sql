-- CreateEnum
CREATE TYPE "HabitFrequency" AS ENUM ('WEEKLY', 'MONTHLY');

-- CreateTable
CREATE TABLE "AppSettings" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "avgCycleLengthDays" INTEGER NOT NULL DEFAULT 28,
    "avgPeriodLengthDays" INTEGER NOT NULL DEFAULT 5,
    "laserIntervalDays" INTEGER NOT NULL DEFAULT 42,
    "dailyReadingPageTarget" INTEGER NOT NULL DEFAULT 5,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeriodEntry" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PeriodEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaserSession" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "area" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaserSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habit" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "frequency" "HabitFrequency" NOT NULL DEFAULT 'MONTHLY',
    "indefinite" BOOLEAN NOT NULL DEFAULT true,
    "totalPeriods" INTEGER,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitCompletion" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HabitCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadingLog" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "pages" INTEGER NOT NULL,
    "bookTitle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReadingLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PeriodEntry_startDate_idx" ON "PeriodEntry"("startDate");

-- CreateIndex
CREATE INDEX "LaserSession_date_idx" ON "LaserSession"("date");

-- CreateIndex
CREATE INDEX "HabitCompletion_date_idx" ON "HabitCompletion"("date");

-- CreateIndex
CREATE UNIQUE INDEX "HabitCompletion_habitId_date_key" ON "HabitCompletion"("habitId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "ReadingLog_date_key" ON "ReadingLog"("date");

-- CreateIndex
CREATE INDEX "ReadingLog_date_idx" ON "ReadingLog"("date");

-- AddForeignKey
ALTER TABLE "HabitCompletion" ADD CONSTRAINT "HabitCompletion_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
