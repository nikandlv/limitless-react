import {useState} from 'react'
export default function Main() {
    const [tab,setTab] = useState(1)
    return (
        <div>
            <div className="main">
                <div className="page-counter">
                    <p onClick={()=> setTab(0)} className={tab===0?"active":""}>1</p>
                    <p onClick={()=> setTab(1)} className={tab===1?"active":""}>2</p>
                    <p onClick={()=> setTab(2)} className={tab===2?"active":""}>3</p>
                </div>
                <span className="design-text">design</span>
                <div>
                    <p className="title">
                        Limitless possibilities
                    </p>
                    <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at vulputate ante. Praesent eros urna, efficitur a imperdiet et, suscipit eget mauris. Proin pretium sit amet massa vel ultrices. Maecenas eu egestas urna.
                    </p>
                    <br/>
                    <button className="big">explore</button>
                </div>
                <div className="mockup">
                <svg xmlns="http://www.w3.org/2000/svg"  width="504.397" height="612.698" viewBox="0 0 504.397 612.698">
                <defs>
                    <filter id="Path_164" x="0" y="87.506" width="380.485" height="397.777" filterUnits="userSpaceOnUse">
                            <feOffset dy="10" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="15" result="blur"/>
                            <feFlood floodColor="#505090" floodOpacity="0.102"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        <linearGradient id="linear-gradient" x1="-75.953" y1="74.842" x2="-75.953" y2="74.717" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#f89595"/>
                            <stop offset="1" stopColor="#ef5c5c"/>
                        </linearGradient>
                        <linearGradient id="linear-gradient-2" x1="-77.953" y1="74.842" x2="-77.953" y2="74.717" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#ffdfb0"/>
                            <stop offset="1" stopColor="#ffbb78"/>
                        </linearGradient>
                        <linearGradient id="linear-gradient-3" x1="-79.953" y1="74.842" x2="-79.953" y2="74.717" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#83e78d"/>
                            <stop offset="1" stopColor="#4bca55"/>
                        </linearGradient>
                        <filter id="Case" x="157.302" y="0" width="347.095" height="612.698" filterUnits="userSpaceOnUse">
                            <feOffset dy="10" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="15" result="blur-2"/>
                            <feFlood floodColor="#505090" floodOpacity="0.102"/>
                            <feComposite operator="in" in2="blur-2"/>
                            <feComposite in="SourceGraphic"/>
                            </filter>
                            <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#f3f3f3"/>
                            <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                            <linearGradient id="linear-gradient-5" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#fff"/>
                            <stop offset="1" stopColor="#f3f3f3"/>
                        </linearGradient>
                </defs>
                <g id="mockups" transform="translate(-793 -271)">
                    <g id="Group_508" data-name="Group 508" transform="translate(838 393.506)">
                    <g transform="matrix(1, 0, 0, 1, -45, -122.51)" filter="url(#Path_164)">
                        <path id="Path_164-2" data-name="Path 164" d="M.726,0H289.758c.4,0,.726.612.726,1.368V306.409c0,.756-.325,1.368-.726,1.368H.726c-.4,0-.726-.612-.726-1.368V1.368C0,.612.325,0,.726,0Z" transform="translate(45 122.51)" fill="#fff"/>
                    </g>
                    <g id="Group_53" data-name="Group 53" transform="translate(0.264 8.994)">
                        <path id="Path_165" data-name="Path 165" d="M0,32H290.485v.75H0Z" transform="translate(0 -17.009)" fill="#dde7ef"/>
                        <ellipse id="Ellipse_7" data-name="Ellipse 7" cx="2.998" cy="2.998" rx="2.998" ry="2.998" transform="translate(14.991 0)" fill="url(#linear-gradient)"/>
                        <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="2.998" cy="2.998" rx="2.998" ry="2.998" transform="translate(26.983 0)" fill="url(#linear-gradient-2)"/>
                        <ellipse id="Ellipse_9" data-name="Ellipse 9" cx="2.998" cy="2.998" rx="2.998" ry="2.998" transform="translate(38.976 0)" fill="url(#linear-gradient-3)"/>
                    </g>
                    </g>
                    <g id="iPhone_X_-_Light" data-name="iPhone X - Light" transform="translate(993.479 306)">
                    <g transform="matrix(1, 0, 0, 1, -200.48, -35)" filter="url(#Case)">
                        <path id="Case-2" data-name="Case" d="M34.644,0H222.451a34.644,34.644,0,0,1,34.644,34.644v453.41A34.644,34.644,0,0,1,222.451,522.7H34.644A34.644,34.644,0,0,1,0,488.054V34.644A34.644,34.644,0,0,1,34.644,0Z" transform="translate(202.3 35)" fill="#fff"/>
                    </g>
                    <g id="Button" transform="translate(258.31 121.558)">
                        <g id="Group_39" data-name="Group 39">
                        <path id="Rectangle_21" data-name="Rectangle 21" d="M0,0H1.039a2,2,0,0,1,2,2V56.348a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#fff"/>
                        <path id="Rectangle_101" data-name="Rectangle 101" d="M0,0H1.039a2,2,0,0,1,2,2V56.348a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#fff"/>
                        </g>
                    </g>
                    <g id="Button-2" data-name="Button" transform="translate(0 109.402)">
                        <path id="Rectangle_28" data-name="Rectangle 28" d="M2,0H3.039a0,0,0,0,1,0,0V36.467a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z" transform="translate(0)" fill="#fff"/>
                        <path id="Rectangle_103" data-name="Rectangle 103" d="M0,0H1.039a2,2,0,0,1,2,2V34.467a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(3.039 36.467) rotate(180)" fill="#fff"/>
                    </g>
                    <g id="Button-3" data-name="Button" transform="translate(0 156.81)">
                        <path id="Rectangle_29" data-name="Rectangle 29" d="M2,0H3.039a0,0,0,0,1,0,0V36.467a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z" transform="translate(0)" fill="#fff"/>
                        <path id="Rectangle_104" data-name="Rectangle 104" d="M0,0H1.039a2,2,0,0,1,2,2V34.467a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(3.039 36.467) rotate(180)" fill="#fff"/>
                    </g>
                    <g id="Button-4" data-name="Button" transform="translate(0 71.111)">
                        <path id="Rectangle_31" data-name="Rectangle 31" d="M1,0H3.039a0,0,0,0,1,0,0V19.449a0,0,0,0,1,0,0H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0Z" transform="translate(0)" fill="#fff"/>
                        <path id="Rectangle_149" data-name="Rectangle 149" d="M0,0H2.039a1,1,0,0,1,1,1V18.449a1,1,0,0,1-1,1H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(3.039 19.449) rotate(180)" fill="#fff"/>
                    </g>
                    <g id="Camera" transform="translate(156.809 15.195)">
                        <ellipse id="Ellipse_7-2" data-name="Ellipse 7" cx="4.558" cy="4.558" rx="4.558" ry="4.558" transform="translate(0 0)" fill="url(#linear-gradient-4)"/>
                        <circle id="Ellipse_8-2" data-name="Ellipse 8" cx="3.951" cy="3.951" r="3.951" transform="translate(0.608 0.608)" fill="url(#linear-gradient-5)"/>
                        <ellipse id="Ellipse_10" data-name="Ellipse 10" cx="2.735" cy="2.735" rx="2.735" ry="2.735" transform="translate(1.823 1.823)" fill="#f3f3f3"/>
                        <ellipse id="Ellipse_9-2" data-name="Ellipse 9" cx="0.912" cy="0.608" rx="0.912" ry="0.608" transform="translate(3.647 1.823)" fill="#fff"/>
                    </g>
                    <path id="Ear_Piece" data-name="Ear Piece" d="M2.627.5H36.056a2.127,2.127,0,1,1,0,4.255H2.627A2.127,2.127,0,0,1,2.627.5Z" transform="translate(111.029 17.43)" fill="#f3f3f3" stroke="#f9f8f8" strokeWidth="1"/>
                    <path id="Screen" d="M204.825,493.524H23.1A23.122,23.122,0,0,1,0,470.429V23.1A23.122,23.122,0,0,1,23.1,0H47.567a4.14,4.14,0,0,1,3.179,3.143c.1.44.2,1.015.325,1.681.233,1.282.522,2.872.952,4.478.556,2.078,3.011,8.866,11.262,8.951,3.112.032,22.515.039,38.244.039,28.934,0,62.135-.023,63.688-.039,8.25-.085,10.706-6.873,11.262-8.951.431-1.61.72-3.2.953-4.481.122-.669.226-1.241.325-1.678A4.007,4.007,0,0,1,180.906,0h23.918a23.122,23.122,0,0,1,23.1,23.1V470.429A23.122,23.122,0,0,1,204.825,493.524Z" transform="translate(16.41 14.587)" fill="#f5f4fc"/>
                    <path id="Home" d="M1.519,0H77.493a1.519,1.519,0,1,1,0,3.039H1.519A1.519,1.519,0,1,1,1.519,0Z" transform="translate(91.168 497.779)" fill="#e7e5ef"/>
                    </g>
                </g>
                </svg>

                </div>
            </div>
        </div>
    )
}