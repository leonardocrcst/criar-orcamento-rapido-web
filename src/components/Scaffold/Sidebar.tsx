import {Grid} from "@mui/material";
import {Dashboard, ManageAccounts, People, PriceCheck, Print, ShoppingBasket} from "@mui/icons-material";
import {Sidemenu} from "./Sidebar/Sidemenu.tsx";
import logoCr from "../../assets/logo_cr_orcamento.png"

interface SidebarProps {
  opened: boolean,
  setTitleState: (title: string) => void
}

export const Sidebar = (props: SidebarProps) => {
  const menuItems = [
    {
      icon: <Dashboard />,
      primaryText: "Página inicial",
      href: "/"
    },
    {
      icon: <PriceCheck/>,
      primaryText: "Orçamentos",
      href: "/quotations"
    },
    {
      icon: <People/>,
      primaryText: "Clientes",
      href: "/clients"
    },
    {
      icon: <ShoppingBasket/>,
      primaryText: "Produtos / Serviços",
      href: "/solutions"
    },
    {
      icon: <Print/>,
      primaryText: "Relatório",
      href: "/reports"
    },
    {
      icon: <ManageAccounts/>,
      primaryText: "Usuários",
      href: "/users"
    }
  ]

  return (
    <Grid item sx={{width: props.opened ? "240px" : "56px"}}>
      <Grid container>
        <Grid item xs={12} padding={2}>
          <img alt={"Logomarca Criar Rápido - Orçamentos"} src={logoCr}/>
        </Grid>
      </Grid>
      <nav>
        <Sidemenu items={menuItems} showText={props.opened} setTitle={props.setTitleState}/>
      </nav>
    </Grid>
  );
}
