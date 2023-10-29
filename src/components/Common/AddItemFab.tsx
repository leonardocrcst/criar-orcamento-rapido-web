import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export const AddItemFab = () => {
  return (
    <Fab color="primary" aria-label="add" sx={{position: "absolute", bottom: "32px", right: "32px"}}>
      <AddIcon/>
    </Fab>
  )
}
