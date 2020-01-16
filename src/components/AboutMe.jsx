import React from 'react';
import Photo from '../photos/Profile-smile.JPG';

const AboutMe = () => {
    return (
        <div class='AboutMe'>
            <h2 className="title">Doug Caswell</h2>
            <div className="flex">
                <img src={Photo} alt="Profile" />
                <p className="text">
                    First and foremost, I am a husband and father.  I also like playing games, eating food, swing-dancing, and riding my Ripstik.  I thought that I was going to make my career in Recreation Management, but then I realized that I needed somthing better to provide for my family.  I turned to coding to have a better career and for me, it is.  I've always loved learning, now I have a career where I will never stop learning.  It is very fulfilling and I am excited to learn and grow my skills as a developer even more.
            </p>
            </div>
        </div>
    );
}

export default AboutMe;