import React from 'react'
import Navigation from './Navigation';
import { Box} from '@mui/system';
import { Grid } from '@mui/material';

const About = () => {
  return (
    <Box>
        <Navigation/>
        <Grid container>
            <Grid item xs={12} md={12} lg={12}>
                <h2 align='center' style={{ fontSize: '2em'}}>
                📰 Welcome to News Hub 📰
                </h2>

                <p align='left' style={{
                    marginLeft:'4em',
                    marginRight:'4em',
                    fontSize:'18px'
                }}>
                At News Hub, we are committed to bringing you the most accurate, timely, and comprehensive news coverage from around the world. Our dedicated team of experienced journalists and reporters work tirelessly to deliver trustworthy information, keeping you informed and empowered in an ever-changing global landscape.
                <br/>
                <br/>
                Why Choose News Hub?
                <br/>
                <br/>
                🌐 Unrivaled Coverage: Our extensive network of correspondents spans the globe, ensuring that we never miss a crucial event or breaking news story, no matter where it happens.
                <br/>
                ⚖️ Unbiased Reporting: We pride ourselves on delivering unbiased and objective reporting. Our commitment to journalistic integrity means you can trust the information we provide.
                <br/>

                🔍 In-Depth Analysis: Beyond the headlines, we delve into the heart of the matter, providing insightful analysis and context that helps you understand the complexities of today's issues.
                <br/>

                📱 Multi-Platform Accessibility: Stay connected on-the-go with our user-friendly website and mobile app, allowing you to access the latest news anytime, anywhere.
                <br/>

                📊 Diverse Topics: From politics and finance to science, technology, and entertainment, we cover a broad spectrum of topics, catering to various interests and curiosities.
                <br/>

                🌍 Global Perspective: News Hub believes in the power of diverse perspectives. Our coverage reflects the cultural, social, and political nuances that shape the world we live in.
                <br/>

                🕑 Real-Time Updates: With our real-time news updates, you'll never miss a crucial moment or breaking development, ensuring you're always one step ahead.
                <br/>

                Join our ever-growing community of informed readers, and let News Hub be your trusted companion on the journey of staying informed in today's fast-paced world. 
                <br/>
                Thank you for choosing us as your news source!
                <br/>

                Stay informed, stay empowered.
                <br/>

                News Hub Team
                </p>
            </Grid>
        </Grid>
    </Box>
  )
}

export default About;