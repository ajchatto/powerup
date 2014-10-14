iDROP TABLEi `powerup`.`Provider`;

CREATE TABLE `powerup`.`Provider` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(1000) NULL,
  `type` VARCHAR(45) NULL,
  `image` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `address1` VARCHAR(45) NULL,
  `address2` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `postal_code` VARCHAR(45) NULL,
  `contact_name` VARCHAR(45) NULL,
  `contact_email` VARCHAR(45) NULL,
  `contact_phone` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


INSERT INTO `powerup`.`Provider` (`id`, `name`, `phone`, `address1`, `city`, `state`, `postal_code`) VALUES ('1001', 'Yoga Inside Out', '(408) 384-9644', '10321 S De Anza Blvd', 'Cupertino', 'CA', '95014');
INSERT INTO `powerup`.`Provider` (`name`, `phone`, `address1`, `city`, `state`, `postal_code`) VALUES ('East West Yoga', '(408) 517-9111', '20670 Stevens Creek Blvd', 'Cupertino', 'CA', '95014');
INSERT INTO `powerup`.`Provider` (`name`, `phone`, `address1`, `city`, `state`, `postal_code`) VALUES ('Northwest YMCA', '(408) 257-7160', '20803 Alves Dr', 'Cupertino', 'CA', '95014');
INSERT INTO `powerup`.`Provider` (`name`, `phone`, `address1`, `city`, `state`, `postal_code`) VALUES ('Cupertino Sports Center', '(408) 777-3160', '21111 Stevens Creek Boulevard', 'Cupertino', 'CA', '95014');
INSERT INTO `powerup`.`Provider` (`name`, `url`, `phone`, `address1`, `city`, `state`, `postal_code`) VALUES ('Sutton Swim School', 'https://www.suttonswim.com', '(408) 996-9800', '10455 Bandley Dr', 'Cupertino', 'CA', '95014');


