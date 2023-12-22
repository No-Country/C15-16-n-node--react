import {useState}from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  CardActions,
  Box,
  Stack,
} from '@mui/material';
import {
  Comment as CommentIcon,
  Repeat as RepeatIcon,
  Favorite as FavoriteIcon,
  Delete as DeleteIcon,
  Bookmark as BookmarkIcon,
} from '@mui/icons-material';

  const FeedItem = () => {
  const [like, setLike] = useState(false);
  const colorLike = like ? '#0B6350' : '##fb0061';
  const favorite =() => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  }

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src="../../assets/perfil1.png" alt="User Avatar" />}
        title="Username"
        subheader="2h ago" 
      />
      <CardContent>
        <Typography variant="body1">
          Contenido del comentario. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" sx={{ width: '100%' }} color="##0B6350">
          <IconButton>
            <CommentIcon />
            <Typography>10</Typography>
          </IconButton>
          <IconButton>
            <RepeatIcon />
            <Typography>20</Typography>
          </IconButton>
          <IconButton>
            <FavoriteIcon />
            <Typography>30</Typography>
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};



const FeedItemBox = () => {
  return (
    <Box sx={{ width: '80%', maxWidth: '884px', margin: '40px auto' }}>
      <FeedItem />
    </Box>
  );
};

export default FeedItemBox;
