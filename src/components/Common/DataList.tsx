import React from "react";
import {DataListType} from "./DataListType.ts";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

interface DataListProps {
  items: DataListType[]
}

export const DataList = (props: DataListProps) => {
  return (
    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
      <Divider/>
      {props.items.length > 0 && props.items.map(item => {
        return (
          <React.Fragment key={item.itemId}>
            <ListItem alignItems={"flex-start"}>
              {item.avatar &&
                  <ListItemAvatar>
                      <Avatar alt={`Imagem representativa de ${item.title}`} src={item.avatar}/>
                  </ListItemAvatar>
              }
              <ListItemText primary={item.title} secondary={
                item.subtitle && <>
                      <Typography
                          sx={{display: "inline"}}
                          component={"span"}
                          variant={"body2"}>
                        {item.subtitle}
                      </Typography>
                  </>
              }/>
            </ListItem>
            <Divider/>
          </React.Fragment>
        )
      })}
    </List>
  )
}
