-- CreateTable
CREATE TABLE "LangCardState" (
    "id" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "ease" DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    "intervalDays" INTEGER NOT NULL DEFAULT 0,
    "reps" INTEGER NOT NULL DEFAULT 0,
    "lapses" INTEGER NOT NULL DEFAULT 0,
    "dueAt" TIMESTAMP(3) NOT NULL,
    "lastReviewAt" TIMESTAMP(3),
    "suspended" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LangCardState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LangReviewLog" (
    "id" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "prevInterval" INTEGER NOT NULL,
    "newInterval" INTEGER NOT NULL,
    "at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LangReviewLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LangCardState_cardId_key" ON "LangCardState"("cardId");

-- CreateIndex
CREATE INDEX "LangCardState_lang_dueAt_idx" ON "LangCardState"("lang", "dueAt");

-- CreateIndex
CREATE INDEX "LangReviewLog_lang_at_idx" ON "LangReviewLog"("lang", "at");
