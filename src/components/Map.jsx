import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [10, 10, 0],
        center: [-50, -10],
        scale: 1200
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#201f1f"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-48.93, -23.10]}
        dx={-90}
        dy={-60}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 2,
          strokeLinecap: "butt"
        }}
      >
        <text x="-18" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"Avaré, SP"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
