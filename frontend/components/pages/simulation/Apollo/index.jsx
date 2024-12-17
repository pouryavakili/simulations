import { Box } from "@mui/material"
import ApolloFirstHeader from "./ApolloFirstHeader"
import ApolloDialog from "./ApolloDialog"
import { useEffect, useState } from "react";
import ApolloItem from "./ApolloItem";
import { useApolloStore } from "@/store/Apollo/useApolloStore";

const Apollo = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const { apolloListItems } = useApolloStore()
    return(
        <Box sx={{ height : "100%" }}> 
            <ApolloFirstHeader handleClickOpenDialog={handleClickOpen}/>
            <ApolloDialog handleClose={handleClose} open={open}/>
            <Box sx={{ height : '100%' , overflow : "auto" }}>
              {apolloListItems.length && apolloListItems.map((item) => {
                return <ApolloItem numberCustomer={item.number_customer} title={item.title}/>
              })}
            </Box>
        </Box>
    )
}
export default Apollo