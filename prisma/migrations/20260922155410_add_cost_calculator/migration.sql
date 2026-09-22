-- CreateTable
CREATE TABLE "CostProduct" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profitMargin" DOUBLE PRECISION NOT NULL DEFAULT 30,
    "commission" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CostItem" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "purchaseAmount" DOUBLE PRECISION NOT NULL,
    "purchaseUnit" TEXT NOT NULL DEFAULT 'gr',
    "usagePerItem" DOUBLE PRECISION NOT NULL,
    "usageIsPercent" BOOLEAN NOT NULL DEFAULT false,
    "yieldCount" DOUBLE PRECISION NOT NULL,
    "purchaseCost" DOUBLE PRECISION NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CostItem_productId_idx" ON "CostItem"("productId");

-- AddForeignKey
ALTER TABLE "CostItem" ADD CONSTRAINT "CostItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "CostProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
