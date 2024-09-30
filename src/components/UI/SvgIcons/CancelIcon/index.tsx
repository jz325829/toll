import SvgIcon from '../index.tsx';

const CancelIcon = ({ ...props }) => (
  <SvgIcon width={24} height={24} {...props}>
    <path d="M18 6L6 18" stroke="#0C223F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6L18 18" stroke="#0C223F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
)

export default CancelIcon