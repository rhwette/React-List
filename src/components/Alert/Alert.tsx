import { ReactNode } from 'react';
import './Alert.css';

interface AlertProps {
  //   text: string;
  //   children: string;
  children: ReactNode;
  onClose: () => void;
}

// const Alert = (props: AlertProps) => {
// const Alert = ({ text }: AlertProps) => {
const Alert = ({ children, onClose }: AlertProps) => {
  //   return <div className="alert alert-primary"> {text} </div>;
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
