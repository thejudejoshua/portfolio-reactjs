import React from 'react'

const Success = () => {
  
    return (
        <>
            <header className="empty landing w-full flex flex-col items-center project-head">
                <div className="head w-full flex flex-col items-start justify-start">
                    <div className="not-found flex flex-col justify-center items-center w-full">
                        <svg viewBox="0 0 396 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M114.59 175.897C110.561 175.97 106.64 177.116 103.665 180.09C102.482 181.274 101.612 182.62 100.958 184.054C100.938 184.082 100.917 184.11 100.896 184.138L25.1721 355.104C24.6656 356.246 24.5166 357.515 24.7446 358.743C24.9727 359.971 25.5672 361.102 26.4499 361.986C27.3326 362.87 28.4623 363.466 29.6902 363.696C30.9181 363.926 32.187 363.779 33.3297 363.274L203.824 287.743C203.889 287.708 203.954 287.671 204.017 287.634C205.586 286.968 207.062 286.052 208.344 284.77C212.31 280.804 213.028 275.154 212.283 269.821C211.539 264.487 209.416 258.816 206.253 252.684C199.927 240.422 189.313 226.366 175.69 212.744C162.068 199.121 148.024 188.519 135.761 182.193C129.63 179.03 123.958 176.895 118.625 176.15C117.292 175.964 115.933 175.872 114.59 175.897ZM114.905 188.247C115.455 188.248 116.114 188.293 116.911 188.404C120.097 188.849 124.763 190.445 130.083 193.19C140.725 198.68 154.075 208.626 166.943 221.493C179.81 234.36 189.768 247.723 195.258 258.364C198.002 263.685 199.586 268.339 200.031 271.525C200.476 274.711 199.86 275.756 199.596 276.02C199.332 276.284 198.286 276.912 195.1 276.468C191.914 276.023 187.249 274.439 181.928 271.694C171.287 266.204 157.924 256.246 145.057 243.379C132.189 230.512 122.243 217.161 116.754 206.52C114.009 201.199 112.425 196.533 111.98 193.347C111.657 191.032 111.894 189.865 112.149 189.287L112.211 189.166V189.153C112.284 189.015 112.361 188.895 112.416 188.839C112.614 188.641 113.252 188.246 114.905 188.247ZM103.811 208.127C104.415 209.462 105.056 210.807 105.768 212.188C112.094 224.45 122.685 238.506 136.307 252.128C149.93 265.751 163.998 276.353 176.26 282.679C177.632 283.387 178.97 284.023 180.296 284.625L132.597 305.749C122.475 299.805 110.867 290.644 100.137 279.924C93.1593 272.938 86.8022 265.542 81.5502 258.376L103.811 208.127ZM75.8461 271.271C80.5319 277.161 85.7667 283.033 91.3873 288.661C100.349 297.617 109.817 305.556 118.989 311.78L42.975 345.461L75.8461 271.271Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M331.829 161.757C298.088 158.833 269.998 170.843 249.494 185.456C222.156 204.94 207.282 229.191 207.282 229.191C206.855 229.884 206.569 230.654 206.44 231.457C206.311 232.26 206.341 233.081 206.53 233.872C206.718 234.664 207.061 235.41 207.539 236.069C208.016 236.727 208.619 237.286 209.312 237.711C210.709 238.569 212.391 238.838 213.986 238.457C215.581 238.076 216.96 237.078 217.82 235.681C217.82 235.681 231.552 213.438 256.673 195.535C281.793 177.631 317.28 164.217 362.96 181.673C364.492 182.259 366.194 182.213 367.692 181.544C369.19 180.876 370.361 179.64 370.948 178.108C371.534 176.576 371.488 174.874 370.819 173.376C370.151 171.878 368.915 170.707 367.383 170.12C354.951 165.369 343.076 162.732 331.829 161.757Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M274.644 49.8379C273.011 49.6866 271.385 50.1897 270.123 51.2366C268.861 52.2835 268.066 53.7885 267.913 55.4212C267.913 55.4212 265.425 81.4402 250.813 108.607C236.2 135.774 210.303 163.507 161.614 168.053C159.981 168.206 158.476 169.001 157.429 170.263C156.382 171.525 155.879 173.152 156.03 174.784C156.183 176.417 156.978 177.922 158.241 178.969C159.503 180.016 161.129 180.519 162.762 180.368C215.766 175.419 245.811 144.034 261.713 114.468C277.616 84.9028 280.227 56.5693 280.227 56.5693C280.379 54.9364 279.876 53.3103 278.829 52.0482C277.782 50.7861 276.277 49.9911 274.644 49.8379Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M137.443 96.5469C127.265 96.5469 118.881 104.931 118.881 115.109C118.881 125.288 127.265 133.672 137.443 133.672C147.622 133.672 156.006 125.288 156.006 115.109C156.006 104.931 147.622 96.5469 137.443 96.5469ZM137.443 108.922C140.934 108.922 143.631 111.619 143.631 115.109C143.631 118.6 140.934 121.297 137.443 121.297C133.953 121.297 131.256 118.6 131.256 115.109C131.256 111.619 133.953 108.922 137.443 108.922Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M342.959 47.9648C330.674 47.9648 320.578 58.0606 320.578 70.3462C320.578 82.6318 330.674 92.7275 342.959 92.7275C355.245 92.7275 365.341 82.6318 365.341 70.3462C365.341 58.0606 355.245 47.9648 342.959 47.9648ZM342.959 60.3398C348.557 60.3398 352.966 64.7485 352.966 70.3462C352.966 75.9439 348.557 80.3525 342.959 80.3525C337.362 80.3525 332.953 75.9439 332.953 70.3462C332.953 64.7485 337.362 60.3398 342.959 60.3398Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M352.797 283.235C342.618 283.235 334.234 291.619 334.234 301.798C334.234 311.976 342.618 320.36 352.797 320.36C362.975 320.36 371.359 311.976 371.359 301.798C371.359 291.619 362.975 283.235 352.797 283.235ZM352.797 295.61C356.287 295.61 358.984 298.307 358.984 301.798C358.984 305.288 356.287 307.985 352.797 307.985C349.306 307.985 346.609 305.288 346.609 301.798C346.609 298.307 349.306 295.61 352.797 295.61Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M218.135 48.4854C216.494 48.4854 214.92 49.1372 213.76 50.2976C212.599 51.458 211.948 53.0318 211.948 54.6729V63.2532H203.367C201.726 63.2532 200.152 63.9051 198.992 65.0655C197.832 66.2258 197.18 67.7996 197.18 69.4407C197.18 71.0817 197.832 72.6555 198.992 73.8159C200.152 74.9763 201.726 75.6282 203.367 75.6282H211.948V84.2085C211.948 85.8495 212.599 87.4233 213.76 88.5837C214.92 89.7441 216.494 90.396 218.135 90.396C219.776 90.396 221.35 89.7441 222.51 88.5837C223.671 87.4233 224.323 85.8495 224.323 84.2085V75.6282H232.903C234.544 75.6282 236.118 74.9763 237.278 73.8159C238.438 72.6555 239.09 71.0817 239.09 69.4407C239.09 67.7996 238.438 66.2258 237.278 65.0655C236.118 63.9051 234.544 63.2532 232.903 63.2532H224.323V54.6729C224.323 53.0318 223.671 51.458 222.51 50.2976C221.35 49.1372 219.776 48.4854 218.135 48.4854Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M293.509 111.303C291.868 111.303 290.294 111.955 289.134 113.115C287.974 114.276 287.322 115.849 287.322 117.49C287.322 119.131 287.974 120.705 289.134 121.865L295.201 127.932L289.134 133.998C287.974 135.159 287.322 136.732 287.322 138.373C287.322 140.014 287.974 141.587 289.134 142.748C290.294 143.908 291.868 144.56 293.509 144.56C295.15 144.56 296.723 143.908 297.884 142.748L303.95 136.681L310.017 142.748C311.177 143.908 312.751 144.56 314.392 144.56C316.032 144.56 317.606 143.908 318.766 142.748C319.926 141.587 320.578 140.014 320.578 138.373C320.578 136.732 319.926 135.159 318.766 133.998L312.7 127.932L318.766 121.865C319.926 120.705 320.578 119.131 320.578 117.49C320.578 115.849 319.926 114.276 318.766 113.115C317.606 111.955 316.033 111.303 314.392 111.303C312.751 111.303 311.177 111.955 310.017 113.115L303.95 119.182L297.884 113.115C296.723 111.955 295.15 111.303 293.509 111.303Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M299.623 223.862C297.982 223.862 296.409 224.514 295.248 225.675C294.088 226.835 293.436 228.409 293.436 230.05V238.63H284.855C283.214 238.63 281.641 239.282 280.48 240.442C279.32 241.603 278.668 243.177 278.668 244.818C278.668 246.459 279.32 248.032 280.48 249.193C281.641 250.353 283.214 251.005 284.855 251.005H293.436V259.585C293.436 261.226 294.088 262.8 295.248 263.961C296.409 265.121 297.982 265.773 299.623 265.773C301.264 265.773 302.838 265.121 303.999 263.961C305.159 262.8 305.811 261.226 305.811 259.585V251.005H314.391C316.032 251.005 317.606 250.353 318.766 249.193C319.927 248.032 320.579 246.459 320.579 244.818C320.579 243.177 319.927 241.603 318.766 240.442C317.606 239.282 316.032 238.63 314.391 238.63H305.811V230.05C305.811 228.409 305.159 226.835 303.999 225.675C302.838 224.514 301.264 223.862 299.623 223.862Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M242.074 279.718C241.267 279.824 240.49 280.087 239.785 280.494C239.081 280.901 238.463 281.442 237.968 282.088C237.473 282.733 237.111 283.47 236.901 284.255C236.691 285.041 236.638 285.861 236.744 286.667C236.961 288.293 237.815 289.767 239.118 290.765C240.421 291.762 242.067 292.201 243.693 291.984C245.421 291.756 247.187 291.756 248.914 291.984C250.91 292.248 252.771 292.821 254.328 293.664C255.87 294.499 257.173 295.644 258.014 296.903C258.84 298.138 259.279 299.615 259.259 300.867C259.24 302.081 258.736 303.322 258.074 304.045C257.62 304.542 256.875 305.079 255.923 305.483C254.956 305.895 253.748 306.196 252.346 306.414C249.535 306.85 245.905 306.824 241.663 307.671C234.787 309.043 228.505 312.651 223.85 317.894C219.194 323.138 216.363 329.805 215.813 336.795C215.264 343.786 217.025 350.805 220.804 356.711C224.584 362.617 230.227 367.164 236.805 369.594C243.382 372.024 250.626 372.241 257.337 370.21C264.049 368.179 269.948 363.988 274.075 358.319C278.202 352.65 280.379 345.74 280.25 338.729C280.121 331.719 277.695 324.894 273.362 319.381C272.86 318.742 272.237 318.208 271.528 317.811C270.82 317.413 270.04 317.158 269.233 317.062C268.426 316.965 267.608 317.028 266.825 317.248C266.043 317.468 265.312 317.839 264.673 318.342C264.034 318.844 263.5 319.467 263.102 320.176C262.704 320.884 262.45 321.664 262.353 322.471C262.257 323.278 262.32 324.096 262.54 324.878C262.76 325.66 263.131 326.392 263.634 327.031C266.26 330.373 267.797 334.708 267.875 338.959C267.953 343.209 266.57 347.595 264.069 351.031C261.567 354.468 257.816 357.136 253.748 358.367C249.68 359.598 245.082 359.453 241.095 357.98C237.108 356.507 233.513 353.621 231.222 350.04C228.93 346.46 227.819 342 228.152 337.762C228.485 333.524 230.285 329.291 233.107 326.112C235.929 322.934 239.924 320.648 244.092 319.816C246.71 319.294 250.143 319.281 254.244 318.644C256.298 318.325 258.518 317.825 260.769 316.867C263.036 315.903 265.304 314.491 267.211 312.408C270.131 309.216 271.567 305.152 271.634 301.06C271.698 297.006 270.422 293.203 268.298 290.027C266.191 286.874 263.35 284.468 260.226 282.776C257.117 281.092 253.798 280.15 250.533 279.718C247.724 279.347 244.883 279.347 242.074 279.718Z" fill="#002822" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M80.5712 25.4389C77.0209 24.5039 73.3008 24.5226 69.7551 25.4751C66.2094 26.4276 62.981 28.2767 60.3772 30.865C59.7993 31.4382 59.3402 32.1197 59.0261 32.8705C58.7121 33.6214 58.5492 34.4268 58.5469 35.2407C58.5446 36.0546 58.7029 36.8609 59.0127 37.6135C59.3226 38.3661 59.7779 39.0502 60.3525 39.6266C61.5096 40.7899 63.0813 41.446 64.7221 41.4505C66.3629 41.4551 67.9384 40.8077 69.102 39.6508C70.1513 38.6078 71.5403 37.811 72.9692 37.4272C74.398 37.0433 75.9978 37.0383 77.4285 37.4151C78.8593 37.7919 80.2412 38.5767 81.2957 39.6146C82.3502 40.6525 83.1683 42.0331 83.5677 43.4576C84.2765 45.9854 83.8028 49.8048 83.5429 54.7449C83.413 57.2281 83.3957 60.0325 84.0503 63.0352C84.7139 66.0768 86.0621 69.2612 88.6184 71.9056C90.7635 74.1246 93.4868 75.651 96.4978 76.3287C99.5089 77.0064 102.624 76.7984 105.513 75.7123C108.402 74.6263 110.885 72.7312 112.704 70.2379C114.523 67.7445 115.561 64.8126 115.713 61.7301C115.754 60.9182 115.634 60.1064 115.361 59.3408C115.088 58.5753 114.666 57.871 114.121 57.2684C113.575 56.6657 112.916 56.1764 112.182 55.8285C111.447 55.4805 110.651 55.2807 109.84 55.2404C109.028 55.1997 108.216 55.3194 107.45 55.5926C106.685 55.8658 105.98 56.2871 105.378 56.8325C104.775 57.3779 104.286 58.0368 103.938 58.7714C103.59 59.5059 103.39 60.3019 103.35 61.1137C103.319 61.7378 103.065 62.4459 102.697 62.9506C102.329 63.4555 101.735 63.903 101.151 64.1229C100.566 64.3428 99.8265 64.393 99.2169 64.2558C98.6075 64.1187 97.9594 63.7504 97.5251 63.3011C96.9861 62.7439 96.433 61.7098 96.1474 60.4007C95.8535 59.0528 95.7909 57.3612 95.8936 55.3976C96.1009 51.444 97.1782 46.1574 95.4827 40.1101C94.4915 36.575 92.5886 33.3679 89.9721 30.7926C87.3556 28.2172 84.1216 26.3739 80.5712 25.4389Z" fill="#002822" />
                        </svg>
                        <div className="head-text w-full flex flex-row items-center justify-start">
                            <div className="head-text-top w-full text-center flex flex-col">
                                <h3 className="h2">
                                    <span id='round'>
                                        Message sent!
                                    </span>
                                </h3>
                                <p className="p1">Thank you for sending your message, I will review it shortly. In the meantime, you can connect on <a href='https://instagram.com/jude.desgn' target='__blank'>Instagram</a> for a closer look at my work.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Success