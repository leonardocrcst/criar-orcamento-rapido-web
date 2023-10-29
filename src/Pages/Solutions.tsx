import {Content} from "../components/Scaffold/Wrapper/Content.tsx";
import {Grid} from "@mui/material";
import {AddItemFab} from "../components/Common/AddItemFab.tsx";

export const Solutions = () => {
  return (
    <>
      <AddItemFab/>
      <Content>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p>Produtos / Serviços</p>
        </Grid>
      </Grid>
    </Content>
    </>
  )
}
