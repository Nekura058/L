import React, { useState } from 'react';

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>To My Dearest</h1>
                <p>Every moment with you is a treasure. This website is a small token of my love and appreciation, my lovely mal</p>
            </div>
            <div className="hero-image">
                <img
                    src="/neko.jpg"
                    alt="Romantic moment"
                    onClick={openModal}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            {showModal && (
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
                        src="/neko.jpg"
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

export default Hero;
