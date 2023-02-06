import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import star from "../assets/star.png";

const options = {
  particles: {
    fullScreen: {
      enable: false,
    },
    color: {
      value: "#fff",
    },
    move: {
      direction: "bottom-right",
      enable: true,
      outModes: "out",
      speed: 5,
      angle: {
        offset: 0,
        value: 10,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 5,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "image",
      image: {
        src: star,
        width: 100,
        height: 10,
      },
    },
    rotate: {
      value: 218,
      direction: "clockwise",
    },
    size: {
      value: 100,
    },
    zIndex: {
      value: {
        min: 0,
        max: 100,
      },
    },
  },
};

function Stars() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return <Particles id="tsparticles" options={options} init={particlesInit} />;
}

export default Stars;
