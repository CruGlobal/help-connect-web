import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <Box component="header" sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Typography component="h1" variant="h4">
          Helpscout Helper
        </Typography>
      </Container>
    </Box>
  );
};
