import React, { useContext } from "react";
import { AppContext } from "../../../utils/Context";
const ChatSvgButton = () => {
  const { flag, setflag } = useContext(AppContext);

  const handleButtonClick = () => {
    setflag(!flag);
  };
  return (
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
          <g id="Group 1171279476">
            <circle
              id="Ellipse 43"
              cx="70.6667"
              cy="70.6667"
              r="70.6667"
              fill="#0084FF"
              fill-opacity="0.2"
            />
            <circle
              id="Ellipse 44"
              cx="70.1666"
              cy="71.1666"
              r="53.8413"
              transform="rotate(-0.347239 70.1666 71.1666)"
              fill="#0084FF"
              fill-opacity="0.5"
            />
            <path
              id="Vector"
              d="M86.1552 51.7831H54.6258C53.5805 51.7831 52.578 52.1983 51.8389 52.9374C51.0998 53.6765 50.6846 54.679 50.6846 55.7243V91.1949L58.5669 83.3125H86.1552C87.2005 83.3125 88.2029 82.8973 88.942 82.1582C89.6812 81.4191 90.0964 80.4166 90.0964 79.3713V55.7243C90.0964 54.679 89.6812 53.6765 88.942 52.9374C88.2029 52.1983 87.2005 51.7831 86.1552 51.7831Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default ChatSvgButton;
