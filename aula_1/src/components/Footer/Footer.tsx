import { Box, Typography } from '@mui/material';
import { theme } from '../../../styles/theme';

const Footer = () => {
  return (
    <Box
      bgcolor={theme.colors.secondaryColor}
      height={'4rem'}
      padding={theme.sizes.onePx}
    >
      <Typography
        color={theme.colors.white}
        fontSize={theme.sizes.medium}
        textAlign={'center'}
      >
        Diego Lima da Silva &copy;
      </Typography>
    </Box>
  );
};

export default Footer;
