import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";
import {
  InfoSection,
  InfoSection1,
  InfoSection2,
  InfoSection3,
  InfoSection0,
  Navbar,
  Footer,
} from "../../components";
import Companies from "../../components/people";


function Home() {
  return (
    <>
      <Navbar />
      <InfoSection1 {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection2 {...homeObjFour} />
      <InfoSection0 {...homeObjOne} />
      <InfoSection3 {...homeObjFive} />
      <Companies />
      <Footer />
    </>
  );
}

export default Home;
