import React from "react";
import TrafficLight from "./TrafficLight";

//create your first component
export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
      <TrafficLight />
    </main>
  );
}
