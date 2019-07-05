// Generate a config at https://vincentgarreau.com/particles.js/

export default {
    particles: {
      number: {
        value: 60,
        density: {
          enable: false,
          value_area: 500
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.4,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 70,
          size_min: 0.5,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 40,
        direction: 'left',
        random: true,
        straight: true,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 300,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };
  