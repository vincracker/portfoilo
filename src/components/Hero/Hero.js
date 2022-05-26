import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      I'm Vincent<br/>
      A Full-stack Blockchian Developer 
      </SectionTitle>
      <SectionText>
        I'm a Full-stack Blockchian Developer <br/>
        I develop high performance and high security Blockchain and Web3 Application
      </SectionText>
      <Button onClick={()=> window.location = "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;