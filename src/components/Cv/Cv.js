import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaStar,
  FaRegSmileWink,
} from "react-icons/fa";
import{
GridLayout,
Header,
Headerh1,
Headerp,
Picture,
Pictureimg,
AsideLeft,
AsideBlock ,
AsideBlockh3,
AsideBlockh3p,
AsideBlockbarskill,
AsideBlockbarskillprogress,
AsideBlockbarskillprogress2,
AsideBlockbarskilldot,
AsideBlockbarskilldot2,
AsideBlockstarh3,
AsideBlocksocial,
AsideBlocksociali,
AsideBlocksocialp,
Main,
Mainh2,
Mainp,
Mainexperience,
Mainexperiencetimeline,
Mainexperiencetimelinep ,
Mainexperiencecontent,
Mainexperiencecontenth3,
Mainexperiencecontentp,
Mainexperiencecontentul,
Footer,
Footerh2} from "./Cv.elements";
import profile from '../../images/profile.jpg';

export default function CV() {
  return (
    <GridLayout>
      <Header>
        <Headerh1>Mohamed Aymen TLILI</Headerh1>
        <Headerp>Développeur web Fullstack</Headerp>
      </Header>
      <Picture>
        <Pictureimg src={profile} alt="test" />
      </Picture>
      <AsideLeft>
        <AsideBlock>
          <AsideBlockh3>CONTACT</AsideBlockh3>
          <AsideBlockh3>Téléphone</AsideBlockh3>
          <AsideBlockh3p>07 82 32 32 81</AsideBlockh3p>
          <AsideBlockh3>Email</AsideBlockh3>
          <AsideBlockh3p>aymentli@gmail.com</AsideBlockh3p>
          <AsideBlockh3>Adresse</AsideBlockh3>
          <AsideBlockh3p>
            18 avenue du Maréchal Foch 77500 - Chelles
          </AsideBlockh3p>
        </AsideBlock>
        <AsideBlock>
          <AsideBlockh3>SKILLS</AsideBlockh3>
          <AsideBlockh3p>HTML & SCSS</AsideBlockh3p>
          <AsideBlockbarskill>
            <AsideBlockbarskillprogress />
            <AsideBlockbarskilldot />
          </AsideBlockbarskill>
          <AsideBlockh3p>ReactJs</AsideBlockh3p>
          <AsideBlockbarskill>
            <AsideBlockbarskillprogress />
            <AsideBlockbarskilldot />
          </AsideBlockbarskill>
          <AsideBlockh3p>VueJS</AsideBlockh3p>
          <AsideBlockbarskill>
            <AsideBlockbarskillprogress2 />
            <AsideBlockbarskilldot2 />
          </AsideBlockbarskill>
          <AsideBlockh3p>AngularJS</AsideBlockh3p>
          <AsideBlockbarskill>
            <AsideBlockbarskillprogress2 />
            <AsideBlockbarskilldot2 />
          </AsideBlockbarskill>
          <AsideBlockh3p>NodeJS</AsideBlockh3p>
          <AsideBlockbarskill>
            <AsideBlockbarskillprogress />
            <AsideBlockbarskilldot />
          </AsideBlockbarskill>
          <AsideBlockh3p>PHP</AsideBlockh3p>
          <AsideBlockbarskill>
            <AsideBlockbarskillprogress />
            <AsideBlockbarskilldot />
          </AsideBlockbarskill>
          <AsideBlockh3p>Symfony</AsideBlockh3p>
          <AsideBlockbarskill>
            <AsideBlockbarskillprogress />
            <AsideBlockbarskilldot />
          </AsideBlockbarskill>
        </AsideBlock>
        <AsideBlock>
          <AsideBlocksocial>
            <AsideBlocksociali>
              <FaTwitter />
            </AsideBlocksociali>
            <AsideBlocksocialp>@TliliAymentli</AsideBlocksocialp>
          </AsideBlocksocial>
          <AsideBlocksocial>
            <AsideBlocksociali>
              <FaFacebook />
            </AsideBlocksociali>
            <AsideBlocksocialp>Mohamed Aymen TLILI</AsideBlocksocialp>
          </AsideBlocksocial>
          <AsideBlocksocial>
            <AsideBlocksociali>
              <FaLinkedin />
            </AsideBlocksociali>
            <AsideBlocksocialp>Mohamed Aymen TLILI</AsideBlocksocialp>
          </AsideBlocksocial>
          <AsideBlocksocial>
            <AsideBlocksociali>
              <FaGithub />
            </AsideBlocksociali>
            <AsideBlocksocialp>Mohamed-Aymen-TLILI</AsideBlocksocialp>
          </AsideBlocksocial>
        </AsideBlock>
        <AsideBlock>
          <AsideBlockh3>Langues</AsideBlockh3>
          <AsideBlockstarh3>
            Anglais <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </AsideBlockstarh3>
          <AsideBlockstarh3>
            Arabe <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </AsideBlockstarh3>
        </AsideBlock>
      </AsideLeft>
      <Main>
        <Mainh2>PROFIL PROFESSIONNEL</Mainh2>
        <Mainp>
          J’ai 4 ans d’expérience dans le développement de projets informatiques
          WEB. Les multiples compétences dans la création des applications Web
          et le développement des sites internet me permettent d’aborder les
          futurs projets avec une démarche qualitative.
        </Mainp>
        <Mainh2>EXPERIENCES PROFESSIONNELLES</Mainh2>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              2016 <br />
              - <br />
              2020
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>
              Développeur web Indépendant
            </Mainexperiencecontenth3>
            <Mainexperiencecontentp>Freelance</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              Développement et intégration des sites et des applications web
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              2020
              <br />
              - <br />
              2019
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>Développeur web</Mainexperiencecontenth3>
            <Mainexperiencecontentp>DisneyLand Paris</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              - Création d’un site vitrine dédié aux Disney Business - Création
              d’un site vitrine dédié aux Disney Business - Conception d’une
              application pour la gestion de réservations Business - Création
              d’un site E-commerce pour les clients Business et VIP -
              Développement des sites en respectant la charte graphique et le
              cahier de charges - Création des templates responsives et
              accessibles - Apport de solutions efficaces aux Users Interfaces -
              Développement des micro-services - Gestion des API - Tests
              Unitaires - Participation aux réunions (Agile, PokerPlaninng,
              Features, user story, etc.) - Versionning git
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              2018 <br />
              - <br />
              2019
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>1 2 3 Consulting</Mainexperiencecontenth3>
            <Mainexperiencecontentp>Développeur Web</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              - Participation aux choix architecturaux - Analyse et conception
              des solutions techniques et de l’architecture de l’application
              -Développement de la partie Front-end en ReactJS / Redux -
              Développement de la partie Back-end en PHP - Gestion des API -
              Test unitaires - Participation aux réunions (Agile, PokerPlanning,
              Features, user story, etc.) - Correction des bugs et optimisation
              du code avec l’utilisation des bonnes pratiques du web
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              2017 <br />
              - <br />
              2018
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>TunisInfoForYou</Mainexperiencecontenth3>
            <Mainexperiencecontentp>Développeur Web</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              - Participation à la conception - Développement des
              fonctionnalités demandées - Développement module de gestion de
              stock - Intégration Template html5 – css3 – jquery – ReactJS --
              bootstrap … - Installer et configurer ApiPlatform sur une
              application Symfony - Utiliser la librairie Axios pour faire des
              requêtes HTTP depuis Javascript - Créer une application React avec
              navigation intégrée - Récupérer les données d'une API REST depuis
              l'application React - Envoyer des données à une API REST depuis
              l'application React
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
      </Main>
      <Footer>
        <Footerh2>
          <span>aymentli@gmail.com </span>
        
          <FaRegSmileWink />
        </Footerh2>
      </Footer>
    </GridLayout>
  );}