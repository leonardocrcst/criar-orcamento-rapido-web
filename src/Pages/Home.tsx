import {Grid} from "@mui/material";
import {Content} from "../components/Scaffold/Wrapper/Content.tsx";
import {Card} from "../components/Common/Card.tsx";

export const Home = () => {
  return (
    <Content>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card title={"Orçamentos"}>
            <p>Teste</p>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card title={"Totais"}/>
        </Grid>
      </Grid>
      <Grid container marginTop={0} spacing={2}>
        <Grid item xs={12}>
          <Card title={"Emitidos recentemente"}/>
        </Grid>
      </Grid>
      <Grid container marginTop={0} spacing={2}>
        <Grid item xs={6} lg={8}>
          <Card title={"Top clientes"}/>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Grid item xs={12}>
            <Card title={"Serviços em destaque"}/>
          </Grid>
          <Grid item xs={12}>
            <Card title={"Produtos em destaque"}/>
          </Grid>
        </Grid>
      </Grid>
    </Content>
  )
}
