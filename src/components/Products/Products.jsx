import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
    {id:1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f9b52c1f-ca36-4492-8836-7a84c6bfd789/quest-3-mens-running-shoe-FHR8DM.png'},
    {id:2, name: 'Macbook', description: 'Apple Macbook.', price:'$10', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/air13teaser.jpg' },
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=> (
                    <Grid item key= {product.id} xs={12} sm={6} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products





