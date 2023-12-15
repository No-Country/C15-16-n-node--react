
import Header from './header';

import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  CardActions,
  Divider,
  Container,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import PropTypes from 'prop-types';

function FeedItem({ avatar, username, content, likes, comments, shares }) {
  return (
    <Card style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <Avatar src={avatar} alt={username} />
        <Typography variant="subtitle1" component="span" style={{ marginLeft: '8px' }}>
          {username}
        </Typography>
      </div>
      <CardContent>
        <Typography style={{ marginBottom: '8px' }}>{content}</Typography>
      </CardContent>
      <Divider />
      <CardActions style={{ justifyContent: 'flex-end' }}>
        <IconButton color="primary">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="caption" component="span">
          {likes}
        </Typography>
        <IconButton color="primary">
          <CommentIcon />
        </IconButton>
        <Typography variant="caption" component="span">
          {comments}
        </Typography>
        <IconButton color="primary">
          <ShareIcon />
        </IconButton>
        <Typography variant="caption" component="span">
          {shares}
        </Typography>
      </CardActions>
    </Card>
  );
}

FeedItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
};

export default function Feed() {
  const feedItems = [
    {
      avatar: 'https://example.com/avatar1.jpg',
      username: 'User1',
      content: 'This is the first tweet.',
      comments: 3,
      likes: 10,
      shares: 5,
    },
    {
      avatar: 'https://example.com/avatar2.jpg',
      username: 'User2',
      content: 'This is the second tweet.',
      comments: 1,
      likes: 5,
      shares: 2,
    },
    // Agregar más elementos de feed según sea necesario
  ];

  return (
    <Container>
      <Header />
      {feedItems.map((item, index) => (
        <FeedItem key={index} {...item} />
      ))}
    </Container>
  );
}