import {Card as BaseCard, CardContent, Typography} from "@mui/material";
import {PropsWithChildren} from "react";

interface CardProps {
  title: string
}

export const Card = (props: PropsWithChildren<CardProps>) => {
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
