import {Grid} from "@mui/material";
import {Header} from "./Wrapper/Header.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../Pages/Home.tsx";
import {Clients} from "../../Pages/Clients.tsx";
import {Reports} from "../../Pages/Reports.tsx";
import {Solutions} from "../../Pages/Solutions.tsx";
import {Users} from "../../Pages/Users.tsx";
import {Quotations} from "../../Pages/Quotations.tsx";

interface WrapperProps {
  fullSize: boolean,
  toggleSidebar: () => void,
  pageTitle: string
}

export const Wrapper = (props: WrapperProps) => {
  return (
    <Grid
      item
      sx={{width: props.fullSize ? "calc(100% - 56px)" : "calc(100% - 240px)"}}>
      <Header toggleSidebar={props.toggleSidebar} title={props.pageTitle}/>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/clients"} element={<Clients />}/>
        <Route path={"/solutions"} element={<Solutions />}/>
        <Route path={"/reports"} element={<Reports />}/>
        <Route path={"/users"} element={<Users />}/>
        <Route path={"/quotations"} element={<Quotations/>}/>
      </Routes>
    </Grid>
  )
}
