import NextLink from 'next/link'
import { Chip, Grid, Typography, Link } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { ShopLayout } from '../../components/layouts'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Indica si la orde está pagada',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="Pagada" variant='outlined' />
                    : <Chip color="error" label="No Pagada" variant='outlined' />

            )
        }
    },

    {
        field: 'order',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${ params.row.id } `} passHref>
                    <Link underline='always'>
                        Ver Orden
                    </Link>
                </NextLink>

            )
        }
    }
]

const rows = [
    { id: 1, paid: true, fullname: 'Olinto Muñoz' },
    { id: 2, paid: false, fullname: 'Oliver Gonzalez' },
    { id: 3, paid: true, fullname: 'Yenny Medez' },
    { id: 4, paid: true, fullname: 'Valery Ramirez' },
    { id: 5, paid: false, fullname: 'Victoria Muñoz' },


]
const HistoryPage = () => {
    return (
        <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes de Olinto'}>
            <Typography variant='h1' component='h1'>
                Historial de ordenes
            </Typography>

            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    >

                    </DataGrid>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage