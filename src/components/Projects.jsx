import React from 'react';
import Carousel from './Carousel.jsx';
import Tm1 from '../photos/Tm1.png';
import Tm2 from '../photos/Tm2.png';
import Tm3 from '../photos/Tm3.png';
import Sos1 from '../photos/Sos1.png';
import Sos2 from '../photos/Sos2.png';
import Sos3 from '../photos/Sos3.png';
import S1 from '../photos/S1.png';
import S2 from '../photos/S2.png';
import S3 from '../photos/S3.png';
import S4 from '../photos/S4.png';

const Projects = () => {
    return (
        <div className='Projects'>
            <div className='project teamManager'>
                <h2 className='title'>Team Manager</h2>
                <Carousel slides={[{ path: Tm1, name: 'Login' }, { path: Tm2, name: 'Profile' }, { path: Tm3, name: 'Events' }]} />
                <p className='description'>
                    React | Node | HTML | CSS | Javascript | PostgreSQL | Express | Massive | Socket.io | NodeMailer | Cloudinary | Bcrypt | Axios | Session
                    <br />
                    <br />
                    Team Manager is a web application designed to make it easy to keep track of team information. The basic tech stack used to create this is React, HTML, and CSS for the front-end, node with express for the server, and PostgreSQL for the database. Used Bcrypt with Session for authentication and Socket.io for chat rooms. Profile pictures were added with the Cloudinary widget.
                    <br />
                    <br />
                    To try it out, use 'test' or 'test2' as the email and 'pass' as the password.

                    Hosted at www.teammanager.dougcaswell.com.

                    See code at https://github.com/DougCaswell/Team-Manager-Personal-Project.
                </p>
            </div>
            <div className='project seedsOfSuccess'>
                <h2 className='title'>Seeds of Success</h2>
                <Carousel slides={[{ path: Sos1, name: 'Login' }, { path: Sos2, name: 'Garden' }, { path: Sos3, name: 'Landing Page' }]} />
                <p className='description'>
                    React | Node | HTML | Styled Components | CSS | JavaScript | PostgreSQL | Express | Massive | Bcrypt | Axios | Session
                    <br />
                    <br />
                    Seeds of Success is a web application designed to make it easy to plan a garden.  In it, the user can create a project and place plants as if designing their own backyard.  This project was created with a team of 4 developers.  The basic stack is the same as what I used with Team Manager, but with Styled-Components making up most of the styling of the app.  Lodash's debounce function was added to improve a hovering effect.
                    <br />
                    <br />
                    Hosted at www.seedsofsuccess.dougcaswell.com.
                    <br />
                    <br />
                    See code at https://github.com/seeds-of-success-1/seeds-of-success.
                </p>
            </div>
            <div className='project slotify'>
                <h2 className='title'>Slotify</h2>
                <Carousel slides={[{ path: S4, name: 'Login' }, { path: S2, name: 'Home' }, { path: S1, name: 'Album' }, { path: S3, name: 'Artist' }]} />
                <p className='description'>
                    HTML | CSS | PHP | Javascript | JQuery | MySQL
                    <br />
                    <br />
                    Slotify is a Spotify clone created in an attempt to better understand PHP and to try out JQuery.  From this I gained a basic understanding of PHP and JQuery, though I still prefer React.
                    <br />
                    <br />
                    In Slotify, users can create/edit a profile, browse/play music, create/delete playlists, and add/remove songs to/from playlists.  XAMMP was used while building Slotify for local hosting and MySQL database hosting.
                    <br />
                    <br />
                    See code at https://github.com/DougCaswell/Slotify
                </p>
            </div>
            <div className='footerSpace'></div>
        </div>
    );
}

export default Projects;