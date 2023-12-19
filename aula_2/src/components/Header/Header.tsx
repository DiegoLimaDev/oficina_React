import { Box, Typography } from '@mui/material';
import { theme } from '../../../styles/theme';

const Header = () => {
  return (
    <Box
      bgcolor={theme.colors.secondaryColor}
      height={'12rem'}
      padding={theme.sizes.onePx}
      display={'flex'}
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      <Typography fontSize={theme.sizes.large} color={theme.colors.white}>
        Oficina React
      </Typography>
      <img src={'/images/softexPE.svg'} height={100} />
    </Box>
  );
};

export default Header;
