import React from 'react';
import { motion } from 'framer-motion';

const SkillsCard = ({ skills }) => {
  
  return (
    <div>
      <p>
        {skills.name}
      </p>
      
      <svg width="330" height="15" viewBox="0 0 330 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="147.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="77.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="217.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="287.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="42.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="182.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="112.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="252.5" cy="7.5" r="7.5" fill="#0C101E"/>
        <circle cx="322.5" cy="7.5" r="7.5" fill="#0C101E"/>
      </svg>

    </div>
  );
};

export default SkillsCard;