-- AlterEnum
ALTER TYPE "HabitFrequency" ADD VALUE 'CUSTOM';

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "customIntervalDays" INTEGER;

-- AlterTable
ALTER TABLE "RoutineTemplate" DROP COLUMN "frequency",
ADD COLUMN     "intervalDays" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

