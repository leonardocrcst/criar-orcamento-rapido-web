import {Content} from "../components/Scaffold/Wrapper/Content.tsx";
import {Grid} from "@mui/material";
import {AddItemFab} from "../components/Common/AddItemFab.tsx";

export const Users = () => {
  return (
    <>
      <AddItemFab redirectTo={"/user"}/>
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Usuários</p>
          </Grid>
        </Grid>
      </Content>
    </>
  )
}
