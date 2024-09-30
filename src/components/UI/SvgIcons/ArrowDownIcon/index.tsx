import SvgIcon from '../index.tsx';

const ArrowDownIcon = ({ ...props }) => (
  <SvgIcon width={20} height={20} color="none" {...props}>
    <path d="M5 7.5L10 12.5L15 7.5" stroke="#0C223F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default ArrowDownIcon;
