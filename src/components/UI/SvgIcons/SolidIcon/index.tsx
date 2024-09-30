import SvgIcon from '../index.tsx';

const SolidIcon = ({ ...props }) => (
  <SvgIcon width={20} height={20} {...props}>
    <path d="M2.5 10H17.5" stroke="#73777E" {...props} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 5H17.5" stroke="#73777E" {...props} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 15H17.5" stroke="#73777E" {...props} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default SolidIcon;
