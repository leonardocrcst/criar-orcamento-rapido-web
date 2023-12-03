import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";

interface AddItemFabProps {
  redirectTo?: string
  action?: any
}

export const AddItemFab = (props: AddItemFabProps) => {
  const navigateTo = useNavigate()

  return (
    <Fab
      onClick={() => {
        if (props.redirectTo) {
          navigateTo(props.redirectTo)
        }
        if (props.action) {
          props.action()
        }
      }}
      color="primary" aria-label="add" sx={{position: "absolute", bottom: "32px", right: "32px"}}>
      <AddIcon/>
    </Fab>
  )
}
