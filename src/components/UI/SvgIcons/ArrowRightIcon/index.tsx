import SvgIcon from '../index';

const ArrowRightIcon = ({ ...props }) => (
  <SvgIcon width={24} height={24} color="none" {...props}>
    <path d="M5 12H19" stroke="#0C223F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 19L19 12L12 5" stroke="#0C223F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default ArrowRightIcon;
