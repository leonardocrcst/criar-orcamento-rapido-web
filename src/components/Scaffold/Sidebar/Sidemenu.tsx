import React from "react";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";


interface SidemenuProps {
  items: {
    icon: React.ReactNode,
    primaryText: string,
    href: string
  }[],
  showText: boolean,
  setTitle: (title: string) => void
}

export const Sidemenu = (props: SidemenuProps) => {
  const navigate = useNavigate()
  const navigateTo = (href: string) => {
    return navigate(href)
  }
  return (
    <List>
      {props.items.length > 0 && props.items.map((item) => {
        return (
          <ListItem key={item.primaryText} disablePadding>
            <ListItemButton onClick={() => {
              props.setTitle(item.primaryText)
              navigateTo(item.href)
            }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              {props.showText && <ListItemText primary={item.primaryText}/>}
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
