import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello, my name is Ravi Kumar Sharma. graduated from the Punjab Swami Vivekanand Institute of
Engineering and Technology in 2021. with mechanical engineering.
After graduation, I got a position as Inspection Engineer at mark exhaust system ltd.
While also pursuing a certification in the Skill-India challenge and Aryabhatta Ganit challenge.
Then I pursued a career in the IT field as a trainee at Function-Up Where I learned a great
deal with backend development through assisting on the backend like NodeJs, MongoDB, Express,
ReactJs, Redis, AWS S3, and Cache.
Thank You
        </SectionText>
        <Button onClick={()=>window.location = "https://www.linkedin.com/in/ravi-kumar-sharma-/"}>Know More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;