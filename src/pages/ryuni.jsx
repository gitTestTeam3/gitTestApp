import React from "react";

const ryuni = () => {
  return (
    <div>
      <h1>료니는 귀여워</h1>
      <button>추천</button>

      <button
        onClick={() => {
          ryuni();
        }}
      >
        반대
      </button>
      const [ryoni, setRyoni] = useState("")

    </div>
  );
};

export default ryuni;
