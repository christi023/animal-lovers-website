import React from 'react';
import Common from '../../Common';
import web from '../../../assets/caregiver.jpeg';
import web1 from '../../../assets/caregiver1.jpeg';
import web2 from '../../../assets/caregiver2.jpeg';
// style
import './About.css';

export default function About() {
  return (
    <>
      <Common
        name="ABOUT "
        imgSrc={web}
        imgSrc1={web1}
        imgSrc2={web2}
        visit="/contact"
        btName="Contact Now"
        imgStyle={{ borderRadius: '80px', height: '270px' }}
      />
    </>
  );
}
