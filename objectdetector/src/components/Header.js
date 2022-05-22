import { Typography,Box, useTheme } from "@mui/material";


const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: 'primary.main',
        padding:2
      }}
    >
      <Typography sx={{}}>
        Object Detector
      </Typography>
    </Box>
  );
};

export default Header;
