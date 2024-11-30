import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function plantCard(props) {


  // const image = props.data?.default_image ? props.data.default_image.original_url : `${props.data.id} id has no image`
  return <>
    {/* {console.log(image)} */}
    <div>
      {console.log(props.data)}
      <Card sx={{ maxWidth: 345 }}>
        {
          props.data?.default_image ?
            <CardMedia
              sx={{ height: 140 }}
              image={props.data.default_image.original_url}
              title={props.data.common_name}
            />
            :
            <></>
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.common_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.data.scientific_name[0]}
          </Typography>
        </CardContent>
      </Card>
    </div>

  </>
}


export default plantCard;