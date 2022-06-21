import NextLink from 'next/link'
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Icon, Badge } from '@mui/material'
import { SearchOutlined, ShoppingCart } from '@mui/icons-material'



export const NavBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Teslo  |</Typography>
                        <Typography sx={{ ml: 0.5 }}>Shop</Typography>

                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: {xs: 'none', sm: 'block'}}}>
                    <NextLink href='/category/men' passHref>
                        <Link>
                            <Button>Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/women' passHref>
                        <Link>
                            <Button>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/kids' passHref>
                        <Link>
                            <Button>Niños</Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box flex={1} />


                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href='/cart' passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton></Link>
                </NextLink>

                <Button>
                    Menu
                </Button>
            </Toolbar>
        </AppBar>
    )
}
