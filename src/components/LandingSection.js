import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import myImage from '../images/me.jpg';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-scroll';

const greeting = 'Hello, I am Khaos!';
const bio1 = 'Web Developer & Certified AWS';
const bio2 = "Practitioner - Let's Build Something Fun";

const LandingSection = () => (
  <FullScreenSection
    justifyContent='center'
    alignItems='center'
    backgroundColor='#f4f4f4'
    fontFamily='Montserrat, sans-serif'
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems='center'>
        <Avatar src={myImage} size='2xl' name='Kirill' />
        <Heading as='h4' size='md' color='hsl(210, 22%, 49%)' noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={8}>
        <Heading
          as='h1'
          size='2xl'
          color='hsl(210, 22%, 49%)'
          fontFamily='Montserrat, sans - serif'
          noOfLines={1}
          lineHeight={1.3}
        >
          {bio1}
        </Heading>
        <Heading
          as='h1'
          size='2xl'
          color='hsl(210, 22%, 49%)'
          fontFamily='Montserrat, sans - serif'
          noOfLines={1}
          lineHeight={1.3}
        >
          {bio2}
        </Heading>
        <Button
          as={Link}
          to='contact-section'
          smooth={true}
          duration={500}
          colorScheme='purple'
          fontFamily='Montserrat, sans - serif'
          size='lg'
        >
          Contact Me
        </Button>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
