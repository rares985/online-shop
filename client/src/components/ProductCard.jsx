import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faChevronDown, faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    transform: 'scale(1)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter,
    }),
    marginBottom: theme.spacing(3),
  },
  mouseOver: {
    transform: 'scale(1.05)',
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [shadow, setShadow] = React.useState(1);

  const {
    headerText,
    subheaderText,
    imageUri,
    imageTitle,
    shortDescription,
    handleAddToCartClick,
  } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMouseOver = () => {
    if (!expanded) {
      setShadow(3);
      setMouseOver(true);
    }
  };

  const handleMouseOut = () => {
    setMouseOver(false);
    setShadow(1);
  };

  return (
    <Card
      elevation={shadow}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      raised
      className={clsx(classes.root, { [classes.mouseOver]: mouseOver })}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {headerText[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FontAwesomeIcon icon={faEllipsisV} />
          </IconButton>
        }
        title={headerText}
        subheader={subheaderText}
      />
      <CardMedia className={classes.media} image={imageUri} title={imageTitle} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FontAwesomeIcon icon={faHeart} />
        </IconButton>
        <IconButton aria-label="add to cart" onClick={handleAddToCartClick}>
          <FontAwesomeIcon icon={faCartPlus} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
ProductCard.propTypes = {
  headerText: PropTypes.string.isRequired,
  subheaderText: PropTypes.string,
  imageUri: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,

  handleAddToCartClick: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
  subheaderText: '',
};

export default ProductCard;
