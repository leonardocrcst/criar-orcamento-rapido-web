import {DataListType} from "./DataListType.ts";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

interface DataListProps {
  items: DataListType[]
}

export const DataList = (props: DataListProps) => {

  function listItem(item: DataListType) {
    return <Card sx={{display: 'flex', marginBottom: 1}} key={item.itemId}>
      <CardMedia
        component={'img'}
        sx={{width: 64, marginBottom: 2, marginTop: 2, paddingLeft: 2, paddingRight: 2}}
        image={item.avatar}
        alt={'Imagem representativa'}
      />
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{flex: '1 0 auto'}}>
          <Typography component={'div'} variant={'h6'}>
            {item.title}
          </Typography>
          <Typography component={'div'} variant={'subtitle1'} color={'text.secondary'}>
            {item.subtitle}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  }

  return (
    <>
      {props.items.length > 0 && props.items.map(item => {
        return listItem(item)
      })}
    </>
  )
}
