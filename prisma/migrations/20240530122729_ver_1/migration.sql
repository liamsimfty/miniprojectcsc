-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "akibat" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdate" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_akibat_key" ON "User"("akibat");
