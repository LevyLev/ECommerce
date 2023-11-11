import { Alert } from 'react-bootstrap';

export default function MessageBox({
  variant = 'info',
  children,
}: {
  variant?: string;
  children: React.ReactNode;
}): JSX.Element {
  return <Alert variant={variant}>{children}</Alert>;
}
