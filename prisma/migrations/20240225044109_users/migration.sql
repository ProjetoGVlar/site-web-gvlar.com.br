-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(127) NOT NULL,
    `name` VARCHAR(127) NOT NULL,
    `hashedPassword` VARCHAR(150) NOT NULL,
    `hashedRefreshToken` VARCHAR(250) NULL,
    `phone` VARCHAR(15) NOT NULL,
    `validation` BOOLEAN NOT NULL DEFAULT false,
    `role` VARCHAR(191) NOT NULL DEFAULT 'client',
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `business` VARCHAR(191) NOT NULL,
    `about` VARCHAR(191) NOT NULL,
    `sell` DOUBLE NULL,
    `rental` DOUBLE NULL,
    `iptu` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `footage` INTEGER NOT NULL,
    `bedroom` INTEGER NOT NULL,
    `bathroom` INTEGER NOT NULL,
    `garage` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NULL,
    `zipcode` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NULL,
    `situation` VARCHAR(191) NOT NULL DEFAULT 'em analise',
    `register` INTEGER NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photograph` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `describe` VARCHAR(100) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `propertyId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(127) NOT NULL,
    `type` VARCHAR(50) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `owner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(127) NOT NULL,
    `email` VARCHAR(127) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `propertyandowner` (
    `propertyId` INTEGER NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`propertyId`, `ownerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_register_fkey` FOREIGN KEY (`register`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `photograph` ADD CONSTRAINT `photograph_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `property`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propertyandowner` ADD CONSTRAINT `propertyandowner_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propertyandowner` ADD CONSTRAINT `propertyandowner_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `owner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
