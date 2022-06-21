import NextLink from 'next/link'

import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"


const EmptyPage = () => {
  return (
<ShopLayout title={"Carrito vacio"} pageDescription={"No hat artículos en el carrito de compra"}>
<Box
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        height= 'calc(100vh - 200px)'
        sx={{ flexDirection: {xs: 'column', sm:'row' }}}
        >
              <RemoveShoppingCartOutlined sx={{ fontSize : 100}} />
      <Box>
        <Typography>Su carrito está vacío</Typography>
        <NextLink href='/' passHref>
            <Link typography='h4' color='secondary'>
                Regresar
            </Link>
        </NextLink>

      </Box>

        </Box>
</ShopLayout>
  )
}

export default EmptyPage