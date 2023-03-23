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
        Hello, my name is Ravi Kumar Sharma. I graduated from the Punjab Swami Vivekanand Institute of Engineering and Technology in 2021 with a degree in Mechanical Engineering. After graduation, I started working as an Inspection Engineer at Mark Exhaust System Ltd. While working there, I also pursued certifications in the Skill-India Challenge and Aryabhatta Ganit Challenge.Later, I pursued a career in the IT field as a trainee at Function-Up where I gained experience in backend development by assisting on projects involving NodeJs, MongoDB, Express, ReactJs, Redis, AWS S3, and Cache. 
  Thank you
        </SectionText>
        <Button onClick={()=>window.location = "https://drive.google.com/file/d/1kI6Md3-Ycft61QPG18Cdm4HX9mpBgNLq/view"}>Know More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
