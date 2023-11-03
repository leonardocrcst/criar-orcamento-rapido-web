import {PropsWithChildren} from "react";
import {Box} from "@mui/material";
import {Card} from "./Card.tsx";

interface FormProps {
  title: string
}

export const Form = (props: PropsWithChildren<FormProps>) => {
  return (
    <Box
      noValidate
      autoComplete={"off"}
      component={"form"}>
      <Card title={props.title}>
        {props.children}
      </Card>
    </Box>
  )
}
