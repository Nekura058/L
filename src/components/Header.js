import React from 'react';

const Header = () => {
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a></li>
                    <li><a href="#our-story" onClick={(e) => handleClick(e, 'our-story')}>Our Story</a></li>
                    <li><a href="#gallery" onClick={(e) => handleClick(e, 'gallery')}>Gallery</a></li>
                    <li><a href="#why-i-love-you" onClick={(e) => handleClick(e, 'why-i-love-you')}>Why I Love You</a></li>
                    <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
