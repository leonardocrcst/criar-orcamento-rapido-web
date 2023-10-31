import {Card as BaseCard, CardContent, Typography} from "@mui/material";
import React from "react";

interface CardProps {
  title: string
}

export const Card = (props: React.PropsWithChildren<CardProps>) => {
  return (
    <BaseCard variant={"outlined"}>
      <CardContent>
        <Typography variant={"h6"}>
          {props.title}
        </Typography>
        {props.children}
      </CardContent>
    </BaseCard>
  )
}
