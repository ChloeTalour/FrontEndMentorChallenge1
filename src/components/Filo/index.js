import React from 'react';
import Header from 'src/components/Header';
import Introduction from 'src/components/Introduction';
import Values from 'src/components/Values';
import HowWork from 'src/components/HowWork';
import TeamTalk from 'src/components/TeamTalk';
import GetAccess from 'src/components/GetAccess';
import Footer from 'src/components/Footer';

const Filo = () => (
  <div className="filo">
    <Header />
    <Introduction />
    <Values />
    <HowWork />
    <TeamTalk />
    <GetAccess />
    <Footer />
  </div>
);

export default Filo;
