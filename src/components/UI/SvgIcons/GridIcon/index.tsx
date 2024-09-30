import SvgIcon from '../index.tsx';

const GridIcon = ({ ...props }) => (
  <SvgIcon width={20} height={20} {...props}>
    <path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z" stroke="#0C223F" {...props} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5003 2.5H11.667V8.33333H17.5003V2.5Z" stroke="#0C223F" {...props} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5003 11.6667H11.667V17.5H17.5003V11.6667Z" stroke="#0C223F" {...props} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.33333 11.6667H2.5V17.5H8.33333V11.6667Z" stroke="#0C223F" {...props} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default GridIcon;
