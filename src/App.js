import React from 'react';
import ResponsiveImage from './components/ResponsiveImage';
import './App.css';

const images = [
    {
        image: 'images/sfo-1600_large.jpg',
        width: 1600
    },
    {
        image: 'images/sfo-1000_large.jpg',
        width: 1000
    },
    {
        image: 'images/sfo-800_medium.jpg',
        width: 800,
    },
    {
        image: 'images/sfo-500_small.jpg',
        width: 500,
    },
];

const App = () => {
    return (
        <div className="App">
            <ResponsiveImage images={images} />
        </div>
    );
};

export default App;
