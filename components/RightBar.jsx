import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />

          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Images
        </Typography>
        <ImageList cols={3} rowHeight={100} borderRadios={20}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/19521931/pexels-photo-19521931/free-photo-of-grassy-valley-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/19521929/pexels-photo-19521929/free-photo-of-stars-in-the-sky-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/19521924/pexels-photo-19521924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/19526681/pexels-photo-19526681/free-photo-of-photo-of-a-modern-wooden-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/19526680/pexels-photo-19526680/free-photo-of-bathroom-in-a-retro-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/19630312/pexels-photo-19630312.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/19630331/pexels-photo-19630331.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/19777018/pexels-photo-19777018.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
