import { Button, Typography, Grid } from "@mui/material/";
function Navbar() {
  return (
    <Grid container bgcolor="darkgrey" padding={1}>
      <Grid item xs={9}>
        <Typography variant="h4" gutterBottom>
          train app
        </Typography>
      </Grid>
      <Grid item>
        <Button
          href="/"
          size="large"
          style={{ fontSize: "20px" }}
          variant="text"
        >
          all trains
        </Button>
        <Button
          href="/train"
          size="large"
          style={{ fontSize: "20px" }}
          variant="text"
        >
          search a train
        </Button>
      </Grid>
    </Grid>
  );
}
export default Navbar;