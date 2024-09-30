import SvgIcon from '../index.tsx';

const ArrowLeftIcon = ({ ...props }) => (
  <SvgIcon width={20} height={20} color="none" {...props}>
    <path d="M15.8332 10H4.1665" stroke="#0C223F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.99984 15.8332L4.1665 9.99984L9.99984 4.1665" stroke="#0C223F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default ArrowLeftIcon;
