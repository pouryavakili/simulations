import { Box } from "@mui/material"
import ApolloFirstHeader from "./ApolloFirstHeader"
import ApolloDialog from "./ApolloDialog"
import { useState } from "react";

const Apollo = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
        <Box>
            <ApolloFirstHeader handleClickOpenDialog={handleClickOpen}/>
            <ApolloDialog handleClose={handleClose} open={open}/>
        </Box>
    )
}
export default Apollo