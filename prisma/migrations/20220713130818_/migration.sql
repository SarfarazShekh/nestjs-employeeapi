-- CreateTable
CREATE TABLE "departments" (
    "id" SERIAL NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "departmentName" TEXT NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dateOfBrith" TEXT,
    "gender" TEXT NOT NULL,
    "photoPath" TEXT,
    "departmentId" INTEGER NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");
