import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import WhyILoveYou from './components/WhyILoveYou';
import './styles/main.css';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <main>
                <OurStory />
                <Gallery />
                <WhyILoveYou />
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
