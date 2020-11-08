import React from 'react'
import { Product } from '../../interfaces'
import Grid from '@material-ui/core/Grid'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

type Props = {
  items: Product[]
  width: Number
}


function List({ items }: Props) {

    return (
      <Grid container spacing={3}>
        {items.map((product) => (
          <Grid item xs={12} sm={6} xl={3} lg={3} key={product.id}>
            <GridListTile>
              <img src={product.thumbnail} alt={product.name} />
              <GridListTileBar
                title={product.name}
                subtitle={<span>by: {product.name}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${product.name}`} className="color: 'rgba(255, 99, 71, 0.5)'">
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          </Grid>
      ))}
      </Grid>
    )
}

export default List

