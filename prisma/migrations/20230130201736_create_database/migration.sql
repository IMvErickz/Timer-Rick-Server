-- CreateTable
CREATE TABLE `Music` (
    `id` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `URL` VARCHAR(191) NOT NULL,
    `Artista` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Music_id_key`(`id`),
    UNIQUE INDEX `Music_Nome_key`(`Nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
