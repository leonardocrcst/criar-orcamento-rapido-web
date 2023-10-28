import {Content} from "../components/Scaffold/Wrapper/Content.tsx";
import {Grid} from "@mui/material";

export const Users = () => {
  return (
    <Content>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p>Usuários</p>
        </Grid>
      </Grid>
    </Content>
  )
}
