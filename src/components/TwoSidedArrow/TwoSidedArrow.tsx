import React from "react";

function TwoSideArrow({ fill = "#93278f"}) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 28.53 134"}
      className={"two-sided-arrow"}
      role={"presentation"}
    >
      <g data-name="Layer 2">
        <g data-name="Layer 1-2">
          <path
            fill="none"
            stroke="#93278f"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M14.26 115.89V18.11"
          />
          <path
            d="M14.27 134c3.17-8.53 8.56-19.1 14.27-25.65l-14.27 5.17-14.26-5.16c5.71 6.55 11.11 17.12 14.26 25.64zM14.27 0c3.17 8.52 8.56 19.08 14.27 25.63l-14.27-5.16L0 25.64C5.71 19.08 11.11 8.51 14.27 0z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
}

export default TwoSideArrow;
