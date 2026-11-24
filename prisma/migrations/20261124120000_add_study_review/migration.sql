-- CreateTable
CREATE TABLE "QuizMistake" (
    "id" TEXT NOT NULL,
    "unitKey" TEXT NOT NULL,
    "qHash" TEXT NOT NULL,
    "wrongCount" INTEGER NOT NULL DEFAULT 1,
    "lastChosen" INTEGER NOT NULL,
    "lastWrongAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "QuizMistake_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyCardState" (
    "id" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "ease" DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    "intervalDays" INTEGER NOT NULL DEFAULT 0,
    "reps" INTEGER NOT NULL DEFAULT 0,
    "lapses" INTEGER NOT NULL DEFAULT 0,
    "dueAt" TIMESTAMP(3) NOT NULL,
    "lastReviewAt" TIMESTAMP(3),
    "suspended" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudyCardState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QuizMistake_resolved_idx" ON "QuizMistake"("resolved");

-- CreateIndex
CREATE UNIQUE INDEX "QuizMistake_unitKey_qHash_key" ON "QuizMistake"("unitKey", "qHash");

-- CreateIndex
CREATE UNIQUE INDEX "StudyCardState_cardId_key" ON "StudyCardState"("cardId");

-- CreateIndex
CREATE INDEX "StudyCardState_dueAt_idx" ON "StudyCardState"("dueAt");
