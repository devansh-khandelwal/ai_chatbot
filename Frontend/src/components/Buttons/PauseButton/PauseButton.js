import React, { useContext } from "react";
import "./PauseButton.css";
import { AppContext } from "../../../utils/Context";

const PauseSvgButton = () => {
  const { cancel } = useContext(AppContext);
  const handleButtonClick = () => {
    cancel();
  };

  return (
    <div className="pause_btn">
      <button
        onClick={handleButtonClick}
        style={{ border: "none", background: "none", cursor: "pointer" }}
      >
        <div>
          <svg
            width="80"
            height="80"
            viewBox="0 0 142 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              id="Ellipse 43"
              cx="71.1559"
              cy="70.6667"
              r="70.6667"
              fill="#0084FF"
              fill-opacity="0.2"
            />
            <svg
              x="15"
              y="15"
              width="109"
              height="109"
              viewBox="0 0 109 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="Ellipse 44"
                cx="54.8082"
                cy="54.6663"
                r="53.8413"
                transform="rotate(-0.347239 54.8082 54.6663)"
                fill="#0084FF"
                fill-opacity="0.5"
              />
              <svg
                x="25"
                y="25"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon-pause">
                  <g id="Shape">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.4698 7.23499C13.1378 7.23499 12.0581 8.31473 12.0581 9.64665V48.2333C12.0581 49.5652 13.1378 50.645 14.4698 50.645H24.1164C25.4484 50.645 26.5281 49.5652 26.5281 48.2333V9.64665C26.5281 8.31473 25.4484 7.23499 24.1164 7.23499H14.4698ZM16.8814 45.8217V12.0583H21.7048V45.8217H16.8814Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.7631 7.23499C32.4312 7.23499 31.3514 8.31473 31.3514 9.64665V48.2333C31.3514 49.5652 32.4312 50.645 33.7631 50.645H43.4098C44.7417 50.645 45.8214 49.5652 45.8214 48.2333V9.64665C45.8214 8.31473 44.7417 7.23499 43.4098 7.23499H33.7631ZM36.1748 45.8217V12.0583H40.9981V45.8217H36.1748Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </svg>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default PauseSvgButton;
