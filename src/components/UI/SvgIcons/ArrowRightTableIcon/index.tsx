import SvgIcon from '../index';

const ArrowRightTableIcon = ({ ...props }) => (
  <SvgIcon width={12} height={12} color="none" {...props}>
    <path d="M2.5 6H9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 2.5L9.5 6L6 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default ArrowRightTableIcon;
