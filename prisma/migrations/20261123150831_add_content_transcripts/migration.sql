-- CreateTable
CREATE TABLE "ContentTranscript" (
    "id" TEXT NOT NULL,
    "ideaId" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentTranscript_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ContentTranscript_ideaId_idx" ON "ContentTranscript"("ideaId");

-- AddForeignKey
ALTER TABLE "ContentTranscript" ADD CONSTRAINT "ContentTranscript_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "ContentIdea"("id") ON DELETE CASCADE ON UPDATE CASCADE;
