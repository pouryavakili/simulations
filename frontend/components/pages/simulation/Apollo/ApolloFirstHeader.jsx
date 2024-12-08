import BaseButton from "@/components/common/BaseButton"
import Icon from "@/components/common/Icon"
import { Box, Button, styled, useTheme } from "@mui/material"

const HeadeFirst = styled("header")(({theme}) => ({
    padding : theme.spacing(3,4),
    display : "flex",
    justifyContent : "space-between", 
    alignItems : "center",
    borderBottom : `1px solid ${theme.palette.primary.primary_100}`
}))
const Bar = styled(Box)(({theme}) => ({
    border : `1px solid ${theme.palette.primary.primary_95}`,
    borderRadius : theme.spacing(10),
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    padding :  theme.spacing(2 , 3.5)
}))
const InfoOption = styled(Box)(({ theme }) => ({
    display : "flex",
    gap : theme.spacing(2)
}))
const MenuVertical = styled(Box)(({ theme }) => ({
    border : `1px solid ${theme.palette.primary.primary_95}`,
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    padding : theme.spacing(0 , 2),
    borderRadius : theme.spacing(1)
}))
const ApolloFirstHeader = ({ handleClickOpenDialog }) => {
    const theme = useTheme()
    return(
        <HeadeFirst>
            <Bar>
                <img src="/images/haederMenuApollo.svg"/>
            </Bar>
            <InfoOption>
                <BaseButton onClick={handleClickOpenDialog}>
                    <Icon size={"xs"} color={theme.palette.secondary.paper} isCustomVariant name={"mdi-light:plus"}/>
                New Sequence
                </BaseButton>
                <MenuVertical>
                    <Icon color={theme.palette.primary.primary_80} isCustomVariant name={"solar:menu-dots-bold"}/>
                </MenuVertical>
            </InfoOption>
        </HeadeFirst>
    )
}
export default ApolloFirstHeader