import React from 'react';
import Carousel from './Carousel.jsx'
import Photo from '../photos/Profile-smile.JPG'

const Projects = () => {
    return (
        <>
            Projects
            <Carousel slides={[{ path: Photo, name: 'me' }]} />
        </>
    );
}

export default Projects;