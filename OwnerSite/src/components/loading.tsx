const Loading = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <div className="w-screen h-screen bg-white fixed z-100">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="h-10 flex items-center justify-center w-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle
              fill="#000000"
              stroke="#000000"
              stroke-width="2"
              r="15"
              cx="40"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2.3"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4"
              ></animate>
            </circle>
            <circle
              fill="#000000"
              stroke="#000000"
              stroke-width="2"
              r="15"
              cx="100"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2.3"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2"
              ></animate>
            </circle>
            <circle
              fill="#000000"
              stroke="#000000"
              stroke-width="2"
              r="15"
              cx="160"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2.3"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0"
              ></animate>
            </circle>
          </svg>
        </div>
      </div>
    )
  );
};

export default Loading;
