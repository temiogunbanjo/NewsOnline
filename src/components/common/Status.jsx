import React from "react";

const Status = (props) => {
  const { value, backgroundColor, bordercolor } = props;

  return (
    <div>
      <div
        style={{
          width: "6.1vw",
          height: "26px",
          borderRadius: "12px",
          backgroundColor: { backgroundColor },
          borderColor: { bordercolor },
          borderWidth: "0.6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: "16.37px",
            color: "#F5222D",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

export default Status;

// "#FFF1F0"
// borderColor
// "#F5222D"
