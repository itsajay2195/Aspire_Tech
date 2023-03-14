import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"

const SvgAccount = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20.023} height={24} fill={color} {...props}>
      <Defs></Defs>
      <Path
        className="a"
        d="M9.86 11.547a5.6 5.6 0 0 0 4.091-1.691 5.58 5.58 0 0 0 1.692-4.083 5.581 5.581 0 0 0-1.7-4.082 5.793 5.793 0 0 0-8.181 0 5.581 5.581 0 0 0-1.7 4.082 5.58 5.58 0 0 0 1.7 4.082 5.605 5.605 0 0 0 4.098 1.692ZM19.975 18.462a14.244 14.244 0 0 0-.194-1.515 11.921 11.921 0 0 0-.373-1.523 7.517 7.517 0 0 0-.627-1.42 5.36 5.36 0 0 0-.945-1.23 4.168 4.168 0 0 0-1.358-.852 4.7 4.7 0 0 0-1.733-.313 1.76 1.76 0 0 0-.94.4c-.282.183-.611.4-.979.63a5.612 5.612 0 0 1-1.266.557 4.923 4.923 0 0 1-3.1 0 5.6 5.6 0 0 1-1.265-.557c-.364-.232-.694-.445-.98-.631a1.758 1.758 0 0 0-.939-.4 4.691 4.691 0 0 0-1.733.314 4.165 4.165 0 0 0-1.358.852 5.361 5.361 0 0 0-.945 1.23 7.532 7.532 0 0 0-.627 1.42 11.949 11.949 0 0 0-.373 1.523 14.193 14.193 0 0 0-.194 1.515 20.45 20.45 0 0 0-.048 1.416 3.978 3.978 0 0 0 1.186 3.014 4.264 4.264 0 0 0 3.05 1.111H15.79a4.263 4.263 0 0 0 3.05-1.111 3.976 3.976 0 0 0 1.184-3.012 20.914 20.914 0 0 0-.049-1.418Zm0 0"
      />
    </Svg>
)

const SvgCard = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={color} {...props}>
      <Defs></Defs>
      <Path
        style={{
          fill: "transparent",
        }}
        d="M0 0h24v24H0z"
      />
      <Path
        className="b"
        d="M23.5 11H.5a.474.474 0 0 0-.5.5v7.053a2.485 2.485 0 0 0 2.5 2.519h19a2.485 2.485 0 0 0 2.5-2.519V11.5a.474.474 0 0 0-.5-.5Zm-20 4.03h4a.504.504 0 0 1 0 1.008h-4a.504.504 0 0 1 0-1.008Zm7 3.023h-7a.504.504 0 0 1 0-1.008h7a.504.504 0 0 1 0 1.008Zm8.5 0a1.68 1.68 0 0 1-1-.3 1.68 1.68 0 0 1-1 .3 2.015 2.015 0 0 1 0-4.03 1.68 1.68 0 0 1 1 .3 1.68 1.68 0 0 1 1-.3 2.015 2.015 0 0 1 0 4.03ZM21.5 3h-19C1.1 3 0 4.378 0 6.132v1.253c0 .376.2.626.5.626h23c.3 0 .5-.251.5-.626V6.132C24 4.378 22.9 3 21.5 3Z"
      />
    </Svg>
)

const SvgCredit = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25.5} height={25} fill={color} {...props}>
      <Path
        style={{
          fill: "transparent",
        }}
        d="M0 0h25v24H0z"
        transform="translate(.5 .499)"
      />
      <Path
        d="M12 24A12 12 0 0 1 3.515 3.516a12 12 0 0 1 16.97 16.971A11.922 11.922 0 0 1 12 24ZM10.453 9.746v8.837a1.162 1.162 0 0 0 1.161 1.161h.775a1.162 1.162 0 0 0 1.161-1.161V9.746l3.5 3.652a1.159 1.159 0 0 0 1.659.021l.527-.533a1.161 1.161 0 0 0 .342-.827 1.142 1.142 0 0 0-.342-.812l-6.413-6.422a1.159 1.159 0 0 0-1.64 0l-6.426 6.422a1.155 1.155 0 0 0-.342.824 1.142 1.142 0 0 0 .342.815l.527.533a1.166 1.166 0 0 0 .823.339 1.151 1.151 0 0 0 .842-.36l3.5-3.65Z"
        transform="translate(.5 .499)"
        style={{
          fill: color,
          stroke: "transparent",
          strokeMiterlimit: 10,
        }}
      />
    </Svg>
)

const SvgDeactivate = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color} {...props}>
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM2 8a5.961 5.961 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 2 8Zm10.885 3.471L4.529 3.115a5.991 5.991 0 0 1 8.356 8.356Z"
          transform="translate(-205 313)"
          style={{
            fill: "#9ac0fa",
          }}
        />
        <Path
          transform="rotate(45 -481.81 -83.958)"
          style={{
            fill: "#f1f3f4",
          }}
          d="M0 0h11.8v2H0z"
        />
      </G>
    </Svg>
)

 const SvgFreeze = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color} {...props}>
      <Defs>
        <ClipPath id="a">
          <Path
            transform="translate(-209 321)"
            style={{
              fill: "#fff",
            }}
            d="M0 0h25v8H0z"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          d="M17 7.437h-2.264L15.759 5.9l-1.768-1.175-1.809 2.712h-2.62V4.376l2.6-1.3-.949-1.9L9.562 2V0H7.437v2l-1.65-.824-.949 1.9 2.6 1.3v3.061h-2.62L3.009 4.725 1.241 5.9l1.023 1.537H0v2.125h2.265L1.241 11.1l1.768 1.179 1.81-2.716h2.619v2.619l-2.715 1.811L5.9 15.761l1.535-1.024V17h2.127v-2.264l1.538 1.025 1.18-1.768-2.718-1.812V9.563h2.619l1.81 2.716 1.768-1.179-1.024-1.538H17Z"
          transform="rotate(45 -471.51 -83.62)"
          style={{
            fill: "#9ac0fa",
          }}
        />
        <G
          style={{
            clipPath: "url(#a)",
          }}
        >
          <Path
            d="M17 7.437h-2.264L15.759 5.9l-1.768-1.175-1.809 2.712h-2.62V4.376l2.6-1.3-.949-1.9L9.562 2V0H7.437v2l-1.65-.824-.949 1.9 2.6 1.3v3.061h-2.62L3.009 4.725 1.241 5.9l1.023 1.537H0v2.125h2.265L1.241 11.1l1.768 1.179 1.81-2.716h2.619v2.619l-2.715 1.811L5.9 15.761l1.535-1.024V17h2.127v-2.264l1.538 1.025 1.18-1.768-2.718-1.812V9.563h2.619l1.81 2.716 1.768-1.179-1.024-1.538H17Z"
            transform="rotate(45 -471.51 -83.62)"
            style={{
              fill: "#f1f3f4",
            }}
          />
        </G>
      </G>
    </Svg>
)

 const SvgInsight = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color} {...props}>
      <G transform="translate(-.094)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(.094)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          d="m8.589 5.246 1.431-1.4v6.394a1.149 1.149 0 0 0 2.3 0V3.844l1.43 1.4a1.166 1.166 0 0 0 1.625 0 1.11 1.11 0 0 0 0-1.592L11.981.33a1.166 1.166 0 0 0-1.625 0L6.964 3.653a1.11 1.11 0 0 0 0 1.592 1.167 1.167 0 0 0 1.625.001Z"
          transform="translate(4.961 7.899)"
          style={{
            stroke: "#325baf",
            strokeWidth: ".1px",
            fill: "#9ac0fa",
          }}
        />
        <Path
          d="M17.954 11.754a2.757 2.757 0 0 1-2.773 2.734H7.66a2.757 2.757 0 0 1-2.773-2.734 1.142 1.142 0 0 1 2.284 0 .487.487 0 0 0 .489.482h7.521a.487.487 0 0 0 .489-.482 1.142 1.142 0 0 1 2.284 0Z"
          transform="translate(4.709 9.667)"
          style={{
            fill: "#f1f3f4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#325baf",
            strokeWidth: ".1px",
          }}
        />
      </G>
    </Svg>
)

const SvgLimit = ({color,...props}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color} {...props}>
    <Defs></Defs>
    <G transform="translate(213 -305)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        transform="translate(-213 305)"
        style={{
          fill: "#325baf",
        }}
      />
      <Path
        className="b"
        d="M-200.827 317.349a.219.219 0 0 0-.054-.159l-1.737-1.977a.219.219 0 0 0-.31-.02 9.039 9.039 0 0 0-1.97 2.46.219.219 0 0 0 .087.3l2.309 1.262a.219.219 0 0 0 .3-.087 5.976 5.976 0 0 1 1.3-1.626.219.219 0 0 0 .075-.153ZM-200.074 316.629a.219.219 0 0 0 .3.091 5.905 5.905 0 0 1 1.979-.637.219.219 0 0 0 .188-.247l-.354-2.608a.22.22 0 0 0-.247-.188 8.964 8.964 0 0 0-3 .967.219.219 0 0 0-.091.3ZM-202.877 320.124l-2.54-.689a.219.219 0 0 0-.269.154 9.059 9.059 0 0 0-.314 2.371c0 .138 0 .275.01.422a.219.219 0 0 0 .219.209h.01l2.629-.121a.219.219 0 0 0 .209-.229c0-.1-.007-.19-.007-.28a5.986 5.986 0 0 1 .208-1.567.219.219 0 0 0-.155-.27ZM-193.093 313.851a8.969 8.969 0 0 0-3.039-.85.219.219 0 0 0-.239.2l-.254 2.619a.219.219 0 0 0 .2.239 5.908 5.908 0 0 1 2 .56.219.219 0 0 0 .293-.1l1.143-2.371a.219.219 0 0 0-.104-.297ZM-189.25 317.519a.219.219 0 0 0-.024-.166 9.042 9.042 0 0 0-2.062-2.382.219.219 0 0 0-.308.032l-1.661 2.042a.219.219 0 0 0 .032.309 5.978 5.978 0 0 1 1.364 1.576.219.219 0 0 0 .3.076l2.259-1.35a.22.22 0 0 0 .1-.137ZM-188.412 319.257a.219.219 0 0 0-.275-.144l-2.511.787a.219.219 0 0 0-.144.275 5.968 5.968 0 0 1 .272 1.786c0 .09 0 .181-.007.28a.219.219 0 0 0 .209.229l2.629.121h.01a.219.219 0 0 0 .219-.209c.007-.146.01-.284.01-.422a9.035 9.035 0 0 0-.412-2.703Z"
      />
      <Path
        d="M173.745 310.747h-.113l-3.562-2.1a.226.226 0 0 0-.314.3l1.943 3.642a2.093 2.093 0 0 0-.011.212 2.057 2.057 0 1 0 2.057-2.057Z"
        transform="rotate(10.02 -84.976 -1791.345)"
        style={{
          fill: "#f1f3f4",
        }}
      />
    </G>
  </Svg>
)

 const SvgLogo = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={27.595} height={25} fill={color} {...props} >
      <Defs></Defs>
      <Path
        className="a"
        d="M25.073 15.759c0 .071 0 .142-.073.142a.159.159 0 0 1-.147-.142c-.22-.284-11.388-12.08-11.9-12.506-.22-.213-.294-.142-.514.071C12.363 3.395.754 15.617.607 15.83c-.073.07-.147.07-.147-.071a11.641 11.641 0 0 1-.441-3.908 11.032 11.032 0 0 1 1.616-5.4A12.217 12.217 0 0 1 10.011.339a12.62 12.62 0 0 1 11.977 3.482 11.636 11.636 0 0 1 3.453 6.68 9.408 9.408 0 0 1 .147 2.061 16.11 16.11 0 0 1-.515 3.197Z"
      />
      <Path
        className="a"
        d="M3.767 21.373c-.073-.071-.147-.142 0-.284s8.743-9.167 8.963-9.38c.073-.071.147-.071.147 0 .294.355 8.743 9.309 8.964 9.451.073.071.073.142-.073.142a9.965 9.965 0 0 1-1.617 1.354 12.563 12.563 0 0 1-6.319 2.274 6.53 6.53 0 0 1-1.176.071 12.7 12.7 0 0 1-8.889-3.628Z"
      />
    </Svg>
  )
  
 const SvgNewCard = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color} {...props}>
      <Defs></Defs>
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          d="M387.881 300.224h-.79v-.79a.766.766 0 1 0-1.532 0v.79h-.79a.766.766 0 0 0 0 1.532h.79v.79a.766.766 0 0 0 1.532 0v-.79h.79a.766.766 0 0 0 0-1.532Z"
          transform="translate(-576.6 24.064)"
          style={{
            fill: "#f1f3f4",
          }}
        />
        <Path
          className="c"
          d="M-189.509 317.518a2.407 2.407 0 0 0-2.281-2.517h-10.929a2.407 2.407 0 0 0-2.281 2.517.2.2 0 0 0 .187.207h15.113a.2.2 0 0 0 .191-.207ZM-189.509 319.413v.936a.415.415 0 0 1-.424.436 4.1 4.1 0 0 0-4.138 4.567.422.422 0 0 1-.4.468h-8.248a2.407 2.407 0 0 1-2.281-2.515v-3.89a.2.2 0 0 1 .187-.21h15.113a.2.2 0 0 1 .191.208Z"
        />
      </G>
    </Svg>
)

 const SvgPayment = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={color} {...props}>
      <Path
        style={{
          fill: "transparent",
        }}
        d="M0 0h24v24H0z"
      />
      <Path
        d="M35.169 10A11.837 11.837 0 0 0 23.5 22a11.838 11.838 0 0 0 11.667 12 11.33 11.33 0 0 0 6.651-2.2c.5-.473.811-.529.811-1.041l.007-.1a1.075 1.075 0 0 0-1.06-1.09 1.026 1.026 0 0 0-.764.343 9.322 9.322 0 0 1-5.633 1.9 9.7 9.7 0 0 1-9.563-9.833 9.567 9.567 0 1 1 19.127 0 10.009 10.009 0 0 1-.921 4.19 9.724 9.724 0 0 0-.49 1.185l-.007.1a1.078 1.078 0 0 0 1.063 1.092 1.054 1.054 0 0 0 1-.776A12.189 12.189 0 0 0 46.836 22a11.835 11.835 0 0 0-11.667-12Zm-6.516 10.7a1.045 1.045 0 0 0 .3.676 1.026 1.026 0 0 0 .676.3.791.791 0 0 0 .108 0h10.8a1.033 1.033 0 1 0 0-2.067l-8.437.012 1.222-1.234a1 1 0 0 0-1.413-1.413l-2.956 2.983a.988.988 0 0 0-.289.632h-.007a.654.654 0 0 0 0 .11Zm8.247 6.891a1 1 0 0 0 1.416 0l2.958-2.978a1 1 0 0 0 .289-.629h.007v-.108a1.039 1.039 0 0 0-.3-.673 1.05 1.05 0 0 0-.676-.3.791.791 0 0 0-.108 0h-10.8a1.031 1.031 0 1 0 0 2.062l8.439-.012-1.222 1.237a.987.987 0 0 0-.003 1.401Z"
        transform="translate(-23.169 -10)"
        style={{
          fill: color,
        }}
      />
    </Svg>
)

 const SvgRemove = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <Path
        d="M0 0h16v16H0Z"
        style={{
          fill: "none",
        }}
      />
      <Path
        d="M7.333 10a7.822 7.822 0 0 1-4.484-1.4A7.9 7.9 0 0 1 0 5a7.879 7.879 0 0 1 14.666 0 7.9 7.9 0 0 1-2.848 3.6A7.824 7.824 0 0 1 7.333 10Zm0-8.334A3.333 3.333 0 1 0 10.667 5a3.337 3.337 0 0 0-3.334-3.332Z"
        transform="translate(.667 2.999)"
        style={{
          stroke: "transparent",
          strokeMiterlimit: 10,
          fill: "#01d167",
        }}
      />
      <Path
        d="M2 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
        transform="translate(6 6)"
        style={{
          fill: "#01d167",
        }}
      />
    </Svg>
)

 const SvgShow = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={color} {...props}>
      <Path
        d="M0 0h16v16H0Z"
        style={{
          fill: "none",
        }}
      />
      <Path
        d="M7.333 10a7.822 7.822 0 0 1-4.484-1.4A7.9 7.9 0 0 1 0 5a7.879 7.879 0 0 1 14.666 0 7.9 7.9 0 0 1-2.848 3.6A7.824 7.824 0 0 1 7.333 10Zm0-8.334A3.333 3.333 0 1 0 10.667 5a3.337 3.337 0 0 0-3.334-3.332Z"
        transform="translate(.667 2.999)"
        style={{
          stroke: "transparent",
          strokeMiterlimit: 10,
          fill: "#01d167",
        }}
      />
      <Path
        d="M2 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
        transform="translate(6 6)"
        style={{
          fill: "#01d167",
        }}
      />
      <Path
        transform="translate(2.269 2.269)"
        style={{
          stroke: "#01d167",
          strokeLinecap: "round",
          strokeWidth: 2,
          fill: "none",
        }}
        d="M10.907 0 0 10.907"
      />
    </Svg>
)

 const SvgTransfer = ({color,...props}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color} {...props}>
      <Defs></Defs>
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          className="b"
          d="M-200.827 317.349a.219.219 0 0 0-.054-.159l-1.737-1.977a.219.219 0 0 0-.31-.02 9.039 9.039 0 0 0-1.97 2.46.219.219 0 0 0 .087.3l2.309 1.262a.219.219 0 0 0 .3-.087 5.976 5.976 0 0 1 1.3-1.626.219.219 0 0 0 .075-.153ZM-200.074 316.629a.219.219 0 0 0 .3.091 5.905 5.905 0 0 1 1.979-.637.219.219 0 0 0 .188-.247l-.354-2.608a.22.22 0 0 0-.247-.188 8.964 8.964 0 0 0-3 .967.219.219 0 0 0-.091.3ZM-202.877 320.124l-2.54-.689a.219.219 0 0 0-.269.154 9.059 9.059 0 0 0-.314 2.371c0 .138 0 .275.01.422a.219.219 0 0 0 .219.209h.01l2.629-.121a.219.219 0 0 0 .209-.229c0-.1-.007-.19-.007-.28a5.986 5.986 0 0 1 .208-1.567.219.219 0 0 0-.155-.27ZM-193.093 313.851a8.969 8.969 0 0 0-3.039-.85.219.219 0 0 0-.239.2l-.254 2.619a.219.219 0 0 0 .2.239 5.908 5.908 0 0 1 2 .56.219.219 0 0 0 .293-.1l1.143-2.371a.219.219 0 0 0-.104-.297ZM-189.25 317.519a.219.219 0 0 0-.024-.166 9.042 9.042 0 0 0-2.062-2.382.219.219 0 0 0-.308.032l-1.661 2.042a.219.219 0 0 0 .032.309 5.978 5.978 0 0 1 1.364 1.576.219.219 0 0 0 .3.076l2.259-1.35a.22.22 0 0 0 .1-.137ZM-188.412 319.257a.219.219 0 0 0-.275-.144l-2.511.787a.219.219 0 0 0-.144.275 5.968 5.968 0 0 1 .272 1.786c0 .09 0 .181-.007.28a.219.219 0 0 0 .209.229l2.629.121h.01a.219.219 0 0 0 .219-.209c.007-.146.01-.284.01-.422a9.035 9.035 0 0 0-.412-2.703Z"
        />
        <Path
          d="M173.745 310.747h-.113l-3.562-2.1a.226.226 0 0 0-.314.3l1.943 3.642a2.093 2.093 0 0 0-.011.212 2.057 2.057 0 1 0 2.057-2.057Z"
          transform="rotate(10.02 -84.976 -1791.345)"
          style={{
            fill: "#f1f3f4",
          }}
        />
      </G>
    </Svg>
)

 const SvgVisaLogo =({color,...props})=>(
  <Svg xmlns="http://www.w3.org/2000/svg" width={59} height={20}  {...props}>
    <Path
      d="M33.979 20a13.135 13.135 0 0 1-5.435-1.092l.715-4.337a8.034 8.034 0 0 0 4.693 1.354c2.037 0 3.252-.693 3.252-1.853 0-1.1-1.177-1.751-2.539-2.5A12.021 12.021 0 0 1 31.9 9.678 4.453 4.453 0 0 1 30.544 6.4a5.7 5.7 0 0 1 .924-3.238 6.154 6.154 0 0 1 2.212-1.95A10.971 10.971 0 0 1 38.607 0a13.5 13.5 0 0 1 4.329.842l-.687 4.15a8.342 8.342 0 0 0-3.861-.911 4.682 4.682 0 0 0-2.027.378A1.353 1.353 0 0 0 35.5 5.71c0 .868 1.084 1.477 2.339 2.184 1.951 1.1 4.38 2.465 4.38 5.492a5.879 5.879 0 0 1-2.89 5.121A10.369 10.369 0 0 1 33.979 20Zm12.913-.331h-5.019l7.18-17.884a2.245 2.245 0 0 1 2.223-1.44h3.869L59 19.667h-4.421l-.565-2.87H47.9l-1 2.87ZM51.811 5.6l-2.529 7.232h3.953ZM25.577 19.668h-4.814L23.772.345h4.815l-3.01 19.322Zm-11.343 0H9.219L5.038 2.885a7.329 7.329 0 0 0-.332-.2l-.258-.153c-.152-.088-.3-.172-.443-.249-.088-.048-.174-.093-.26-.138S3.561 2.044 3.47 2s-.164-.083-.267-.132c-.083-.041-.165-.079-.246-.117s-.173-.083-.257-.121l-.231-.1c-.166-.072-.3-.131-.438-.185L1.926 1.3l-.086-.034-.228-.086-.178-.067-.2-.071-.163-.055L.9.929.746.881A9.285 9.285 0 0 0 .523.813L.481.8.388.773.293.747.195.721.161.712.132.7.063.688H.044L.032.68A.288.288 0 0 1 0 .672L.089.345h7.587a2.1 2.1 0 0 1 2.284 1.74l1.62 8.689.544 2.861L16.713.345h5.181l-7.66 19.323Z"
      style={{
        fill: color,
      }}
    />
  </Svg>
)

const SvgAspireLogo = ({color,...props})=>(
    <Svg xmlns="http://www.w3.org/2000/svg" width={74} height={21} {...props} >
      <Path
        d="M10.564 21h-.158a10.331 10.331 0 0 1-3.964-.8A10.226 10.226 0 0 1 3.1 17.953a.175.175 0 0 1-.07-.114.188.188 0 0 1 .07-.124c.054-.053 1.451-1.55 3.07-3.283l.007-.008.012-.012c1.96-2.1 4.182-4.478 4.282-4.577a.132.132 0 0 1 .083-.045c.024 0 .038.016.038.045.053.065 7.151 7.795 7.37 7.939.033.033.046.063.037.084s-.043.035-.1.035a8.237 8.237 0 0 1-1.329 1.134 10.172 10.172 0 0 1-5.195 1.91 5.307 5.307 0 0 1-.811.063Zm34.216-2.51h-1.571c-.121 0-.121-.058-.121-.12V6.492c0-.119.059-.119.121-.119H44.9c.121 0 .121.058.121.119v1.374a3.628 3.628 0 0 1 1.631-1.433 4.192 4.192 0 0 1 3.448.107 4.107 4.107 0 0 1 2.176 2.639 5.245 5.245 0 0 1-.362 3.939 3.775 3.775 0 0 1-3.021 2.089 3.917 3.917 0 0 1-2.175-.238 3.809 3.809 0 0 1-1.571-1.134.311.311 0 0 1-.06-.09.311.311 0 0 0-.06-.09v4.6c-.006.235-.006.235-.247.235Zm2.935-10.827a2.52 2.52 0 0 0-1.727.679 2.7 2.7 0 0 0-.967 2.209 3.361 3.361 0 0 1 .121.6 2.729 2.729 0 0 0 2.658 2.385h.033a2.687 2.687 0 0 0 2.5-1.671 2.965 2.965 0 0 0 .121-1.91 2.7 2.7 0 0 0-1.752-2.089 2.52 2.52 0 0 0-.991-.2Zm-10.184 7.75a5.588 5.588 0 0 1-3.323-1.1.169.169 0 0 1-.092-.1.267.267 0 0 1 .031-.2 4.131 4.131 0 0 0 .329-.636 5.988 5.988 0 0 1 .275-.559 4.934 4.934 0 0 1 .688.28 7.085 7.085 0 0 0 .762.317 3.632 3.632 0 0 0 1.933.238 1.78 1.78 0 0 0 .6-.179.856.856 0 0 0 .48-.625.847.847 0 0 0-.239-.748 1.436 1.436 0 0 0-.664-.358 8.612 8.612 0 0 0-.973-.342 8.606 8.606 0 0 1-.6-.2l-.906-.358a2.375 2.375 0 0 1 .121-4.3 5.163 5.163 0 0 1 1.911-.365c.088 0 .176 0 .264.007a6.72 6.72 0 0 1 2.6.716c.149.059.224.088.241.139s-.029.128-.12.279L40.31 8.4a.4.4 0 0 0-.033.038c-.021.027-.037.046-.069.046a.191.191 0 0 1-.08-.025 5.445 5.445 0 0 0-2.356-.716 1.6 1.6 0 0 0-.907.12.778.778 0 0 0-.543.656.68.68 0 0 0 .362.776 4.766 4.766 0 0 0 1.269.537 7.686 7.686 0 0 1 1.51.537 3.346 3.346 0 0 1 .845.537A2.278 2.278 0 0 1 41.095 13a2.382 2.382 0 0 1-1.691 2.09 5.554 5.554 0 0 1-1.873.323Zm-9.853-.163a3.526 3.526 0 0 1-1.384-.281 2.723 2.723 0 0 1-1.574-1.561 2.676 2.676 0 0 1 .123-2.2 2.58 2.58 0 0 1 1.692-1.254 5.573 5.573 0 0 1 1.39-.179h2.6c.072 0 .127-.022.141-.056a.058.058 0 0 0-.02-.064A2.171 2.171 0 0 0 30.583 9a1.537 1.537 0 0 0-1.329-1.134 4.126 4.126 0 0 0-2.537.3 3.425 3.425 0 0 0-.785.478.111.111 0 0 1-.075.039c-.038 0-.072-.032-.106-.1a11.187 11.187 0 0 1-.665-1.135c-.032-.032-.046-.062-.037-.083s.043-.035.1-.035a7.038 7.038 0 0 1 3.788-1.1c.207 0 .416.009.622.027a3.361 3.361 0 0 1 1.328.358 2.973 2.973 0 0 1 1.692 2.327 15.942 15.942 0 0 1 .06 1.732v4.417c0 .119-.059.119-.121.119h-1.633c-.121 0-.121-.058-.121-.119v-.955a4.967 4.967 0 0 1-2.537 1.074 3.558 3.558 0 0 1-.549.04Zm.428-4.041a4.134 4.134 0 0 0-1.148.179 1.006 1.006 0 0 0-.664.716 1.333 1.333 0 0 0 .966 1.552 2.775 2.775 0 0 0 2.176-.238 1.7 1.7 0 0 0 1.087-1.732 1.038 1.038 0 0 0 .06-.358c0-.119-.061-.119-.121-.119Zm41.654 4.022a5.426 5.426 0 0 1-1.843-.321 3.96 3.96 0 0 1-2.658-3.224 4.451 4.451 0 0 1 .3-2.805 4.176 4.176 0 0 1 3.262-2.506 5.9 5.9 0 0 1 2.3.059 3.357 3.357 0 0 1 2.6 2.447 6.181 6.181 0 0 1 .242 2.567c0 .12-.059.12-.121.12h-3.267a19.909 19.909 0 0 0-2.717-.187c-.181 0-.364 0-.545.007a.147.147 0 0 0-.133.052.131.131 0 0 0 .013.127 2.766 2.766 0 0 0 2.7 2.089h.133a3.371 3.371 0 0 0 2.364-.957.115.115 0 0 1 .091-.044.114.114 0 0 1 .091.044c.151.149.289.3.422.446s.273.3.424.449a.113.113 0 0 1 .044.089.116.116 0 0 1-.044.09A5.325 5.325 0 0 1 71 15.088a5.453 5.453 0 0 1-1.239.143ZM69.689 7.7a2.521 2.521 0 0 0-1.489.482A2.489 2.489 0 0 0 67.193 9.9c-.024.046-.03.075-.019.093s.068.026.14.026h4.832c.121 0 .121-.06.121-.119a2.824 2.824 0 0 0-.423-1.254 2.27 2.27 0 0 0-1.692-.9 2.551 2.551 0 0 0-.463-.046Zm-13.352 7.449h-1.65c-.121 0-.121 0-.121-.12V6.433c0-.12.059-.12.121-.12h1.631c.121 0 .121.061.121.12l.06 8.536a.161.161 0 0 1-.046.133.164.164 0 0 1-.116.047Zm4.955-.119h-1.651c-.121 0-.121-.058-.121-.119v-8.6c0-.119.059-.119.121-.119h1.692c.121 0 .121.058.121.119v1.434a3.407 3.407 0 0 1 .242-.3 3.308 3.308 0 0 1 2.356-1.253.53.53 0 0 0 .129-.025.62.62 0 0 1 .157-.029.184.184 0 0 1 .136.053.277.277 0 0 1 .068.268.723.723 0 0 0-.008.09v1.256c0 .12-.059.12-.121.12s-.15-.009-.225-.009a2.942 2.942 0 0 0-1.527.426 2.453 2.453 0 0 0-1.208 2.149c-.04 1-.027 1.979-.013 2.929.007.471.013.954.013 1.428a.162.162 0 0 1-.047.133.164.164 0 0 1-.113.048Zm-40.737-1.673a.133.133 0 0 1-.121-.119c-.046-.061-9.243-10.045-9.787-10.506-.077-.076-.131-.108-.182-.108-.071 0-.135.063-.241.168C10.144 2.872.619 13.119.5 13.3a.113.113 0 0 1-.071.039.04.04 0 0 1-.036-.023.16.16 0 0 1-.014-.075 9.956 9.956 0 0 1-.363-3.286 9.438 9.438 0 0 1 1.328-4.537A10.026 10.026 0 0 1 8.232.285a10.243 10.243 0 0 1 9.847 2.925 9.9 9.9 0 0 1 2.839 5.611 8.029 8.029 0 0 1 .121 1.731 13.794 13.794 0 0 1-.423 2.686c0 .062 0 .119-.061.119ZM55.5 4.822a1.112 1.112 0 0 1-.79-.322 1.094 1.094 0 0 1-.325-.813 1.2 1.2 0 0 1 1.148-1.193h.023a1.136 1.136 0 0 1 .817.347 1.112 1.112 0 0 1 .308.847 1.135 1.135 0 0 1-.336.8 1.166 1.166 0 0 1-.812.332Z"
        style={{
          fill: color,
        }}
      />
    </Svg>
)

export default({
    SvgAccount,
    SvgCard,
    SvgCredit,
    SvgDeactivate,
    SvgFreeze,
    SvgInsight,
    SvgLimit,
    SvgLogo,
    SvgNewCard,
    SvgPayment,
    SvgRemove,
    SvgShow,
    SvgTransfer,
    SvgVisaLogo,
    SvgAspireLogo
})