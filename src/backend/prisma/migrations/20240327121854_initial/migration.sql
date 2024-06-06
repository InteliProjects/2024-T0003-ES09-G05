-- CreateTable
CREATE TABLE "Researchs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Researchs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distribution" (
    "id" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "researchId" TEXT NOT NULL,

    CONSTRAINT "Distribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersDistribution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "grade" INTEGER,
    "distributionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersDistribution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Distribution" ADD CONSTRAINT "Distribution_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "Researchs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersDistribution" ADD CONSTRAINT "UsersDistribution_distributionId_fkey" FOREIGN KEY ("distributionId") REFERENCES "Distribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;
