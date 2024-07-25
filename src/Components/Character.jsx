import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Character = ({name, image}) => {
  return (
    <Card>
          <CardMedia
            image={image}
            title="Rick Sanchez"
            sx={{height: 250, width: 250}}
          >
          </CardMedia>
        <CardContent>
          <Typography variant="h5">{name}</Typography>
        </CardContent>
      </Card>
  )
}

export default Character