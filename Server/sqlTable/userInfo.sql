-- 用户信息表

DROP TABLE IF EXISTS `user_Info`;
CREATE TABLE `user_Info`(
	`id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
	`userName` varchar(32) NOT NULL COMMENT '用户名',
	`email` varchar(64) NOT NULL COMMENT '邮箱',
	`password` varchar(32) NOT NULL COMMENT '密码',
	`createdAt` DATETIME  NOT NULL COMMENT '创建时间',
	`updatedAt` DATETIME  NOT NULL COMMENT '更新时间',
	PRIMARY KEY (`id`)
)  ENGINE = InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='用户信息表';