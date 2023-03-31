/* MySql path: C:\'Program Files'\MySQL\'MySQL Server 8.0'\bin\mysql.exe -u root -p */

CREATE TABLE post
(
    `post_id`    INT NOT NULL AUTO_INCREMENT,
    `title`      VARCHAR(255) NOT NULL,
    `subtitle`   VARCHAR(255) NOT NULL,
    `image_url`  VARCHAR(255) NOT NULL,
    `author`     VARCHAR(255) NOT NULL,
    `author_url` VARCHAR(255) NOT NULL,
    `pub_date`   VARCHAR(255) NOT NULL, 
    `featured`   TINYINT(1) DEFAULT 0,
    PRIMARY KEY (`post_id`) 
) ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci
;

INSERT INTO post (title, subtitle, image_url, author, author_url, pub_date, featured) VALUES ('The Road Ahead', 'The road ahead might be paved - it might not be.', 'article-feature article-feature_left', 'Mat Vogels', '/static/images/Mat_Vogels_avatar.jpg', '29/05/2015', 1);
INSERT INTO post (title, subtitle, image_url, author, author_url, pub_date, featured) VALUES ('From Top Down', 'Once a year, go someplace you’ve never been before.', 'article-feature article-feature_right', 'William Wong', '/static/images/William_Wong_avatar.jpg', '29/05/2015', 1);
INSERT INTO post (title, subtitle, image_url, author, author_url, pub_date, featured) VALUES ('Still Standing Tall', 'Life begins at the end of your comfort zone.', '/static/images/still_standing_tall_image.jpg', 'William Wong', '/static/images/William_Wong_avatar.jpg', '29/05/2015', 0);
INSERT INTO post (title, subtitle, image_url, author, author_url, pub_date, featured) VALUES ('Sunny Side Up', 'No place is ever as bad as they tell you it’s going to be.', '/static/images/sunny_side_up_image.png', 'Mat Vogels', '/static/images/Mat_Vogels_avatar.jpg', '29/05/2015', 0);
INSERT INTO post (title, subtitle, image_url, author, author_url, pub_date, featured) VALUES ('Water Falls', 'We travel not to escape life, but for life not to escape us.', '/static/images/water_falls_image.png', 'Mat Vogels', '/static/images/Mat_Vogels_avatar.jpg', '29/05/2015', 0);
INSERT INTO post (title, subtitle, image_url, author, author_url, pub_date, featured) VALUES ('Through the Mist', 'Travel makes you see what a tiny place you occupy in the world.', '/static/images/through_the_mist_image.png', 'William Wong', '/static/images/William_Wong_avatar.jpg', '29/05/2015', 0);
INSERT INTO post (title, subtitle, image_url, author, author_url, pub_date, featured) VALUES ('Awaken Early', 'Not all those who wander are lost.', '/static/images/awaken_early_image.png', 'Mat Vogels', '/static/images/Mat_Vogels_avatar.jpg', '29/05/2015', 0);
INSERT INTO post (title, subtitle, image_url, author, author_url, pub_date, featured) VALUES ('Try it Always', 'The world is a book, and those who do not travel read only one page.', '/static/images/try_it_always_image.jpg', 'Mat Vogels', '/static/images/Mat_Vogels_avatar.jpg', '29/05/2015', 0);