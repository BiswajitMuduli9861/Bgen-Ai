import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Fira Mono, monospace",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Matrix Rain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg width="100vw" height="100vh" style={{ display: "block" }}>
          <g>
            {[...Array(30)].map((_, i) => (
              <text
                key={i}
                x={Math.random() * window.innerWidth}
                y={Math.random() * window.innerHeight}
                fill="#43e7fe"
                fontSize="1.2rem"
                opacity={Math.random() * 0.4 + 0.2}
                style={{
                  animation: `matrix-fall ${2 + Math.random() * 3}s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                {Array(8)
                  .fill(0)
                  .map(
                    () =>
                      "01"[Math.floor(Math.random() * 2)]
                  )
                  .join("")}
              </text>
            ))}
          </g>
          <style>
            {`
              @keyframes matrix-fall {
                0% { transform: translateY(-40px);}
                100% { transform: translateY(100vh);}
              }
            `}
          </style>
        </svg>
      </div>
      {/* Glitch 404 */}
      <div
        style={{
          fontSize: "7rem",
          fontWeight: 900,
          letterSpacing: "10px",
          color: "#43e7fe",
          position: "relative",
          zIndex: 1,
          marginBottom: "-0.1em",
          userSelect: "none",
          textShadow:
            "2px 0 #a259f7, -2px 0 #43e7fe, 0 2px #a259f7, 0 -2px #43e7fe, 0 0 40px #43e7fe",
        }}
      >
        <span style={{ position: "relative" }}>
          4
          <span
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              color: "#a259f7",
              opacity: 0.5,
              transform: "translate(3px, 2px)",
              pointerEvents: "none",
              filter: "blur(1px)",
            }}
          >
            4
          </span>
        </span>
        <span style={{ color: "#fff", textShadow: "0 0 20px #43e7fe" }}>0</span>
        <span style={{ position: "relative" }}>
          4
          <span
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              color: "#43e7fe",
              opacity: 0.5,
              transform: "translate(-3px, -2px)",
              pointerEvents: "none",
              filter: "blur(1px)",
            }}
          >
            4
          </span>
        </span>
      </div>
      {/* AI Terminal Face */}
      <div
        style={{
          margin: "1.5em 0 0.5em 0",
          zIndex: 1,
          background: "#181c2f",
          borderRadius: "18px",
          boxShadow: "0 0 32px #43e7fe55",
          padding: "1.5em 2.5em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid #43e7fe",
        }}
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <rect
            x="10"
            y="10"
            width="70"
            height="70"
            rx="18"
            fill="#232946"
            stroke="#43e7fe"
            strokeWidth="3"
          />
          {/* Eyes */}
          <circle cx="32" cy="45" r="7" fill="#43e7fe" opacity="0.8" />
          <circle cx="58" cy="45" r="7" fill="#43e7fe" opacity="0.8" />
          {/* Terminal mouth */}
          <rect
            x="32"
            y="62"
            width="26"
            height="5"
            rx="2.5"
            fill="#a259f7"
            opacity="0.7"
          />
          {/* Terminal prompt */}
          <rect
            x="22"
            y="28"
            width="46"
            height="7"
            rx="3.5"
            fill="#43e7fe"
            opacity="0.18"
          />
        </svg>
        <div
          style={{
            fontFamily: "Fira Mono, monospace",
            color: "#b8c1ec",
            fontSize: "1.1rem",
            marginTop: "0.7em",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          <span style={{ color: "#43e7fe" }}>AI Terminal</span> <br />
          <span style={{ color: "#a259f7" }}>404: Command not found</span>
        </div>
      </div>
      <h1
        style={{
          fontSize: "2.1rem",
          fontWeight: 700,
          margin: "1.2em 0 0.5em 0",
          letterSpacing: "1.5px",
          zIndex: 1,
          textShadow: "0 2px 12px #43e7fe",
        }}
      >
        Oops! Page not found
      </h1>
      <p
        style={{
          fontSize: "1.15rem",
          maxWidth: 420,
          margin: "0 0 2em 0",
          color: "#b8c1ec",
          zIndex: 1,
          textShadow: "0 1px 6px #232946",
          textAlign: "center",
        }}
      >
        The AI couldn't locate this resource.<br />
        Try navigating back to the dashboard.
      </p>
      <a
        href="/"
        style={{
          padding: "0.9em 2.5em",
          background: "linear-gradient(90deg, #43e7fe 0%, #a259f7 100%)",
          color: "#181c2f",
          borderRadius: "40px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem",
          boxShadow: "0 4px 24px rgba(67,231,254,0.18)",
          transition: "all 0.2s",
          zIndex: 1,
          border: "2px solid #43e7fe",
        }}
        onMouseOver={(e) => {
          e.target.style.background =
            "linear-gradient(90deg, #a259f7 0%, #43e7fe 100%)";
          e.target.style.color = "#43e7fe";
          e.target.style.border = "2px solid #a259f7";
        }}
        onMouseOut={(e) => {
          e.target.style.background =
            "linear-gradient(90deg, #43e7fe 0%, #a259f7 100%)";
          e.target.style.color = "#181c2f";
          e.target.style.border = "2px solid #43e7fe";
        }}
      >
        Go Home
      </a>
      {/* AI chip emoji */}
      <div
        style={{
          marginTop: "3em",
          fontSize: "3.5rem",
          opacity: 0.7,
          zIndex: 1,
        }}
      >
        <span role="img" aria-label="chip">
          🧠
        </span>
      </div>
    </div>
  );
};

export default PageNotFound;
