import React, { useState } from 'react';
import '../styles/gallery.css';

const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
];

const Gallery = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const imagesPerPage = 9;

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - imagesPerPage, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + imagesPerPage, images.length - imagesPerPage)
        );
    };

    const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="gallery" className="section">
            <h2>Gallery</h2>
            <div className="gallery">
                {currentImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Memory ${startIndex + index + 1}`}
                        onClick={() => setSelectedImage(src)}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
            </div>
            <div className="gallery-navigation">
                <button onClick={handlePrev} disabled={startIndex === 0}>
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={startIndex + imagesPerPage >= images.length}
                >
                    Next
                </button>
            </div>
            {selectedImage && (
                <div
                    className="modal-overlay"
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                >
                    <img
                        src={selectedImage}
                        alt="Full display"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            borderRadius: '10px',
                            boxShadow: '0 0 20px rgba(255,255,255,0.5)',
                        }}
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;
