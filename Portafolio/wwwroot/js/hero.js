window.addEventListener('load', function() {
    if (window.tsParticles) {
        tsParticles.load('tsparticles', {
            fullScreen: { enable: false },
            detectRetina: true,
            fpsLimit: 60,
            particles: {
                number: { value: 50, density: { enable: true, area: 800 } },
                color: { value: ['#7dd3fc', '#fbcfe8', '#fca5a5'] },
                shape: { type: 'circle' },
                opacity: { value: 0.7 },
                size: { value: { min: 1, max: 3 } },
                links: { enable: true, distance: 150, color: '#5b7083', opacity: 0.25, width: 1 },
                move: { enable: true, speed: 1.2, outModes: { default: 'out' } }
            },
            interactivity: {
                events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' } },
                modes: { grab: { distance: 200, links: { opacity: .4 } }, push: { quantity: 4 } }
            },
            background: { color: 'transparent' }
        });
    }
});
