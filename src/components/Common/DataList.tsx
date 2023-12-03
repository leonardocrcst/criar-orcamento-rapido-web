import {DataListType} from "./DataListType.ts";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

interface DataListProps {
  items: DataListType[]
}

export const DataList = (props: DataListProps) => {
  const circleButton = {
    border: '1px solid #00000020',
    borderRadius: '50%',
    padding: '4px',
    cursor: 'pointer',
    marginLeft: '4px'
  }
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
      <Box sx={{display: 'flex', flexDirection: 'row', alignSelf: 'center', marginLeft: 'auto', paddingRight: '24px'}}>
        <Edit color={'info'} sx={circleButton}/>
        <Delete color={'error'} sx={circleButton}/>
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
