import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import BoardMembers from "./BoardMembers";
import MemberBenifits from "./MemberBenifits";
import TalentPublication from "./TalentPublication";
import KgfKingdom from "./KgfKingdom";
import Events from "./Events";
import Donate from "./Donate";


function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <BoardMembers />
      <MemberBenifits/>
      <TalentPublication />
      <KgfKingdom />
      <Events/>
      <Donate/>
    </>
  );
}
export default LandingPage;
