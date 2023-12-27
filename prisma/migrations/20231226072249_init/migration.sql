-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "activationCode" INTEGER NOT NULL DEFAULT 111066,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingPreference" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ShoppingPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordRequest" (
    "id" SERIAL NOT NULL,
    "resetKey" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PasswordRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ShoppingPreferenceToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ShoppingPreference_name_key" ON "ShoppingPreference"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ShoppingPreferenceToUser_AB_unique" ON "_ShoppingPreferenceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ShoppingPreferenceToUser_B_index" ON "_ShoppingPreferenceToUser"("B");

-- AddForeignKey
ALTER TABLE "_ShoppingPreferenceToUser" ADD CONSTRAINT "_ShoppingPreferenceToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ShoppingPreference"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShoppingPreferenceToUser" ADD CONSTRAINT "_ShoppingPreferenceToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
