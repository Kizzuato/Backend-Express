-- CreateTable
CREATE TABLE `m_user` (
    `u_id` INTEGER NOT NULL AUTO_INCREMENT,
    `u_name` VARCHAR(191) NOT NULL,
    `u_code` VARCHAR(191) NULL,
    `u_email` VARCHAR(191) NOT NULL,
    `u_password` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `division` VARCHAR(191) NULL,
    `u_token` VARCHAR(191) NULL,
    `u_phone` INTEGER NULL,
    `u_gender` VARCHAR(191) NULL,
    `u_date_of_birth` DATETIME(3) NULL,
    `u_address` VARCHAR(191) NULL,
    `u_province_id` VARCHAR(191) NULL,
    `u_city_id` VARCHAR(191) NULL,
    `u_rate` INTEGER NULL DEFAULT 0,
    `total_task` INTEGER NULL DEFAULT 0,
    `lastSeenNotification` DATETIME(3) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `m_user_u_email_key`(`u_email`),
    PRIMARY KEY (`u_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Division` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `divisionName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pic_id` VARCHAR(191) NULL,
    `spv_id` VARCHAR(191) NULL,
    `task_type` VARCHAR(191) NULL,
    `task_title` VARCHAR(191) NULL,
    `priority` VARCHAR(191) NULL,
    `iteration` VARCHAR(191) NULL,
    `start_date` DATETIME(3) NULL,
    `due_date` DATETIME(3) NULL,
    `description` TEXT NULL,
    `pic_title` VARCHAR(191) NULL,
    `pic` VARCHAR(191) NULL,
    `pic_rating` INTEGER NULL,
    `spv` VARCHAR(191) NULL,
    `division` VARCHAR(191) NULL,
    `approved_at` DATETIME(3) NULL,
    `approved_by` VARCHAR(191) NULL,
    `started_at` DATETIME(3) NULL,
    `started_by` VARCHAR(191) NULL,
    `finished_at` DATETIME(3) NULL,
    `finished_by` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL DEFAULT 'Wait-app',
    `progress` INTEGER NULL DEFAULT 0,
    `fileName` VARCHAR(191) NULL,
    `filePath` VARCHAR(191) NULL,
    `fileSize` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_by` VARCHAR(191) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timeStamp` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `taskId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uploadHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fileName` VARCHAR(191) NOT NULL,
    `filePath` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploadHistory` ADD CONSTRAINT `uploadHistory_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `m_user`(`u_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
