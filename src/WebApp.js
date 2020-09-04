import * as React from "react";
import ParticleImage, { ParticleOptions } from "react-particle-image";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#61dafb"
};

function webapp() {
  return (
    <ParticleImage
      src={"/react-logo.png"}
      scale={0.75}
      entropy={20}
      maxParticles={4200}
      particleOptions={particleOptions}
    />
  );
}

export default webapp;