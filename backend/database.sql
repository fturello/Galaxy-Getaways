-- MariaDB dump 10.19  Distrib 10.10.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: galaxy_getaways
-- ------------------------------------------------------
-- Server version	10.10.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `planet`
--

DROP TABLE IF EXISTS `planet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `planet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `planet_name` varchar(255) NOT NULL,
  `texture_image` varchar(255) NOT NULL,
  `animation_duration` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `composition` varchar(255) NOT NULL,
  `climate` varchar(255) NOT NULL,
  `diameter` int(11) NOT NULL,
  `earth_distance` bigint(20) NOT NULL,
  `activity1_image` varchar(255) NOT NULL,
  `activity2_image` varchar(255) NOT NULL,
  `hotel_image` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planet`
--

LOCK TABLES `planet` WRITE;
/*!40000 ALTER TABLE `planet` DISABLE KEYS */;
INSERT INTO `planet` VALUES
(1,'Eris','eris.jpg',9900000,25,25,'Telluric','Barium','Polar',253524,10181909050,'skiing.png','boating.png','hotel.png',102390,'Eris is a telluric planet, located outside the solar system. It is known for its high mountains, which offer breathtaking panoramic views. Hiking and climbing are very popular. Temperatures on Eris vary considerably depending on the altitude. Eris is also a great place for astronomy enthusiasts, as it offers clear night sky conditions and a great view of our solar system.',43),
(2,'Haumea','haumea.jpg',5295824,34,34,'Telluric','Selenium','Desertic',342827,1149598023,'climbing.png','zipline.png','greenhotel.png',10480,'Haumea is a telluric planet, located outside the solar system. It is known for its desert landscape and 5-star hotel. The desert offers a breathtaking view of the stars and constellations, making astronomical observation a real pleasure for amateurs. As for the 5-star hotel, it offers luxurious rooms, gourmet restaurants, swimming pools and spa facilities for a relaxing and luxurious stay. Activities at Haumea include 4x4 excursions, desert safaris, and scenic flights to explore the vast expanses of sand.',34),
(3,'Icy','icy.jpg',2785712,20,20,'Telluric','Hydrogen','Polar',203851,80562258751,'iceclimbing.png','skiing1.png','icehotel.png',853720,'Icy is a dwarf planet, located outside the solar system. Covered in ice, it is home to breathtaking landscapes of snow-capped mountains and vast icy expanses. Outdoor adventures, such as hiking and snowmobile tours, are very popular here. It is an ideal place for adventure and exploration enthusiasts looking to discover unique and wild landscapes.In short, Icy is a great place for adventure and exploration enthusiasts looking to discover unique and wild landscapes, with activities for everyone, such as snow sports, ice diving, hiking and archaeology. Book your trip on Icy now',12),
(4,'Jupiter','jupiter.jpg',7392751,40,40,'Gaseous','Helium','Nimbus',409231,778340821,'bungee.png','sandboard.png','modernhotel.png',7580,'Our trip to Jupiter will take you to discover one of its most fascinating moons, Europa. This icy moon is known for its vast sub-glacial oceans and breathtaking landscapes formed by the gas giants winds and storms. Guests will be able to explore the sub-glacial caves aboard high-tech submersibles and discover unique alien life forms.
But thats not all, extreme sports enthusiasts will be thrilled to discover the legendary surf spots on Europa. The giant waves created by the storms of Jupiter storms offer unique challenges for experienced surfers. Guests will be able to rent special surfing equipment and participate in surfing lessons with experienced instructors. Reserve your spot now for our trip to Jupiter',29),
(5,'Xantheus','xantheus.jpg',100000,42,42,'Gaseous','Berylium','Nimbus',420131,35254854321,'hotairballoon.png','festival.png','pinkhotel.png',329100,'The planet Xantheus is a true hidden gem of the universe. With its breathtaking scenery and pink atmosphere, it is the perfect place for an unforgettable alien getaway. Travelers will discover fields of pink flowers as far as the eye can see, snow-capped mountains and turquoise lakes. The nights are illuminated by bright pink aurora borealis, offering a breathtaking spectacle. Xantheus is also famous for its unique life forms, such as space unicorns and giant butterflies. Book your trip to Xantheus now',1),
(6,'Venus','venus.jpg',1538365,30,30,'Telluric','CO₂','Pyroclime',305666,108208475,'surfing.png','water.png','amazinghotel.png',1000,'Venus is the second planet from the Sun in our solar system. You will discover active volcanoes, snow-capped mountains and vast lava plains. Venus is also a place of choice for lovers of astronomy, in fact it is the closest and best equipped point for observing the sun. Additionally, Venus rotates in the opposite direction of most planets, meaning its day is longer than its year. ',4),
(7,'Moon','moon.jpg',795282,15,15,'Telluric','Silicium','Desertic',90250,384400,'biking.png','skydiving.png','luxuryhotel.png',599,'The moon, eternal source of inspiration for poets and challenge for our ancestors. So close but still exotic, popular activities include hiking and 4x4 excursions, scenic flights to admire the breathtaking view of the Earth. Archaeology buffs can visit the ancient Apollo moon landing sites.',2),
(8,'Black Hole','type',5,31,30,'Undescribed','Undescribed','Unexpected',99342827,542462258945132,'blackhole.png','none','none',153090,'No Next Day Trip: Dive into the unknown with our ultimate black hole tour. Imagine yourself floating in infinite space, contemplating the wonders of the universe and knowing that you are about to have the most intense experience of your life. This one-way trip will take you beyond what you ever imagined possible, allowing you to explore uncharted worlds and discover hidden secrets of the universe. Do not miss this unique opportunity to experience an adventure that few others will have the chance to experience. Reserve your seat now for the once-in-a-lifetime journey of a lifetime',1051);
/*!40000 ALTER TABLE `planet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rocket`
--

DROP TABLE IF EXISTS `rocket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rocket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rocket_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price_supplement` int(11) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rocket`
--

LOCK TABLES `rocket` WRITE;
/*!40000 ALTER TABLE `rocket` DISABLE KEYS */;
INSERT INTO `rocket` VALUES
(1,'Crew Dragon','shuttle1.png',0,' A trip for 2, 3 or 4 people, until your destination ? The Crew Dragon shuttle will answer your request thanks to its minimalist structure. Created by the SpaceX space agency, this small shuttle has been used for the transit of astronaut crews in low orbit. 
The cargo rocket can accommodate up to 25 shuttles on board, which it will drop into the low orbits of your destinations as it travels to its final destination. 
Programmed for your journey, your shuttle will land in the spaceport in complete control where an integration team awaits you.'),
(2,'StarSpeeder 3000','shuttle3.png',1000, 'Developed by the Star Tour travel agency, the StarSpeeder 3000 is the safe ship for a direct trip to your destination. With a capacity of up to 40 passengers, it is the most advanced of its kind. The crew consists of 2 droids specialized in piloting and navigation assistance. 
Your journey will be carried out in the greatest safety by its technology answering the needs for the proposed journeys.'),
(3,'USS Enterprise','shuttle2.png',3000, 'Shuttle imagined and built by NASA, it can accommodate up to fifteen people on board. A crew of 2 pilots and 3 assistants will make you enjoy a comfortable trip to your final destination.Thanks to its aerodynamic structure, you will have the sensation of traveling in a plane in space.');
/*!40000 ALTER TABLE `rocket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trip`
--

DROP TABLE IF EXISTS `trip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `departure` date NOT NULL,
  `returne` date NOT NULL,
  `planet` int(11),
  `rocket` int(11),
  `price` int(11),
  PRIMARY KEY (`id`),
  KEY `trip_FK` (`planet`),
  KEY `trip_FK_1` (`rocket`),
  CONSTRAINT `trip_FK` FOREIGN KEY (`planet`) REFERENCES `planet` (`id`),
  CONSTRAINT `trip_FK_1` FOREIGN KEY (`rocket`) REFERENCES `rocket` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trip`
--

LOCK TABLES `trip` WRITE;
/*!40000 ALTER TABLE `trip` DISABLE KEYS */;
/*!40000 ALTER TABLE `trip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'galaxy_getaways'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-24 11:09:55
