import SvgIcon from '../index.tsx';

const SquareMenuIcon = ({ ...props }) => (
  <SvgIcon width={20} height={20} color="none">
    <svg
      fill="#000000"
      viewBox="0 0 278 278"
      {...props}
    >
      <g>
        <rect x="0" y="0" width="119.054" height="119.054" />
        <rect x="158.946" y="0" width="119.054" height="119.054" />
        <rect x="158.946" y="158.946" width="119.054" height="119.054" />
        <rect x="0" y="158.946" width="119.054" height="119.054" />
      </g>
    </svg>

  </SvgIcon>
);

export default SquareMenuIcon;
