import React from "react";
import PropTypes from "prop-types";

export const LinkedInIcon = ({ fill }) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="title"
  >
    <title id="title">LinkedIn Icon</title>
    <path
      fill={fill}
      d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0"
    />
  </svg>
);
LinkedInIcon.defaultProps = {
  fill: "#fff",
};
LinkedInIcon.propTypes = {
  fill: PropTypes.string,
};

export const NextArrowIcon = ({ fill, size }) => (
  <svg
    viewBox="0 0 512 512"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="title"
  >
    <title id="title">Next Arrow Icon</title>
    <path
      d="M477.66 250.12l-11.31-11.32a7.85 7.85 0 00-1.79-1.33L387.14 160a8 8 0 00-11.32 0l-11.32 11.35a8 8 0 000 11.32L421.83 240H37.66a5.65 5.65 0 00-5.66 5.65v20.7a5.65 5.65 0 005.66 5.65h384.17l-57.33 57.33a8 8 0 000 11.32L375.82 352a8 8 0 0011.32 0l77.42-77.43a7.85 7.85 0 001.79-1.33l11.31-11.32a8.56 8.56 0 000-11.76z"
      fill={fill}
    />
  </svg>
);
NextArrowIcon.defaultProps = {
  fill: "#fff",
  size: 32,
};
NextArrowIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export const LeaveSiteIcon = ({ fill, size }) => (
  <svg
    viewBox="0 0 512 512"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="title"
  >
    <title id="title">Leave Site Icon</title>
    <path
      d="M440 320h-16a8 8 0 00-8 8v88H96V96h88a8 8 0 008-8V72a8 8 0 00-8-8H64v384h384V328a8 8 0 00-8-8z"
      fill={fill}
    />
    <path fill={fill} d="M256 64l80 80-176 176 32 32 176-176 80 80V64H256z" />
  </svg>
);
LeaveSiteIcon.defaultProps = {
  fill: "#fff",
  size: 32,
};
LeaveSiteIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export const GitHubIcon = ({ fill, size }) => (
  <svg
    viewBox="0 0 512 512"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="title"
  >
    <title id="title">GitHub Icon</title>
    <path
      d="M255.78 31.86C132 31.86 31.57 132.24 31.57 256.08c0 99.06 64.24 183.11 153.33 212.76 11.2 2.07 15.32-4.87 15.32-10.79 0-5.34-.21-23-.31-41.74-62.37 13.56-75.54-26.46-75.54-26.46C114.18 363.94 99.48 357 99.48 357c-20.35-13.87 1.52-13.59 1.52-13.59 22.52 1.59 34.37 23.11 34.37 23.11 20 34.28 52.46 24.37 65.25 18.64 2-14.49 7.82-24.38 14.24-30-49.8-5.67-102.16-24.9-102.16-110.81 0-24.48 8.76-44.48 23.11-60.18-2.33-5.65-10-28.46 2.17-59.34 0 0 18.83-6 61.67 23a212.81 212.81 0 01112.29 0c42.8-29 61.6-23 61.6-23 12.2 30.88 4.53 53.69 2.2 59.34 14.38 15.7 23.08 35.7 23.08 60.18 0 86.12-52.46 105.08-102.39 110.63 8.05 7 15.21 20.6 15.21 41.52 0 30-.26 54.15-.26 61.53 0 6 4 13 15.4 10.76C415.84 439.13 480 355.11 480 256.08c0-123.84-100.39-224.22-224.22-224.22z"
      fill={fill}
      fill-rule="evenodd"
    />
    <path
      d="M116.49 353.79c-.49 1.12-2.25 1.45-3.84.68s-2.54-2.25-2-3.36 2.24-1.47 3.86-.7 2.56 2.26 2 3.38zm-2.76-2.05M125.57 363.92c-1.07 1-3.16.53-4.58-1s-1.74-3.65-.65-4.66 3.12-.52 4.59 1 1.76 3.65.64 4.66zm-2.14-2.3M134.41 376.83c-1.37 1-3.62.06-5-1.93s-1.37-4.39 0-5.35 3.61-.09 5 1.89 1.38 4.42 0 5.39zm0 0M146.52 389.31c-1.23 1.35-3.84 1-5.76-.86s-2.5-4.37-1.28-5.73 3.88-1 5.81.86 2.54 4.39 1.23 5.73zm0 0M163.23 396.55c-.54 1.76-3.06 2.56-5.6 1.81s-4.2-2.83-3.69-4.6 3.06-2.6 5.62-1.8 4.2 2.81 3.67 4.59zm0 0M181.58 397.89c.06 1.85-2.09 3.39-4.76 3.42s-4.85-1.44-4.88-3.26 2.11-3.38 4.79-3.43 4.85 1.44 4.85 3.27zm0 0M198.66 395c.32 1.8-1.54 3.65-4.18 4.15s-5-.64-5.35-2.43 1.56-3.7 4.16-4.18 5 .63 5.37 2.46zm0 0"
      fill={fill}
    />
  </svg>
);
GitHubIcon.defaultProps = {
  fill: "#fff",
  size: 32,
};
GitHubIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export const PDFIcon = ({ fill, size }) => (
  <svg
    viewBox="0 0 512 512"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="title"
  >
    <title id="title">PDF Icon</title>
    <path
      d="M91 32a10.28 10.28 0 00-10.29 10.29v427.44A10.27 10.27 0 0091 480h330a10.27 10.27 0 0010.27-10.27V168.66v-.29a8.76 8.76 0 00-.08-1 10.4 10.4 0 00-.48-2 7.55 7.55 0 00-.38-.93 9.42 9.42 0 00-.47-.89c-.17-.3-.36-.58-.55-.86s-.42-.54-.65-.8l-.38-.42L301.89 35a10.29 10.29 0 00-7.24-3H91zm10.29 20.56h183.07v116.1A10.28 10.28 0 00294.63 179h116.1v280.44H101.27zm203.63 14.59l91.28 91.3h-91.28zm-72.75 143a26 26 0 00-7.71.82c-10.19 2.73-17.73 11.79-18.65 21.28s2.25 18.91 7.19 28.93c4.44 9 14.62 18.87 21.91 28.55-1.74 11.61-1.22 21.08-4.47 33.21s-8.42 20.06-12.73 31c-11.15 4.74-24.89 8.18-33.26 13.79-9.29 6.21-16.77 12.71-20.72 21.39s-1.94 20.29 5.52 27.75 19.14 9.48 27.83 5.54 15.18-11.37 21.39-20.66c5.61-8.37 9-22.14 13.77-33.3 10.93-4.3 18.84-9.47 31-12.73s21.59-2.73 33.21-4.46c9.68 7.29 19.52 17.46 28.56 21.91 10 4.93 19.38 8.15 28.88 7.22s18.57-8.52 21.3-18.71-1.35-21.19-9.11-26.74-17.44-7.54-28.59-8.28c-10-.66-23.66 3.29-35.68 4.76-9.19-7.31-17.62-11.6-26.51-20.49s-13.18-17.32-20.49-26.51c1.47-12 5.35-25.65 4.68-35.7-.74-11.15-2.7-20.89-8.25-28.64a25 25 0 00-19.06-9.91zm-.1 18.82c1.92-.34 2.13.33 3.56 2.32 1.9 2.65 4 9.41 4.62 18.68.23 3.39-1.7 9.4-1.81 13.35-2.05-3.35-6.68-7.58-8.17-10.62-4.11-8.33-5.61-15.29-5.29-18.54s0-3.36 4.51-4.57c1.12-.29 1.94-.52 2.58-.62zm19.21 82c4.12 4.55 6 9.15 10.37 13.54s9 6.28 13.54 10.41c-6 1.3-10.92.61-16.93 2.22s-9.9 4.67-15.75 6.55c1.89-5.86 4.91-9.82 6.53-15.85s1-10.88 2.24-16.87zm84.89 34.86c9.27.62 16.08 2.81 18.73 4.7s2.89 1.67 1.68 6.18-1.34 4.14-4.59 4.45-10.13-1.16-18.46-5.26c-3.07-1.51-7.32-6.2-10.69-8.28 3.93-.11 9.94-2 13.33-1.79zm-128.56 32.7c-1.88 3.47-3.2 9.63-5.1 12.46-5.16 7.71-10.47 12.5-13.44 13.84s-2.88 1.7-6.18-1.61-2.93-3.18-1.58-6.15 6.13-8.24 13.84-13.41c2.83-1.89 9-3.25 12.46-5.13z"
      fill={fill}
    />
  </svg>
);
PDFIcon.defaultProps = {
  fill: "#fff",
  size: 32,
};
PDFIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};
