import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'Weather-WhisperAp',
    description:
      'Weather Whisper is a web-based application designed to provide users with real-time weather information. This AWS Edition showcases the full migration and optimization of the application within the AWS Cloud. Skills: HTML, CSS, and JavaScript, API, AWS, S3, Lambda, API Gateway, DynamoDB, CloudFront, Route 53, CloudWatch.',
    getImageSrc: () => require('../images/Project1WheatherApp.png'),
    url: 'https://linear.app',
  },
  {
    title: 'Pawfect-Match',
    description:
      'Pawfect Match strives to solve this problem by streamlining the pet adoption process. By providing a comprehensive list of pets available for adoption online, potential pet owners can save themselves the hassle of visiting their local animal shelter. Skills: HTML, CSS, JavaScript, API, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Heroku, MVC Git, GitHub.',
    getImageSrc: () => require('../images/PawfectmatchProject2.png'),
    url: 'https://www.aspca.org',
  },
  {
    title: 'ThoughtThrive',
    description:
      'ThoughtThrive Blog App is a full-featured blogging platform designed to provide a seamless experience for users to create, share, and interact with blog content. It aims to empower users with a friendly interface and provide a space for open communication and content sharing. Skills: HTML, CSS, JavaScript, API, Node.js, Express.js, Heroku, Git, GitHub.',
    getImageSrc: () => require('../images/Thought-ThriveProject3.png'),
    url: 'https://pinchofyum.com ',
  },
  {
    title: 'Note-Me',
    description:
      'Note Taker App is a dynamic web application designed to allow users to quickly and easily jot down notes, save them for future reference, and manage them by viewing or deleting as needed. It employs an Express.js backend and saves and retrieves note data from a JSON file, ensuring that your notes are preserved. Skills: HTML, CSS, JavaScript, Node.js, Express.js, Heroku, Git, GitHub.',
    getImageSrc: () => require('../images/NoteMeProject4.png'),
    url: ': https://realworld.io',
  },
  {
    title: 'book-store',
    description:
      'book-store is a MERN stack application that allows users to search for books using the Google Books API, save their favorite books, and manage their collection. This app demonstrates proficiency in HTML/CSS, JavaScript, MongoDB, Express.js, React, and Node.js (MERN) with a GraphQL API made with Apollo Server. The app is deployed on Heroku and uses MongoDB Atlas for data storage.',
    getImageSrc: () => require('../images/bookstore.png'),
    url: 'https://askme-mern.herokuapp.com',
  },
  {
    title: 'Sales Dashboard',
    description:
      'Ocean Wave is a sales dashboard that functions as a centralized platform for monitoring and analyzing various facets of your sales operations, including products, customers, transactions, and performance metrics.Crafted with a user-centric approach, our dashboard provides an intuitive and visually appealing interface. It goes beyond mere data presentation; it focuses on creating an immersive experience that facilitates informed, data-driven decision-making. Skills: HTML, CSS, JavaScript, API, Node.js, Express.js, React, Express.js, MongoDB, MySQL, Apollo GraphQL, Render, GitHub.',
    getImageSrc: () => require('../images/3.png'),
    url: ' https://basecamp.com',
  },
  {
    title: 'Little Lemon',
    description:
      'Little Lemon is a restaurant application designed to provide users with an exceptional dining experience through a user-friendly interface. The app allows users to browse the menu, make online reservations, and order food for delivery or pickup. Skills: HTML, CSS, JavaScript, API, Node.js, React, Netlify, GitHub.',
    getImageSrc: () => require('../images/home-page.png'),
    url: ' https://littlelemon.netlify.app/',
  },
  {
    title: 'Portfolio React SPA',
    description:
      "PortfolioWebDev is a personal portfolio website, built using React, showcasing web development projects and skills. It's designed as a single-page application (SPA) and highlights proficiency in front-end technologies, including extensive use of React, and experience with AWS cloud solutions. The portfolio features a modern, responsive design for an optimal user experience on various devices.",
    getImageSrc: () => require('../images/portfoliowebdev(SPA).png'),
    url: 'https://portfolio-webdev-react.netlify.app',
  },
  {
    title: 'Management App',
    description:
      "The Employee Management System is a web application designed to help organizations manage their employees efficiently. It allows for easy tracking of employee information, departmental data, and facilitates communication through email functionality. This project is particularly useful for HR departments and team leaders looking to streamline their operations. While the project is still in development, it showcases the potential for significant productivity improvements within any organizational structure.",
    getImageSrc: () => require('../images/employeespage.png'),
    url: 'https://jekyllrb.com',
  },
  {
    title: 'Blog-tech',
    description:
      "Blog-tech is a simple and efficient blogging application built using Python and Django, and it integrates with AWS RDS MySQL for database management. This application allows users to register, log in, create, update, and remove blog posts. It is designed to provide a seamless user experience for blogging enthusiasts who need a straightforward platform for their writing needs.",
    getImageSrc: () => require('../images/main_page.png'),
    url: 'https://mashable.com/tech ',
  },
  {
    title: 'Little Lemon API',
    description:
      "The Little Lemon API is a RESTful web service built with Django and Django REST Framework. This API serves as the backend for the Little Lemon application, providing endpoints for managing menu items, categories, orders, and user roles. It is designed to support various user roles including admins, managers, delivery crew, and customers, each with specific functionalities and permissions.",
    getImageSrc: () => require('../images/LittleLemonDRF.png'),
    url: 'https://little-lemon-api.onrender.com/api',
  },
  {
    title: 'Little Lemon Django and PostgreSQL',
    description:
      "Little Lemon is a restaurant application designed to provide users with an exceptional dining experience through a user-friendly interface. The app allows users to browse the menu, make online reservations, and order food for delivery or pickup. The backend is powered by Django and PostgreSQL, and it includes features such as dynamic rendering of menu items and form submission with validation.Skills demonstrated include Django, JavaScript, HTML, CSS, API integration, PostgreSQL, and deployment on Heroku.",
    getImageSrc: () => require('../images/LittleLemon_MainPage.png'),
    url: 'https://pinchofyum.com ',
  },
  {
    title: 'KI-Expense Tracker',
    description:
      "KI-ExpenseTracker is a comprehensive expense tracking web application designed for the book distribution company, Rumi Press. This application allows users to track their income and expenses, categorize their financial data, and visualize their spending habits through various charts and reports. Built with Django, Python, and Bootstrap, the app ensures a user-friendly and responsive design. Key skills used include Django, Python, HTML, CSS, JavaScript, Chart.js,for the front end, and MySQL for database management Heroku for deployment.",
    getImageSrc: () => require('../images/dashboard.png'),
    url: 'https://ki-expense-tracker.onrender.com',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor='#f4f4f4'
      isDarkBackground
      p={8}
      alignItems='center'
      spacing={8}
    >
      <Heading as='h1' color='hsl(210, 22%, 49%)' id='projects-section'>
        Projects
      </Heading>
      <Box
        display='grid'
        gridTemplateColumns='repeat(2,minmax(0,1fr))'
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
