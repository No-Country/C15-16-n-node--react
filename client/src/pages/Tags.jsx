import { styled } from '@mui/system';
import {
  Paper,
  Typography,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PropTypes from 'prop-types';
import React, { useState } from "react";

import SearchBar from "../components/Search/Search";
import Header from "../components/barra_header/Header";

const TwitterFeed = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Topic = ({ hashtag, tweetCount }) => {
  const { primary, secondary } = hashtag;
  return (
    <ListItem>
      <ListItemText primary={`#${primary}`} secondary={`${secondary} Tweets`} />
    </ListItem>
  );
};

Topic.propTypes = {
  hashtag: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }),
  tweetCount: PropTypes.number,
};

const WhoToFollow = ({ user }) => {
  const { username, avatar, bio } = user;

  WhoToFollow.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div>
     
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={username} src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={username}
        secondary={
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>
        }
      />
      <IconButton color="primary">
        <PersonAddIcon />
      </IconButton>
    </ListItem>
    </div>
  );
};

const Widget = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const trendingTopics = [
    { hashtag: 'cactus', tweetCount: 12000 },
    { hashtag: 'Arbol de Jade', tweetCount: 8000 },
    { hashtag: 'Suculentas', tweetCount: 5000 },
  ];

  const suggestedUsers = [
    {
      username: 'JohnDoe',
      avatar: 'https://example.com/johndoe.jpg',
      bio: 'Web Developer | React Enthusiast',
    },
    {
      username: 'JaneDoe',
      avatar: 'https://example.com/janedoe.jpg',
      bio: 'Designer | UI/UX Expert',
    },
  ];

  return (
    <div>
    <SearchBar /> 
    <Header />
    <TwitterFeed elevation={3}>
      <Typography variant="h6" gutterBottom>
        Tendencias
      </Typography>
      <List>
        {trendingTopics.map((topic) => (
          <Topic key={topic.hashtag} {...topic} />
        ))}
      </List>
      <Divider />
      <Typography variant="h6" gutterBottom>
        Quien Seguir
      </Typography>
      <List>
        {suggestedUsers.map((user) => (
          <WhoToFollow key={user.username} user={user} />
        ))}
      </List>
    </TwitterFeed>
    </div>
  );
};

export default Widget;
