import {AppBar, Divider, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import {AccountCircle} from "@mui/icons-material";
import React from "react";

interface HeaderProps {
  title?: string,
  toggleSidebar: () => void
}

export const Header = (props: HeaderProps) => {
  const [
    anchorEl,
    setAnchorEl
  ] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      color={"transparent"}
      position={"sticky"}
      style={{border: "none"}}
      elevation={0}
      variant={"outlined"}>
      <Toolbar sx={{paddingLeft: "10px !important", paddingRight: "16px !important"}}>
        <IconButton
          onClick={props.toggleSidebar}
          size={"large"}
          edge={"start"}
          color={"inherit"}
          aria-label={"menu"}
          sx={{mr: 2}}>
          <MenuIcon/>
        </IconButton>
        <Typography variant={"h6"} component={"div"} sx={{flexGrow: 1}}>
          {props.title ?? "Página sem título"}
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 48,
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Meus dados</MenuItem>
            <Divider/>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
