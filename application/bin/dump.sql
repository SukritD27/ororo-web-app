-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: ororo_db
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_userid` int unsigned NOT NULL,
  `comment` text NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_postid` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `post_author_idx` (`fk_postid`),
  KEY `author_id_idx` (`fk_userid`),
  CONSTRAINT `author_id` FOREIGN KEY (`fk_userid`) REFERENCES `users` (`id`),
  CONSTRAINT `post_id` FOREIGN KEY (`fk_postid`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'2023-08-09 16:48:28',8,'haha','2023-08-09 16:48:28',13),(2,'2023-08-09 18:39:23',17,'qrf','2023-08-09 18:39:23',16),(3,'2023-08-09 18:40:57',17,'qref','2023-08-09 18:40:57',16),(4,'2023-08-09 18:41:36',17,'qref','2023-08-09 18:41:36',16),(5,'2023-08-09 18:42:50',17,'qwef','2023-08-09 18:42:50',16),(6,'2023-08-09 18:42:56',17,'qwefsdsc','2023-08-09 18:42:56',16),(7,'2023-08-09 18:43:00',17,'qwefsdsc','2023-08-09 18:43:00',16),(8,'2023-08-09 18:43:00',17,'qwefsdsc','2023-08-09 18:43:00',16),(9,'2023-08-09 18:43:01',17,'qwefsdsc','2023-08-09 18:43:01',16),(10,'2023-08-09 18:43:18',17,'lmao','2023-08-09 18:43:18',16),(11,'2023-08-09 18:45:46',17,'hahha','2023-08-09 18:45:46',9),(12,'2023-08-09 18:47:03',17,'lmo','2023-08-09 18:47:03',9),(13,'2023-08-09 18:48:11',17,'test','2023-08-09 18:48:11',9),(14,'2023-08-10 14:05:16',8,'hello','2023-08-10 14:05:16',13),(15,'2023-08-10 14:14:43',8,'hey','2023-08-10 14:14:43',9),(16,'2023-08-10 14:16:56',8,'haha','2023-08-10 14:16:56',7),(17,'2023-08-10 14:28:57',8,'new com','2023-08-10 14:28:57',7),(18,'2023-08-10 14:31:27',8,'hehe','2023-08-10 14:31:27',7),(19,'2023-08-10 14:54:09',8,'yoooo','2023-08-10 14:54:09',11),(20,'2023-08-10 14:56:25',8,'d','2023-08-10 14:56:25',11),(21,'2023-08-10 14:59:28',8,'hi','2023-08-10 14:59:28',11),(22,'2023-08-10 15:02:06',8,'khb','2023-08-10 15:02:06',8),(23,'2023-08-10 15:05:13',8,'khb','2023-08-10 15:05:13',8),(24,'2023-08-10 15:05:30',8,'wfwdc','2023-08-10 15:05:30',8),(27,'2023-08-10 15:20:45',17,'hi','2023-08-10 15:20:45',12),(28,'2023-08-10 15:23:26',17,'hello','2023-08-10 15:23:26',12),(35,'2023-08-10 15:44:26',17,'sreg','2023-08-10 15:44:26',10),(36,'2023-08-10 16:03:25',17,'hey','2023-08-10 16:03:25',10),(37,'2023-08-10 16:04:24',17,'hel','2023-08-10 16:04:24',10),(38,'2023-08-10 16:08:57',9,'qrwef','2023-08-10 16:08:57',17),(39,'2023-08-10 16:09:29',9,'stbnet','2023-08-10 16:09:29',17),(40,'2023-08-10 16:15:49',9,'yoooo','2023-08-10 16:15:49',17),(41,'2023-08-10 16:25:13',9,'aergvrq','2023-08-10 16:25:13',17),(42,'2023-08-10 16:27:15',9,'qrw','2023-08-10 16:27:15',17),(43,'2023-08-10 16:27:29',9,'argwregf','2023-08-10 16:27:29',17),(44,'2023-08-10 16:27:31',9,'arsgfer','2023-08-10 16:27:31',17),(45,'2023-08-10 16:27:34',9,'afv','2023-08-10 16:27:34',17),(46,'2023-08-10 16:30:59',9,'jshDVC','2023-08-10 16:30:59',17),(47,'2023-08-10 16:31:56',9,'ajhde','2023-08-10 16:31:56',17),(48,'2023-08-10 16:32:06',9,'jhv','2023-08-10 16:32:06',17),(49,'2023-08-10 18:40:23',9,'khb','2023-08-10 18:40:23',10),(50,'2023-08-10 18:43:12',9,'hello','2023-08-10 18:43:12',10);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `video` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_userid` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `post_author_idx` (`fk_userid`),
  CONSTRAINT `post_author` FOREIGN KEY (`fk_userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (5,'arfr','serfvrsef','public/uploads/videos/video-1691530812678-495520397.mp4','public/uploads/images/thumbnail-video-1691530812678-495520397.png','2023-08-08 14:40:12','2023-08-08 14:40:12',9),(6,'test video','test video','public/uploads/videos/video-1691534067075-89598760.mp4','public/uploads/images/thumbnail-video-1691534067075-89598760.png','2023-08-08 15:34:27','2023-08-08 15:34:27',9),(7,'lmao haha','hahah','public/uploads/videos/video-1691534082224-9205346.mp4','public/uploads/images/thumbnail-video-1691534082224-9205346.png','2023-08-08 15:34:42','2023-08-08 15:34:42',9),(8,'funny video','friends having fun','public/uploads/videos/video-1691534102180-684339968.mp4','public/uploads/images/thumbnail-video-1691534102180-684339968.png','2023-08-08 15:35:02','2023-08-08 15:35:02',9),(9,'i am singing!!','me and my friends going around the neighborhood','public/uploads/videos/video-1691534129474-406376335.mp4','public/uploads/images/thumbnail-video-1691534129474-406376335.png','2023-08-08 15:35:29','2023-08-08 15:35:29',9),(10,'sodfb;gkwejnrgnw','wekrughweanfoirh','public/uploads/videos/video-1691545472859-18613971.mp4','public/uploads/images/thumbnail-video-1691545472859-18613971.png','2023-08-08 18:44:33','2023-08-08 18:44:33',9),(11,'jdjsjsjs','oooossss','public/uploads/videos/video-1691545497694-198559533.mp4','public/uploads/images/thumbnail-video-1691545497694-198559533.png','2023-08-08 18:44:57','2023-08-08 18:44:57',9),(12,'setb','wvtrv','public/uploads/videos/video-1691555783472-726376240.mp4','public/uploads/images/thumbnail-video-1691555783472-726376240.png','2023-08-08 21:36:23','2023-08-08 21:36:23',9),(13,'ksjbf','sljgns','public/uploads/videos/video-1691618809284-81747935.mp4','public/uploads/images/thumbnail-video-1691618809284-81747935.png','2023-08-09 15:06:49','2023-08-09 15:06:49',8),(16,'adfv','sfv','public/uploads/videos/video-1691629260766-616564788.mp4','public/uploads/images/thumbnail-video-1691629260766-616564788.png','2023-08-09 18:01:00','2023-08-09 18:01:00',17),(17,'srv','vqrad','public/uploads/videos/video-1691706416804-294364209.mp4','public/uploads/images/thumbnail-video-1691706416804-294364209.png','2023-08-10 15:26:56','2023-08-10 15:26:56',17);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `password` varchar(128) NOT NULL,
  `email` varchar(256) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'sample7','$2b$05$cT42GSceEn4eFPOEC9j39.rTscAIJQVaz7nXuzOx1TCnT142gv8Ve','sample7@mail.cpm','2023-08-04 14:59:11','2023-08-04 14:59:11'),(9,'sample5','$2b$05$OcnjzEco3RoypczTmUivIOm5vRalKwdOsznQsrpdCCVim6VuWJdt.','rewgr@ersg','2023-08-04 15:01:21','2023-08-04 15:01:21'),(10,'sample1','$2b$05$2rNnDh.CCkM8OQioSougMuvVk2hja/IeeBtPnyNYW7SW6PXUDwYTW','sdmdfsfvbsd@mail.com','2023-08-04 15:02:43','2023-08-04 15:02:43'),(12,'','$2b$05$yt0rqpWXXN/tFlQawmBSDeo8sOXlA8gmB78.GG22y56gwIeWKpiKy','','2023-08-08 13:05:59','2023-08-08 13:05:59'),(13,'sdf','$2b$05$KrhTpSqsVqa36kuGIlapruHvr9JP/G6wXTP0XNWaMMuWXtvlSkaEu','sample1@sfsu.edu','2023-08-08 22:31:13','2023-08-08 22:31:13'),(14,'fuck','$2b$05$Zk7tyQn0zPVNbynCqM0f..du2U7Y9d1XHgaAvucdJOa5AJ5kxFRMa','sdmvbffffsd@mail.com','2023-08-08 22:33:20','2023-08-08 22:33:20'),(15,'fuckd','$2b$05$QWEO.xy9tiKUDjwTrQg4o.Vz/9LwteG43X0VkFFca.v6tPw5q6xUC','f@d','2023-08-08 22:33:49','2023-08-08 22:33:49'),(16,'sukrit','$2b$05$ycydGoBDaZoYP/H.4m1o.edkjZ3pGXptC5q7BquBJmyJ/ZdQwue6K','d@s','2023-08-09 13:00:34','2023-08-09 13:00:34'),(17,'sample10','$2b$05$eYq8eN.SJ3tPzgLrylbAL.Nh4R3/nQoumt4wFvrH.NZ//mxuOcjy.','s@ss','2023-08-09 15:18:02','2023-08-09 15:18:02'),(18,'Sukrti','$2b$05$9a3SAseJNMFz.f8zbNgfDOmXbGqWndFFyNnyf3W76eBfJw4ldPklS','SSSO@as','2023-08-10 18:50:59','2023-08-10 18:50:59');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-10 21:20:31
