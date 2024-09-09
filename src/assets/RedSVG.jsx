import * as React from "react";
const RedSVG = (props) => (
  <svg
    width={49}
    height={48}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.661011}
      width={48}
      height={48}
      rx={10}
      fill="#EC6D99"
      fillOpacity={0.1}
    />
    <g clipPath="url(#clip0_6_830)">
      <path
        d="M24.6542 26.2659C24.3984 26.2659 24.1427 26.27 23.887 26.2659C23.5712 26.2599 23.4 26.1174 23.3414 25.8103C23.2534 25.366 23.1825 24.9171 23.0761 24.4775C23.031 24.3512 22.9443 24.2433 22.8299 24.171C22.4337 23.9022 22.0736 23.9694 21.7155 24.2819C21.4748 24.4909 21.1877 24.6502 20.9169 24.825C20.6462 24.9997 20.4354 24.9849 20.2043 24.7618C19.8405 24.4092 19.4789 24.053 19.1192 23.6932C18.8819 23.4559 18.8621 23.2469 19.051 22.9707C19.2972 22.6078 19.5441 22.2455 19.8012 21.8913C19.9137 21.7381 19.9069 21.6064 19.8599 21.4262C19.7419 20.978 19.4657 20.7931 19.0101 20.7622C18.6691 20.7394 18.339 20.6486 18.0062 20.5781C17.7334 20.5189 17.5929 20.3637 17.5889 20.0848C17.5798 19.5471 17.5798 19.0094 17.5889 18.4718C17.5936 18.1915 17.7252 18.0443 18.013 17.9852C18.4625 17.8924 18.9146 17.8091 19.3675 17.7325C19.5557 17.7009 19.6403 17.598 19.733 17.4361C19.9601 17.0442 19.9035 16.727 19.6109 16.3957C19.4063 16.1631 19.2488 15.8876 19.0728 15.6302C18.8553 15.3109 18.8717 15.118 19.141 14.8492C19.4775 14.5154 19.8151 14.1827 20.1538 13.8512C20.4436 13.5675 20.6312 13.548 20.9633 13.7698C21.3302 14.0145 21.6978 14.2578 22.0592 14.5091C22.1922 14.6019 22.3075 14.5925 22.4616 14.5528C22.9124 14.4372 23.1436 14.1838 23.1647 13.712C23.1797 13.4056 23.2745 13.1018 23.3332 12.7973C23.4014 12.4351 23.5555 12.3027 23.9197 12.3013C24.4225 12.2986 24.9254 12.2986 25.4282 12.3013C25.7651 12.3013 25.9315 12.4398 25.995 12.761C26.0816 13.1972 26.1709 13.6348 26.2453 14.0716C26.2732 14.2403 26.3605 14.3189 26.5071 14.4076C26.9252 14.6509 27.2723 14.5905 27.6283 14.28C27.8629 14.0783 28.1432 13.9231 28.4058 13.7517C28.6936 13.5628 28.8954 13.577 29.1369 13.8108C29.5006 14.1639 29.8623 14.5201 30.2219 14.8795C30.4449 15.1026 30.4694 15.3217 30.2949 15.5825C30.0412 15.9608 29.7841 16.3372 29.5167 16.7055C29.4137 16.8473 29.4349 16.9656 29.4724 17.1249C29.5856 17.6007 29.8918 17.7768 30.359 17.8091C30.6788 17.8306 30.9959 17.9166 31.3137 17.9852C31.6125 18.0524 31.7461 18.1969 31.7516 18.4892C31.7604 19.0182 31.7618 19.5478 31.7516 20.0767C31.7454 20.3677 31.6056 20.5216 31.3124 20.5821C30.8793 20.6708 30.4449 20.7542 30.0084 20.8261C29.8038 20.8597 29.7002 20.9538 29.5992 21.1399C29.3906 21.525 29.424 21.8328 29.7179 22.1595C29.9307 22.3961 30.0909 22.6797 30.271 22.9445C30.4756 23.2462 30.4585 23.4566 30.2028 23.7093C29.855 24.0561 29.5054 24.4004 29.1539 24.7423C28.9057 24.9836 28.6867 25.0044 28.3996 24.8142C28.0245 24.5662 27.6495 24.3162 27.2819 24.0601C27.1516 23.9694 27.0391 23.9667 26.8815 24.0091C26.4246 24.1314 26.1859 24.3854 26.1661 24.8687C26.1539 25.1671 26.0584 25.4621 26.0004 25.7585C25.9261 26.1416 25.7726 26.2659 25.3709 26.2679C25.1316 26.2673 24.8929 26.2659 24.6542 26.2659ZM27.5867 19.2762C27.5856 18.5115 27.277 17.7784 26.7285 17.2375C26.18 16.6965 25.4363 16.3919 24.6603 16.3903C23.8845 16.3931 23.1414 16.6989 22.5938 17.2405C22.0462 17.7822 21.7387 18.5157 21.7387 19.2803C21.7387 20.0456 22.0467 20.7796 22.5952 21.3214C23.1437 21.8632 23.8878 22.1685 24.6644 22.1702C25.4411 22.1685 26.1854 21.8631 26.7339 21.3212C27.2824 20.7792 27.5903 20.045 27.5901 19.2796L27.5867 19.2762Z"
        fill="#EC6D99"
      />
      <path
        d="M17.2838 19.9645C17.0567 19.9645 16.8609 19.9645 16.6652 19.9645C16.1619 19.9685 15.915 20.2125 15.915 20.7092C15.915 23.7586 15.915 26.8081 15.915 29.8576C15.915 30.1688 15.9109 30.4799 15.915 30.7904C15.9232 31.1937 16.183 31.4471 16.5895 31.4625C16.7771 31.4679 16.9653 31.4625 17.1528 31.4625H32.5759C33.1992 31.4625 33.4188 31.2454 33.4188 30.6291V20.7979C33.4188 20.1782 33.2026 19.9652 32.5772 19.9645H32.0535V18.2211C32.6877 18.2554 33.3417 18.2211 33.963 18.3427C34.705 18.4859 35.151 19.1701 35.151 19.9658C35.151 23.7801 35.151 27.5944 35.151 31.4088V32.5022H14.1753V32.224C14.1753 28.1659 14.1753 24.1081 14.1753 20.0505C14.1753 18.9268 14.8641 18.2527 16.0098 18.252H17.2838V19.9645Z"
        fill="#EC6D99"
      />
      <path
        d="M24.6648 32.8087H36.0471C36.1583 32.8087 36.2694 32.8087 36.3792 32.8154C36.4902 32.8228 36.598 32.8557 36.6939 32.9113C36.7898 32.9669 36.8712 33.0438 36.9317 33.1358C36.9922 33.2279 37.0301 33.3325 37.0424 33.4415C37.0547 33.5505 37.0411 33.6608 37.0025 33.7637C36.8756 34.1113 36.7158 34.4464 36.5252 34.7645C36.1214 35.4097 35.5104 35.6987 34.7404 35.698C28.1479 35.6948 21.5572 35.6948 14.9684 35.698C14.6707 35.7059 14.3728 35.6902 14.0777 35.6509C13.8309 35.6159 13.5949 35.5279 13.3863 35.3932C13.1778 35.2585 13.0017 35.0804 12.8706 34.8713C12.644 34.5068 12.4559 34.1204 12.3093 33.718C12.1552 33.3027 12.4942 32.8557 12.947 32.8161C13.0568 32.8067 13.1686 32.8094 13.2791 32.8094L24.6648 32.8087ZM31.293 34.2093C31.2922 34.1421 31.2779 34.0757 31.2511 34.014C31.2242 33.9522 31.1852 33.8963 31.1364 33.8494C31.0875 33.8025 31.0298 33.7656 30.9664 33.7407C30.9031 33.7159 30.8354 33.7036 30.7672 33.7046C30.6297 33.7072 30.4988 33.7626 30.4022 33.8591C30.3056 33.9555 30.2511 34.0853 30.2502 34.2207C30.2561 34.356 30.3142 34.484 30.4125 34.5785C30.5108 34.6731 30.6421 34.7271 30.7795 34.7295C30.9168 34.7255 31.0473 34.669 31.1431 34.5719C31.2389 34.4748 31.2927 34.3448 31.293 34.2093ZM33.1528 34.2228C33.1535 34.0873 33.1001 33.957 33.0041 33.86C32.9082 33.7631 32.7773 33.7072 32.6399 33.7046C32.5718 33.7034 32.5042 33.7155 32.4409 33.7403C32.3776 33.765 32.3199 33.8018 32.271 33.8486C32.2222 33.8954 32.1833 33.9512 32.1565 34.0129C32.1297 34.0746 32.1155 34.1409 32.1148 34.208C32.1136 34.3433 32.1663 34.4736 32.2616 34.5711C32.3568 34.6686 32.487 34.7255 32.6242 34.7295C32.7616 34.7284 32.8932 34.6751 32.9917 34.5807C33.0901 34.4863 33.1478 34.358 33.1528 34.2228ZM35.0043 34.2093C35.0044 34.1423 34.991 34.0759 34.9647 34.014C34.9384 33.9522 34.8999 33.8961 34.8514 33.8491C34.8029 33.8021 34.7453 33.7651 34.6821 33.7403C34.6189 33.7155 34.5513 33.7033 34.4833 33.7046C34.4153 33.7051 34.348 33.7189 34.2855 33.7452C34.2229 33.7715 34.1662 33.8097 34.1187 33.8577C34.0712 33.9057 34.0338 33.9625 34.0087 34.0248C33.9836 34.0871 33.9713 34.1537 33.9725 34.2207C33.9752 34.3559 34.0312 34.4847 34.1288 34.5797C34.2264 34.6747 34.3577 34.7285 34.4949 34.7295C34.6324 34.7269 34.7632 34.6706 34.8587 34.5731C34.9541 34.4756 35.0065 34.3448 35.0043 34.2093Z"
        fill="#EC6D99"
      />
      <path
        d="M24.6788 27.6834H31.352C31.42 27.6734 31.4892 27.6752 31.5566 27.6887C31.6234 27.7248 31.6847 27.7701 31.7387 27.8231C31.6895 27.88 31.6318 27.9289 31.5675 27.9683C31.5003 27.9834 31.4309 27.9857 31.3629 27.975C26.8955 27.975 22.428 27.9737 17.9606 27.971C17.8242 27.971 17.5978 28.0537 17.6005 27.8218C17.6005 27.6108 17.8215 27.6874 17.9497 27.6874C20.1934 27.682 22.4364 27.6807 24.6788 27.6834Z"
        fill="#EC6D99"
      />
      <path
        d="M24.6905 29.1956H31.3405C31.3994 29.1859 31.4596 29.1875 31.5178 29.2003C31.5958 29.2422 31.6698 29.291 31.7388 29.3461C31.6656 29.3985 31.588 29.4446 31.5069 29.4839C31.4485 29.4958 31.3885 29.4971 31.3296 29.488C26.8872 29.488 22.4449 29.4866 18.003 29.4839C17.8611 29.4839 17.6088 29.5767 17.6074 29.3495C17.6074 29.0901 17.87 29.2037 18.0166 29.203C20.2399 29.1936 22.4652 29.1956 24.6905 29.1956Z"
        fill="#EC6D99"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_830">
        <rect
          width={26}
          height={26}
          fill="white"
          transform="translate(11.661 11)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default RedSVG;
