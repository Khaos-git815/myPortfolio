import React from 'react';
import { Box, VStack, Heading, Text, Flex, Icon, Center } from '@chakra-ui/react';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiMysql, SiFigma, SiExpress } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import FullScreenSection from './FullScreenSection';

const categorizedSkills = {
  Frontend: [
    { name: 'HTML/CSS', icon: FaHtml5, description: 'Crafted responsive and visually appealing websites using HTML5 and CSS3.' },
    { name: 'JavaScript', icon: DiJavascript1, description: 'Developed interactive web applications utilizing modern JavaScript ES6+.' },
    { name: 'React', icon: FaReact, description: 'Developed SPA with React, including state management with Redux and UIs with Material-UI.' },
    { name: 'Figma', icon: SiFigma, description: 'Designed UI/UX layouts and prototypes for web applications.' }
  ],
  Backend: [
    { name: 'Node.js', icon: FaNodeJs, description: 'Built RESTful APIs using Express, handling database operations, authentication, and logging.' },
    { name: 'Express.js', icon: SiExpress, description: 'Developed server-side logic and APIs using Express framework.' },
    { name: 'Python', icon: FaPython, description: 'Scripted efficient, reusable, and modular code in Python for various backend tasks.' },
    { name: 'Django', icon: SiDjango, description: 'Developed robust web applications with Django, focusing on rapid development and clean, pragmatic design.' }
  ],
  CloudServices: [
    { name: 'AWS', icon: FaAws, description: 'Deployed and managed applications using EC2, S3, Lambda, and RDS for a scalable cloud architecture.' },
    // { name: 'Docker', icon: FaDocker, description: 'Containerized applications using Docker for consistent development, delivery, and deployment.' }
  ],
  Databases: [
    { name: 'MongoDB', icon: SiMongodb, description: 'Utilized MongoDB for storing and querying data efficiently in JSON-like documents.' },
    { name: 'MySql', icon: SiMysql, description: 'Managed relational databases and performed complex queries with MySQL.' }
  ],
  VersionControl: [
    { name: 'Git', icon: FaGitAlt, description: 'Managed source code versions and collaborated with teams using Git.' }
  ]
};

const SkillsComponent = () => {
  return (
    <FullScreenSection
      backgroundColor="hsl(39, 18%, 97%)"
      color="hsl(210, 22%, 49%)"
      p={8}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" color="hsl(210, 22%, 49%)" id="skills-section">
        Skills
      </Heading>
      {Object.entries(categorizedSkills).map(([category, skills]) => (
        <Box key={category} w="full">
          <Center>
            <Heading size="md" my={4}>{category}</Heading>
          </Center>
          <Flex justify="center" wrap="wrap">
            {skills.map(skill => (
              <VStack key={skill.name} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2} align="center">
                <Icon as={skill.icon} w={6} h={6} color="blue.500" />
                <Text fontWeight="bold">{skill.name}</Text>
                <Text fontSize="sm" textAlign="center">{skill.description}</Text>
              </VStack>
            ))}
          </Flex>
        </Box>
      ))}
    </FullScreenSection>
  );
};

export default SkillsComponent;
