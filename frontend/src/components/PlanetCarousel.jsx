import React from "react";
import { Carousel } from "react-carousel3/dist/esm";

import Eris from "./planets/Eris";
import Haumea from "./planets/Haumea";
import Icy from "./planets/Icy";
import Jupiter from "./planets/Jupiter";
import Xantheus from "./planets/Xantheus";
import Venus from "./planets/Venus";
import Moon from "./planets/Moon";
import BlackHole from "./planets/BlackHole";

export default function PlanetCarousel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: 1000,
        marginTop: -50,
      }}
    >
      <Carousel width={2500} yOrigin={200} yRadius={200} autoPlay={false}>
        <div key={1}>
          <Eris />
        </div>
        <div key={2}>
          <Haumea />
        </div>
        <div key={3}>
          <Icy />
        </div>
        <div key={4}>
          <Jupiter />
        </div>
        <div key={5}>
          <BlackHole />
        </div>
        <div key={6}>
          <Xantheus />
        </div>
        <div key={7}>
          <Moon />
        </div>
        <div key={8}>
          <Venus />
        </div>
      </Carousel>
    </div>
  );
}
