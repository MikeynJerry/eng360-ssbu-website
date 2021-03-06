import React from 'react'
import { connect } from 'react-redux'
import './Icons.css'

export const LeftJoyconIcon = ({
  override,
  color = 'gray',
  stickUpSlow,
  stickUpFast,
  stickLeftSlow,
  stickLeftFast,
  stickRightSlow,
  stickRightFast,
  stickDownSlow,
  stickDownFast,
  pressLeftTrigger
}) => (
  <div className="left-joycon" style={override}>
    {(stickUpFast || stickUpSlow) && (
      <div
        className={`triangle up ${stickUpFast ? 'fast' : ''} ${
          stickUpSlow ? 'slow' : ''
        }`}
      />
    )}
    {(stickLeftFast || stickLeftSlow) && (
      <div
        className={`triangle left ${stickLeftFast ? 'fast' : ''} ${
          stickLeftSlow ? 'slow' : ''
        }`}
      />
    )}
    {(stickRightFast || stickRightSlow) && (
      <div
        className={`triangle right ${stickRightFast ? 'fast' : ''} ${
          stickRightSlow ? 'slow' : ''
        }`}
      />
    )}
    {(stickDownFast || stickDownSlow) && (
      <div
        className={`triangle down ${stickDownFast ? 'fast' : ''} ${
          stickDownSlow ? 'slow' : ''
        }`}
      />
    )}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="133"
      height="410.309"
      viewBox="0 0 3525.34 10856"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd">
      <defs>
        <linearGradient
          id="id0"
          gradientUnits="userSpaceOnUse"
          x1="24221.1"
          y1="6309.94"
          x2="23217.9"
          y2="5435.36">
          <stop offset="0" stopColor="#2b2c2e" />
          <stop offset="1" stopColor="#949ea5" />
        </linearGradient>
        <linearGradient
          id="id1"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="24345.9"
          y1="6418.72"
          x2="23093.1"
          y2="5326.58"
        />
        <linearGradient
          id="id2"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="2472.25"
          y1="3214.63"
          x2="1219.51"
          y2="2122.49"
        />
        <linearGradient
          id="id3"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="2347.48"
          y1="3105.85"
          x2="1344.28"
          y2="2231.27"
        />
      </defs>
      <g id="Capa_x0020_1">
        <g id="_2497485212656">
          <path
            className={`fil0 str0 clickable ${
              pressLeftTrigger ? 'flashing-bumper' : ''
            }`}
            d="M0 2317c0,-1274 1043,-2317 2317,-2317l0 2317 -2317 0z"
          />
          <path
            className={`fil3 str0 ${color}`}
            d="M2354 77l1228 0 0 10779 -1228 0c-1257,0 -2286,-1029 -2286,-2286l0 -6207c0,-1257 1029,-2286 2286,-2286z"
          />
          <rect
            className="fil4 str0 clickable"
            x="2735"
            y="949"
            width="566"
            height="201"
          />
          <circle className="fil5 str1" cx="1846" cy="2669" r="841" />
          <circle className="fil6 str1" cx="1846" cy="2669" r="674" />
          <circle className="fil8 str0 clickable" cx="1915" cy="4859" r="392" />
          <circle className="fil8 str0 clickable" cx="2793" cy="5669" r="392" />
          <circle className="fil8 str0 clickable" cx="1920" cy="6489" r="392" />
          <circle className="fil8 str0 clickable" cx="1084" cy="5674" r="392" />
          <polygon
            className="fil9 str0 clickable"
            points="1915,4693 1987,4818 2059,4943 1915,4943 1770,4943 1842,4818"
          />
          <polygon
            className="fil9 str0 clickable"
            points="2960,5669 2835,5741 2710,5813 2710,5669 2710,5525 2835,5597"
          />
          <polygon
            className="fil9 str0 clickable"
            points="917,5674 1042,5602 1167,5530 1167,5674 1167,5819 1042,5746"
          />
          <polygon
            className="fil9 str0 clickable"
            points="1920,6656 1848,6531 1776,6406 1920,6406 2064,6406 1992,6531"
          />
          <rect
            className="fil8 str0 clickable"
            x="2184"
            y="7375"
            width="667"
            height="667"
            rx="53"
            ry="53"
          />
          <circle
            className="fil10 str2 clickable"
            cx="2517"
            cy="7709"
            r="217"
          />
          <line
            className="fil10 str1"
            x1="1846"
            y1="3342"
            x2="1846"
            y2="3510"
          />
          <line
            className="fil10 str1"
            x1="1005"
            y1="2669"
            x2="1172"
            y2="2669"
          />
          <line
            className="fil10 str1"
            x1="1846"
            y1="1995"
            x2="1846"
            y2="1827"
          />
          <line
            className="fil10 str1"
            x1="2520"
            y1="2669"
            x2="2687"
            y2="2669"
          />
        </g>
      </g>
    </svg>
  </div>
)

export const SwitchIcon = ({ override, video }) => (
  <div className="switch" style={override}>
    <video
      className="video2"
      width={556.79}
      height={313.58}
      loop="loop"
      preload="auto"
      autoPlay="autoplay">
      <source src={video} type="video/mp4" />
    </video>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="700"
      height="410.309"
      viewBox="3600 0 18467.1375 10856"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd">
      <defs>
        <linearGradient
          id="id0"
          gradientUnits="userSpaceOnUse"
          x1="24221.1"
          y1="6309.94"
          x2="23217.9"
          y2="5435.36">
          <stop offset="0" stopColor="#2b2c2e" />
          <stop offset="1" stopColor="#949ea5" />
        </linearGradient>
        <linearGradient
          id="id1"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="24345.9"
          y1="6418.72"
          x2="23093.1"
          y2="5326.58"
        />
        <linearGradient
          id="id2"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="2472.25"
          y1="3214.63"
          x2="1219.51"
          y2="2122.49"
        />
        <linearGradient
          id="id3"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="2347.48"
          y1="3105.85"
          x2="1344.28"
          y2="2231.27"
        />
      </defs>
      <g id="Capa_x0020_1">
        <g id="_2497485212656">
          <path
            className="fil0 str0"
            d="M4020 77l17732 0c0,209 154,385 355,418l0 10361 -18511 0 0 -10356c233,0 424,-190 424,-423z"
          />
          <path
            className="fil1 str0"
            d="M4398 421l17055 0c124,0 225,101 225,225l0 9498c0,124 -101,225 -225,225l-1057 0 0 -96c0,-59 -48,-106 -106,-106l-648 0c-58,0 -106,47 -106,106l0 96 -9484 0 0 -243c0,-80 -84,-146 -189,-146 -104,0 -188,66 -188,146l0 243 -3360 0 0 -96c0,-59 -48,-106 -106,-106l-648 0c-59,0 -106,47 -106,106l0 96 -1057 0c-124,0 -225,-101 -225,-225l0 -9498c0,-124 101,-225 225,-225z"
          />
          <rect
            className="fil2 str0"
            x="5485"
            y="1204"
            width="14732"
            height="8297"
          />
        </g>
      </g>
    </svg>
  </div>
)

export const RightJoyconIcon = ({
  override,
  color = 'gray',
  pressA,
  pressB,
  pressY,
  pressX,
  pressRightTrigger
}) => (
  <div className="right-joycon" style={override}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="133"
      height="410.309"
      viewBox="22090 0 3525.34 10856"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd">
      <defs>
        <linearGradient
          id="id0"
          gradientUnits="userSpaceOnUse"
          x1="24221.1"
          y1="6309.94"
          x2="23217.9"
          y2="5435.36">
          <stop offset="0" stopColor="#2b2c2e" />
          <stop offset="1" stopColor="#949ea5" />
        </linearGradient>
        <linearGradient
          id="id1"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="24345.9"
          y1="6418.72"
          x2="23093.1"
          y2="5326.58"
        />
        <linearGradient
          id="id2"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="2472.25"
          y1="3214.63"
          x2="1219.51"
          y2="2122.49"
        />
        <linearGradient
          id="id3"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="2347.48"
          y1="3105.85"
          x2="1344.28"
          y2="2231.27"
        />
      </defs>
      <g id="Capa_x0020_1">
        <g id="_2497485212656">
          <path
            className={`fil0 str0 clickable ${
              pressRightTrigger ? 'flashing-bumper' : ''
            }`}
            d="M25453 2317c0,-1274 -1043,-2317 -2317,-2317l0 2317 2317 0z"
          />
          <path
            className={`fil3 str0 ${color}`}
            d="M22107 77l997 0c1257,0 2286,1029 2286,2286l0 6207c0,1257 -1029,2286 -2286,2286l-997 0 0 -10779z"
          />
          <circle
            className="fil7 str0 clickable"
            cx="23061"
            cy="7897"
            r="421"
          />
          <circle className="fil8 clickable" cx="23061" cy="7897" r="328" />
          <polygon
            className="fil4 str0 clickable"
            points="22953,949 22771,949 22771,766 22570,766 22570,949 22387,949 22387,1150 22570,1150 22570,1332 22771,1332 22771,1150 22953,1150"
          />
          <circle
            className={`fil8 str0 clickable ${pressX ? 'flashing-circle' : ''}`}
            cx="23673"
            cy="2074"
            r="392"
          />
          <circle
            className={`fil8 str0 clickable ${pressA ? 'flashing-circle' : ''}`}
            cx="24552"
            cy="2884"
            r="392"
          />
          <circle
            className={`fil8 str0 clickable ${pressB ? 'flashing-circle' : ''}`}
            cx="23678"
            cy="3704"
            r="392"
          />
          <circle
            className={`fil8 str0 clickable ${pressY ? 'flashing-circle' : ''}`}
            cx="22842"
            cy="2889"
            r="392"
          />
          <circle className="fil11 str1" cx="23720" cy="5873" r="841" />
          <circle className="fil12 str1" cx="23720" cy="5873" r="674" />
          <line
            className="fil10 str1"
            x1="23720"
            y1="6546"
            x2="23720"
            y2="6714"
          />
          <line
            className="fil10 str1"
            x1="22878"
            y1="5873"
            x2="23046"
            y2="5873"
          />
          <line
            className="fil10 str1"
            x1="23720"
            y1="5199"
            x2="23720"
            y2="5031"
          />
          <line
            className="fil10 str1"
            x1="24393"
            y1="5873"
            x2="24561"
            y2="5873"
          />
          <polygon
            className={`fil13 clickable ${pressY ? 'flashing-text' : ''}`}
            points="22861,3019 22824,3019 22824,2907 22727,2759 22771,2759 22843,2877 22916,2759 22958,2759 22861,2907"
          />
          <polygon
            className={`fil13 clickable ${pressX ? 'flashing-text' : ''}`}
            points="23673,2041 23735,1945 23778,1945 23695,2068 23789,2204 23743,2204 23672,2095 23602,2204 23557,2204 23650,2067 23566,1945 23611,1945"
          />
          <path
            className={`fil13 clickable ${pressA ? 'flashing-text' : ''}`}
            d="M24502 2918l97 0 -48 -121 -49 121zm-38 95l-41 0 113 -258 32 0 112 258 -41 0 -27 -63 -122 0 -26 63z"
          />
          <path
            className={`fil13 clickable ${pressB ? 'flashing-text' : ''}`}
            d="M23655 3823l45 0c31,0 64,-9 64,-45 0,-30 -21,-43 -61,-43l-48 0 0 88zm0 -119l47 0c28,0 51,-12 51,-40 0,-28 -22,-39 -57,-39l-41 0 0 79zm-36 -109l89 0c39,0 81,16 81,65 0,29 -18,49 -45,57l0 1c33,4 57,26 57,62 0,50 -43,74 -97,74l-85 0 0 -259z"
          />
          <path
            className="fil14 clickable"
            d="M23123 7995c0,9 -4,13 -12,13l-100 0c-9,0 -13,-4 -13,-13l0 -75c0,-9 4,-12 13,-12l100 0c8,0 12,3 12,12l0 75zm132 -122c-62,-53 -124,-106 -186,-158 -6,-6 -11,-6 -16,0 -63,52 -125,105 -187,158 -11,10 -7,22 8,22l24 0c9,0 13,4 13,13l0 162c0,9 3,13 12,13l275 0c9,0 13,-4 13,-13l0 -162c0,-9 3,-13 12,-13l24 0c15,0 20,-12 8,-22z"
          />
        </g>
      </g>
    </svg>
  </div>
)

const FullSwitchIcon = ({
  leftColor = 'gray',
  rightColor = 'gray',
  pressA,
  pressB,
  pressY,
  pressX,
  pressLeftTrigger,
  pressRightTrigger,
  stickUpSlow,
  stickUpFast,
  stickLeftSlow,
  stickLeftFast,
  stickRightSlow,
  stickRightFast,
  stickDownSlow,
  stickDownFast,
  video
}) => (
  <div className="full-switch">
    {(stickUpFast || stickUpSlow) && (
      <div
        className={`triangle up ${stickUpFast ? 'fast' : ''} ${
          stickUpSlow ? 'slow' : ''
        }`}
      />
    )}
    {(stickLeftFast || stickLeftSlow) && (
      <div
        className={`triangle left ${stickLeftFast ? 'fast' : ''} ${
          stickLeftSlow ? 'slow' : ''
        }`}
      />
    )}
    {(stickRightFast || stickRightSlow) && (
      <div
        className={`triangle right ${stickRightFast ? 'fast' : ''} ${
          stickRightSlow ? 'slow' : ''
        }`}
      />
    )}
    {(stickDownFast || stickDownSlow) && (
      <div
        className={`triangle down ${stickDownFast ? 'fast' : ''} ${
          stickDownSlow ? 'slow' : ''
        }`}
      />
    )}
    <video
      className="video"
      width={556.79}
      height={313.58}
      loop="loop"
      preload="auto"
      autoPlay="autoplay">
      <source src={video} type="video/mp4" />
    </video>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="961.996"
      height="410.309"
      viewBox="0 0 25453 10856"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd">
      <defs>
        <linearGradient
          id="id0"
          gradientUnits="userSpaceOnUse"
          x1="24221.1"
          y1="6309.94"
          x2="23217.9"
          y2="5435.36">
          <stop offset="0" stopColor="#2b2c2e" />
          <stop offset="1" stopColor="#949ea5" />
        </linearGradient>
        <linearGradient
          id="id1"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="24345.9"
          y1="6418.72"
          x2="23093.1"
          y2="5326.58"
        />
        <linearGradient
          id="id2"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="2472.25"
          y1="3214.63"
          x2="1219.51"
          y2="2122.49"
        />
        <linearGradient
          id="id3"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id0"
          x1="2347.48"
          y1="3105.85"
          x2="1344.28"
          y2="2231.27"
        />
      </defs>
      <g id="Capa_x0020_1">
        <g id="_2497485212656">
          <path
            className={`fil0 str0 clickable ${
              pressRightTrigger ? 'flashing-bumper' : ''
            }`}
            d="M25453 2317c0,-1274 -1043,-2317 -2317,-2317l0 2317 2317 0z"
          />
          <path
            className={`fil0 str0 clickable ${
              pressLeftTrigger ? 'flashing-bumper' : ''
            }`}
            d="M0 2317c0,-1274 1043,-2317 2317,-2317l0 2317 -2317 0z"
          />
          <path
            className="fil0 str0"
            d="M4020 77l17732 0c0,209 154,385 355,418l0 10361 -18511 0 0 -10356c233,0 424,-190 424,-423z"
          />
          <path
            className="fil1 str0"
            d="M4398 421l17055 0c124,0 225,101 225,225l0 9498c0,124 -101,225 -225,225l-1057 0 0 -96c0,-59 -48,-106 -106,-106l-648 0c-58,0 -106,47 -106,106l0 96 -9484 0 0 -243c0,-80 -84,-146 -189,-146 -104,0 -188,66 -188,146l0 243 -3360 0 0 -96c0,-59 -48,-106 -106,-106l-648 0c-59,0 -106,47 -106,106l0 96 -1057 0c-124,0 -225,-101 -225,-225l0 -9498c0,-124 101,-225 225,-225z"
          />
          <rect
            className="fil2 str0"
            x="5485"
            y="1204"
            width="14732"
            height="8297"
          />
          <path
            className={`fil3 str0 ${rightColor}`}
            d="M22107 77l997 0c1257,0 2286,1029 2286,2286l0 6207c0,1257 -1029,2286 -2286,2286l-997 0 0 -10779z"
          />
          <path
            className={`fil3 str0 ${leftColor}`}
            d="M2354 77l1228 0 0 10779 -1228 0c-1257,0 -2286,-1029 -2286,-2286l0 -6207c0,-1257 1029,-2286 2286,-2286z"
          />
          <rect
            className="fil4 str0 clickable"
            x="2735"
            y="949"
            width="566"
            height="201"
          />
          <circle className="fil5 str1" cx="1846" cy="2669" r="841" />
          <circle className="fil6 str1" cx="1846" cy="2669" r="674" />
          <circle
            className="fil7 str0 clickable"
            cx="23061"
            cy="7897"
            r="421"
          />
          <circle className="fil8 str0 clickable" cx="1915" cy="4859" r="392" />
          <circle className="fil8 str0 clickable" cx="2793" cy="5669" r="392" />
          <circle className="fil8 str0 clickable" cx="1920" cy="6489" r="392" />
          <circle className="fil8 str0 clickable" cx="1084" cy="5674" r="392" />
          <polygon
            className="fil9 str0 clickable"
            points="1915,4693 1987,4818 2059,4943 1915,4943 1770,4943 1842,4818"
          />
          <polygon
            className="fil9 str0 clickable"
            points="2960,5669 2835,5741 2710,5813 2710,5669 2710,5525 2835,5597"
          />
          <polygon
            className="fil9 str0 clickable"
            points="917,5674 1042,5602 1167,5530 1167,5674 1167,5819 1042,5746"
          />
          <polygon
            className="fil9 str0 clickable"
            points="1920,6656 1848,6531 1776,6406 1920,6406 2064,6406 1992,6531"
          />
          <rect
            className="fil8 str0 clickable"
            x="2184"
            y="7375"
            width="667"
            height="667"
            rx="53"
            ry="53"
          />
          <circle
            className="fil10 str2 clickable"
            cx="2517"
            cy="7709"
            r="217"
          />
          <circle className="fil8 clickable" cx="23061" cy="7897" r="328" />
          <line
            className="fil10 str1"
            x1="1846"
            y1="3342"
            x2="1846"
            y2="3510"
          />
          <line
            className="fil10 str1"
            x1="1005"
            y1="2669"
            x2="1172"
            y2="2669"
          />
          <line
            className="fil10 str1"
            x1="1846"
            y1="1995"
            x2="1846"
            y2="1827"
          />
          <line
            className="fil10 str1"
            x1="2520"
            y1="2669"
            x2="2687"
            y2="2669"
          />
          <polygon
            className="fil4 str0 clickable"
            points="22953,949 22771,949 22771,766 22570,766 22570,949 22387,949 22387,1150 22570,1150 22570,1332 22771,1332 22771,1150 22953,1150"
          />
          <circle
            className={`fil8 str0 clickable ${pressX ? 'flashing-circle' : ''}`}
            cx="23673"
            cy="2074"
            r="392"
          />
          <circle
            className={`fil8 str0 clickable ${pressA ? 'flashing-circle' : ''}`}
            cx="24552"
            cy="2884"
            r="392"
          />
          <circle
            className={`fil8 str0 clickable ${pressB ? 'flashing-circle' : ''}`}
            cx="23678"
            cy="3704"
            r="392"
          />
          <circle
            className={`fil8 str0 clickable ${pressY ? 'flashing-circle' : ''}`}
            cx="22842"
            cy="2889"
            r="392"
          />
          <circle className="fil11 str1" cx="23720" cy="5873" r="841" />
          <circle className="fil12 str1" cx="23720" cy="5873" r="674" />
          <line
            className="fil10 str1"
            x1="23720"
            y1="6546"
            x2="23720"
            y2="6714"
          />
          <line
            className="fil10 str1"
            x1="22878"
            y1="5873"
            x2="23046"
            y2="5873"
          />
          <line
            className="fil10 str1"
            x1="23720"
            y1="5199"
            x2="23720"
            y2="5031"
          />
          <line
            className="fil10 str1"
            x1="24393"
            y1="5873"
            x2="24561"
            y2="5873"
          />
          <polygon
            className={`fil13 clickable ${pressY ? 'flashing-text' : ''}`}
            points="22861,3019 22824,3019 22824,2907 22727,2759 22771,2759 22843,2877 22916,2759 22958,2759 22861,2907"
          />
          <polygon
            className={`fil13 clickable ${pressX ? 'flashing-text' : ''}`}
            points="23673,2041 23735,1945 23778,1945 23695,2068 23789,2204 23743,2204 23672,2095 23602,2204 23557,2204 23650,2067 23566,1945 23611,1945"
          />
          <path
            className={`fil13 clickable ${pressA ? 'flashing-text' : ''}`}
            d="M24502 2918l97 0 -48 -121 -49 121zm-38 95l-41 0 113 -258 32 0 112 258 -41 0 -27 -63 -122 0 -26 63z"
          />
          <path
            className={`fil13 clickable ${pressB ? 'flashing-text' : ''}`}
            d="M23655 3823l45 0c31,0 64,-9 64,-45 0,-30 -21,-43 -61,-43l-48 0 0 88zm0 -119l47 0c28,0 51,-12 51,-40 0,-28 -22,-39 -57,-39l-41 0 0 79zm-36 -109l89 0c39,0 81,16 81,65 0,29 -18,49 -45,57l0 1c33,4 57,26 57,62 0,50 -43,74 -97,74l-85 0 0 -259z"
          />
          <path
            className="fil14 clickable"
            d="M23123 7995c0,9 -4,13 -12,13l-100 0c-9,0 -13,-4 -13,-13l0 -75c0,-9 4,-12 13,-12l100 0c8,0 12,3 12,12l0 75zm132 -122c-62,-53 -124,-106 -186,-158 -6,-6 -11,-6 -16,0 -63,52 -125,105 -187,158 -11,10 -7,22 8,22l24 0c9,0 13,4 13,13l0 162c0,9 3,13 12,13l275 0c9,0 13,-4 13,-13l0 -162c0,-9 3,-13 12,-13l24 0c15,0 20,-12 8,-22z"
          />
        </g>
      </g>
    </svg>
  </div>
)

export const FullSwitch = connect(
  ({ ui: { rightJoyconColor: rightColor, leftJoyconColor: leftColor } }) => ({
    rightColor,
    leftColor
  })
)(FullSwitchIcon)
