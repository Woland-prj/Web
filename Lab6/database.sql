/* MySql path: C:\'Program Files'\MySQL\'MySQL Server 8.0'\bin\mysql.exe -u root -p */

CREATE TABLE posts 
(
    `post_id`  INT NOT NULL AUTO_INCREMENT,
    `title`    VARCHAR(255) NOT NULL,
    `subtitle` VARCHAR(255) NOT NULL, 
    `author`   VARCHAR(255) NOT NULL,
    `pub_date` VARCHAR(255) NOT NULL,  
    `featured` TINYINT(1),
    `recent`   TINYINT(1),
    PRIMARY KEY (`post_id`) 
) ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci
;

INSERT INTO posts (title, subtitle, author, pub_date, featured, recent) VALUES ('The Road Ahead', 'The road ahead might be paved - it might not be.', 'Mat Vogels', '29/05/2015', 1, 0);
INSERT INTO posts (title, subtitle, author, pub_date, featured, recent) VALUES ('From Top Down', 'Once a year, go someplace you`ve never been before.', 'William Wong', '29/05/2015', 1, 0);