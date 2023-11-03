import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";

interface AddItemFabProps {
  redirectTo?: string
}

export const AddItemFab = (props: AddItemFabProps) => {
  const navigateTo = useNavigate()

  return (
    <Fab
      onClick={() => {
        navigateTo(props.redirectTo ?? "#")
      }}
      color="primary" aria-label="add" sx={{position: "absolute", bottom: "32px", right: "32px"}}>
      <AddIcon/>
    </Fab>
  )
}
