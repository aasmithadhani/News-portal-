import React from 'react'
import { Box } from '@mui/system'
import { Grid,Container } from '@mui/material'
import Navigation from './Navigation'
import Faq from "react-faq-component";



const data = {
    title: "FAQ's Section",
    rows: [
      {
        title: "What is News Hub?",
        content: `News Hub is a leading online platform that provides comprehensive news coverage, offering the latest updates and in-depth analysis on a wide range of topics from around the world. Our dedicated team of journalists and reporters work tirelessly to deliver unbiased and reliable news to our readers.`,
      },
      {
        title:
          "Is News Hub a free service?",
        content:
          "Yes, accessing News Hub and reading our news articles is entirely free. We believe that reliable information should be accessible to everyone, and we are committed to providing quality journalism without any subscription fees.",
      },
      {
        title: "How often is the website updated?",
        content: `We strive to keep our readers up-to-date with the latest news as it happens. Our website is constantly updated throughout the day, ensuring you have real-time access to breaking news and developing stories.`,
      },
      {
        title: "Can I trust the information published on News Hub",
        content: `Absolutely! At News Hub, we prioritize accuracy, objectivity, and journalistic integrity. Our team follows a stringent fact-checking process, verifying information from multiple credible sources before publishing any news. You can rely on us to provide trustworthy and unbiased reporting.`,
      },
      {
        title: "How can I subscribe to receive news alerts?",
        content: `There is no need to be scared by the word 'interview'. Just be yourself and present what you know. We won't ask difficult stuff or algorithms or anything. Be well versed with the projects or courses that you have done. `,
      },
      {
        title: "How do I contact the editorial team or provide feedback?",
        content: `We welcome your feedback and value your input. To contact our editorial team or provide feedback, you can visit our "Contact Us" page on the website, where you will find various ways to get in touch with us.`,
      },
      {
        title:
          "Does News Hub have a mobile app?",
        content: `If you do not get a response right away, wait till the interviewer’s deadline has passed. If you still do not hear anything, send a brief follow up note and remind the interviewer that how you fit the position well and your interest in the role.
  
        You should follow-up 2 more times with an interval of 7-10 days each. If you still do not get a response, you should move on.`,
      },
    ],
  };

  const styles = {
    titleTextColor: "#5D3FD3",
    rowTitleColor: "#5D3FD3",
  };
  

 const Faqs = () => {
  return (
    <Box>
        <Navigation/>
        <Container>
        <Grid container>
            <Grid
            item
            sm={12}
            md={12}
            sx={{
                margin: "15px",
            }}
            >
            <Faq data={data} styles={{
                    titleTextColor: "#5D3FD3",
                    rowTitleColor: "#5D3FD3"
                }}  />
            </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Faqs