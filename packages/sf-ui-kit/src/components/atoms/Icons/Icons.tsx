import { FC } from 'react';
interface SvgProps {
  fill: string;
  width: string;
  className?: string;
}
const Eraser: FC<SvgProps & { width: string; className?: string }> = ({ fill, width, className }) => (
  <svg
    style={{ width, height: width }}
    className={className}
    viewBox={`0 0 24 24`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm6.605-17.581l-10.677 10.68 5.658 5.659 10.676-10.682-5.657-5.657z"
      fill={fill}
    />
  </svg>
);

const Pencil: FC<SvgProps & { width: string; className?: string }> = ({ fill, width, className }) => (
  <svg
    style={{ width, height: width }}
    className={className}
    viewBox={`0 0 24 24`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"
      fill={fill}
    />
  </svg>
);

const outlined = {
  Pencil,
  Eraser
};

const icons = {
  outlined
};

export default icons;
