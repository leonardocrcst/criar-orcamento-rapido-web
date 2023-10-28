import {Content} from "../components/Scaffold/Wrapper/Content.tsx";
import {Grid} from "@mui/material";

export const Clients = () => {
  return (
    <Content>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p>Clientes</p>
        </Grid>
      </Grid>
    </Content>
  )
}
