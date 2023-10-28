import {Card, CardContent, Grid} from "@mui/material";
import {Content} from "../components/Scaffold/Wrapper/Content.tsx";

export const Home = () => {
  return (
    <Content>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card elevation={1}>
            <CardContent>
              Gráfico do mês com emissão de orçamentos
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card>
            <CardContent>
              Total criado, total fechado
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container marginTop={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              Tabela com os últimos criados
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Content>
  )
}
