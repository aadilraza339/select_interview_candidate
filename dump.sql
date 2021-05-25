
CREATE TABLE IF NOT EXISTS `candidate`(
`user_id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT,
`user_name` VARCHAR(255) NOT NULL,
`email` VARCHAR(255) NOT NULL,
PRIMARY KEY (`user_id`),
UNIQUE KEY `email` (`email`)
);


CREATE TABLE IF NOT EXISTS `test_score` (
  `first_round` INT(10) UNSIGNED NOT NULL,
  `second_round` INT(10) UNSIGNED NOT NULL,
  `third_round` INT(3) UNSIGNED NOT NULL,
  `user_id_score` INT(10) UNSIGNED NOT NULL,
  UNIQUE KEY `user_id_score` (`user_id_score`),
  FOREIGN KEY (`user_id_score`) REFERENCES candidate(`user_id`)
);