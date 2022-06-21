import { Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
    return (
        <Grid container>

            <Grid item xs={6}>
                <Typography>Nro Productos</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>3 items</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Subtotal</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>{`$${ 155 } `}</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Impuestos (15%)</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>{`$${ 23 } `}</Typography>
            </Grid>

            
            <Grid item xs={6} sx={{mt:2}}>
                <Typography variant="subtitle1">Total:</Typography>
            </Grid>
            <Grid item xs={6} sx={{mt:2}}    display='flex' justifyContent='end'>
                <Typography variant="subtitle1">{`$${ 178 } `}</Typography>
            </Grid>

        </Grid>
    )
}
