import Divider from '@mui/material/Divider';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className='fixed-bottom'>
      <Divider variant='middle' />
      <footer className='mt-2'>
        <p className='text-center'>ScandiWeb Test Assignment</p>
      </footer>
    </div>
  );
};

export default Footer;
