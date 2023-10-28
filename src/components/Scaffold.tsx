import {Sidebar} from "./Scaffold/Sidebar.tsx";
import {Grid} from "@mui/material";
import {Wrapper} from "./Scaffold/Wrapper.tsx";
import {useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export const Scaffold = () => {
  return <RouterProvider router={router}/>
}

const CriarOrcamento = () => {
  const [
    titleState,
    setTitleState
  ] = useState<string>("Página inicial")

  const [
    sidebarState,
    setSidebarState
  ] = useState<"open" | "close">("open")

  const toggleSidebar = () => {
    setSidebarState(sidebarState === "open" ? "close" : "open");
  }

  const handlePageTitle = (title: string) => {
    setTitleState(title)
  }

  return (
    <Grid container height={"100vh"}>
      <Sidebar opened={sidebarState === "open"} setTitleState={handlePageTitle}/>
      <Wrapper fullSize={sidebarState !== "open"} toggleSidebar={toggleSidebar} pageTitle={titleState}/>
    </Grid>
  )
}

const router = createBrowserRouter([
  {path: "*", Component: CriarOrcamento}
])
