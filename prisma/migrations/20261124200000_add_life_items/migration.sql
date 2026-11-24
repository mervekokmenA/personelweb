-- CreateTable
CREATE TABLE "LifeItem" (
    "id" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "priority" INTEGER,
    "note" TEXT,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LifeItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LifeRoutineCheck" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LifeRoutineCheck_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LifeItem_kind_order_idx" ON "LifeItem"("kind", "order");

-- CreateIndex
CREATE INDEX "LifeRoutineCheck_date_idx" ON "LifeRoutineCheck"("date");

-- CreateIndex
CREATE UNIQUE INDEX "LifeRoutineCheck_itemId_date_key" ON "LifeRoutineCheck"("itemId", "date");

-- AddForeignKey
ALTER TABLE "LifeRoutineCheck" ADD CONSTRAINT "LifeRoutineCheck_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "LifeItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Başlangıç içeriği: rutinler ve defterden aktarılan hayaller
INSERT INTO "LifeItem" ("id","kind","text","priority","note","done","order","updatedAt") VALUES
('life-routine-1', 'routine', 'Günlük en az 1 sayfa kitap okuyacağım', NULL, NULL, false, 1, CURRENT_TIMESTAMP),
('life-routine-2', 'routine', 'Her gün 10 dakika yazı yazacağım', NULL, NULL, false, 2, CURRENT_TIMESTAMP),
('life-dream-1', 'dream', 'Kendime aylık en az 20 asgari ücret net kâr bırakan işletmeler kuracağım.', 2, NULL, false, 1, CURRENT_TIMESTAMP),
('life-dream-2', 'dream', 'Beni seven ve bana hitap eden, entelektüel ve her alanda birbirimizi besleyecek, aklımdaki ve doğru olan o kişiyle, o bekâr bey ile hayatlarımızı birleştirip evleneceğiz. (B.K.)', 4, NULL, false, 2, CURRENT_TIMESTAMP),
('life-dream-3', 'dream', 'Antalya''da yaşayacağım.', 6, 'Defterde yanında ikinci bir “1. önceliğim” notu da var.', false, 3, CURRENT_TIMESTAMP),
('life-dream-4', 'dream', 'Kendi şirketimi, ismimi kuracağım.', 2, NULL, false, 4, CURRENT_TIMESTAMP),
('life-dream-5', 'dream', 'Bu yıllarda 2 kitabımı yazıp yayınlayacağım.', 3, NULL, false, 5, CURRENT_TIMESTAMP),
('life-dream-6', 'dream', 'Alanımda en çok etkilenen, izleyen, okuyanlarda bağı olan o kişi olup, entelektüel alanda sosyal medyada ilerleyip 3 yıl sonunda 350 bin takipçiye sahip olacağım.', 3, NULL, false, 6, CURRENT_TIMESTAMP),
('life-dream-7', 'dream', 'Eşimle orijinal Phantom of the Opera gösterisine gideceğim.', NULL, NULL, false, 7, CURRENT_TIMESTAMP),
('life-dream-8', 'dream', 'Şans oyunlarından birisinde tek biletle 6 tam tutturup en büyük ikramiyeyi kazanacağım.', 7, NULL, false, 8, CURRENT_TIMESTAMP),
('life-dream-9', 'dream', 'Ve her zaman en az 4 net veren sistemi bulacağım.', 7, NULL, false, 9, CURRENT_TIMESTAMP),
('life-dream-10', 'dream', 'Beyaz (Porsche) arabamı alıp gezeceğim. Hatta ilk önce Atakule Kule restoranta yemeğe gideceğim.', 5, NULL, false, 10, CURRENT_TIMESTAMP),
('life-dream-11', 'dream', 'Çok sağlıklı, ipek gibi, göğüs altlarıma kadar uzun ve perçemi olan saçlara sahip olacağım.', 1, 'Kasım. Bu 5 ayda aşırı hızlı uzayacak.', false, 11, CURRENT_TIMESTAMP),
('life-dream-12', 'dream', '69,50 kg''dan sağlıklı şekilde (maksimum sıkılaşarak) 55 kg olmak. Haziran''a kadar; sonra 5 kg daha.', 1, 'Bunun için ip atlama, yoğun yürüyüş yapacağım. Kahveyi, kırmızı eti hayatımdan tamamen çıkaracağım.', false, 12, CURRENT_TIMESTAMP)
ON CONFLICT ("id") DO NOTHING;
