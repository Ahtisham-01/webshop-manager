import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedSVG = () => {
    useEffect(() => {
        // Define your GSAP animation timeline here
        const timeline = gsap.timeline();

        // Select the paths you want to animate
        const pathsToAnimate = document.querySelectorAll('path');

        // Initial state (stroke-dasharray)
        gsap.set(pathsToAnimate, { 'stroke-dasharray': '100%' });

        // Animate the paths
        timeline.fromTo(
            pathsToAnimate,
            { 'stroke-dashoffset': '100%' },
            { 'stroke-dashoffset': '0%', duration: 2, ease: 'power1.inOut', stagger: 0.2 }
        );
    }, []);

    return (
        <div>
            <svg
            className='container mx-auto'
                width={1114}
                height={228}
                viewBox="0 0 1114 228"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M442 0V54C442 89.8985 412.899 119 377 119H279C245.863 119 219 145.863 219 179V202"
                    stroke="#A1A1AA"
                />
                <path d="M442 0L442 202" stroke="#A1A1AA" />
                <path
                    d="M442 0V59C442 92.1371 468.863 119 502 119H821C865.183 119 901 154.817 901 199V202"
                    stroke="#A1A1AA"
                />
                <path
                    d="M442 0V59C442 92.1371 468.863 119 502 119H1033C1077.18 119 1113 154.817 1113 199V202"
                    stroke="#A1A1AA"
                />
                <path
                    d="M442 0V55C442 90.3462 413.346 119 378 119H100C55.8172 119 20 154.817 20 199V202"
                    stroke="url(#paint0_linear_25_621)"
                    strokeWidth={2}
                />
                <g filter="url(#filter0_diii_25_621)">
                    <path
                        d="M19.994 202C23.3044 202 25.9881 204.684 25.9881 207.994C25.9881 211.304 23.3044 213.988 19.994 213.988C16.6836 213.988 14 211.304 14 207.994C14 204.684 16.6836 202 19.994 202Z"
                        fill="black"
                    />
                    <path
                        d="M19.994 203.397C22.5332 203.397 24.5915 205.455 24.5915 207.994C24.5915 210.533 22.5332 212.592 19.994 212.592C17.4549 212.592 15.3965 210.533 15.3965 207.994C15.3965 205.455 17.4549 203.397 19.994 203.397Z"
                        stroke="white"
                        strokeWidth="2.79309"
                    />
                </g>
                <g filter="url(#filter1_f_25_621)">
                    <path
                        d="M167 118.757C167 117.796 167.795 117.025 168.756 117.056L230 119L168.743 120.459C167.787 120.481 167 119.713 167 118.757Z"
                        fill="#86EFAC"
                    />
                </g>
                <path
                    d="M167 118.757C167 117.796 167.795 117.025 168.756 117.056L230 119L168.743 120.459C167.787 120.481 167 119.713 167 118.757Z"
                    fill="#86EFAC"
                />
                <defs>
                    <filter
                        id="filter0_diii_25_621"
                        x="0.0345364"
                        y="188.035"
                        width="39.919"
                        height="39.919"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.98273" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.395098 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_25_621"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_25_621"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.98273" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2={-1}
                            k3={1}
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_25_621"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="9.31031" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2={-1}
                            k3={1}
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect2_innerShadow_25_621"
                            result="effect3_innerShadow_25_621"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2.32758" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2={-1}
                            k3={1}
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect3_innerShadow_25_621"
                            result="effect4_innerShadow_25_621"
                        />
                    </filter>
                    <filter
                        id="filter1_f_25_621"
                        x={165}
                        y="115.055"
                        width={67}
                        height="7.40413"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation={1}
                            result="effect1_foregroundBlur_25_621"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_25_621"
                        x1="442.605"
                        y1="2.05758e-05"
                        x2="64.2692"
                        y2="265.163"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#003915" />
                        <stop offset={1} stopColor="#0FA647" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default AnimatedSVG;