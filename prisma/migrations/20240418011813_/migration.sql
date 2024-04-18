-- CreateTable
CREATE TABLE `m_user` (
    `u_id` INTEGER NOT NULL AUTO_INCREMENT,
    `u_name` VARCHAR(191) NOT NULL,
    `division_id` INTEGER NOT NULL,
    `branch_id` INTEGER NOT NULL,
    `u_email` VARCHAR(191) NOT NULL,
    `u_password` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
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
CREATE TABLE `Branch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `b_name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Division` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch_id` INTEGER NOT NULL,
    `d_name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_type` VARCHAR(191) NULL,
    `task_title` VARCHAR(191) NULL,
    `priority` VARCHAR(191) NULL,
    `iteration` VARCHAR(191) NULL,
    `start_date` DATETIME(3) NULL,
    `due_date` DATETIME(3) NULL,
    `description` TEXT NULL,
    `approved_at` DATETIME(3) NULL,
    `approved_by` VARCHAR(191) NULL,
    `started_at` DATETIME(3) NULL,
    `started_by` VARCHAR(191) NULL,
    `finished_at` DATETIME(3) NULL,
    `finished_by` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL DEFAULT 'Wait-app',
    `progress` INTEGER NULL DEFAULT 0,
    `fileName` VARCHAR(191) NULL,
    `file_hasil` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_by` VARCHAR(191) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,
    `pic_rating` INTEGER NULL,
    `pic_id` INTEGER NULL,
    `spv_id` INTEGER NULL,
    `branch_id` INTEGER NULL,
    `division_id` INTEGER NULL,

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
ALTER TABLE `m_user` ADD CONSTRAINT `m_user_division_id_fkey` FOREIGN KEY (`division_id`) REFERENCES `Division`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_user` ADD CONSTRAINT `m_user_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Division` ADD CONSTRAINT `Division_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `task_pic_id_fkey` FOREIGN KEY (`pic_id`) REFERENCES `m_user`(`u_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `task_spv_id_fkey` FOREIGN KEY (`spv_id`) REFERENCES `m_user`(`u_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `task_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `task_division_id_fkey` FOREIGN KEY (`division_id`) REFERENCES `Division`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploadHistory` ADD CONSTRAINT `uploadHistory_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `m_user`(`u_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
