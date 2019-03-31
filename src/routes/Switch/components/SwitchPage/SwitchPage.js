import React from 'react'
import classNames from 'classnames'
import { FullSwitch } from 'components/Switch/Icons'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Scrollbar from 'react-scrollbars-custom'

const leftColorsRGB = [
  'rgb(130, 130, 130)',
  'rgb(255, 60, 40)',
  'rgb(10, 185, 230)',
  'rgb(230, 255, 0)',
  'rgb(255, 50, 120)'
]

const leftColors = ['gray', 'red', 'blue', 'yellow', 'pink']

const rightColorsRGB = [
  'rgb(130, 130, 130)',
  'rgb(255, 60, 40)',
  'rgb(10, 185, 230)',
  'rgb(230, 255, 0)',
  'rgb(30, 220, 0)'
]

const rightColors = ['gray', 'red', 'blue', 'yellow', 'green']

export const SwitchPage = ({
  classes,
  leftJoyconColor,
  rightJoyconColor,
  setLeftJoyconColor,
  setRightJoyconColor,
  selectMode,
  mode
}) => (
  <div className={classes.root}>
    <Scrollbar className={classes.scrollbar}>
      <div className={classes.leftText}>
        <Typography variant="h3">Left Joy-Con Color</Typography>
      </div>
      <div className={classes.rightText}>
        <Typography variant="h3">Right Joy-Con Color</Typography>
      </div>
      <div className={classes.container}>
        <div className={classNames(classes.buttons, classes.left)}>
          {leftColors.map((color, i) => (
            <Fab
              key={color}
              size="large"
              style={{ backgroundColor: leftColorsRGB[i] }}
              onClick={() => setLeftJoyconColor(color)}
              className={classes.fab}
            />
          ))}
        </div>

        <FullSwitch />
        <div className={classNames(classes.buttons, classes.right)}>
          {rightColors.map((color, i) => (
            <Fab
              key={color}
              size="large"
              style={{ backgroundColor: rightColorsRGB[i] }}
              onClick={() => setRightJoyconColor(color)}
              className={classes.fab}
            />
          ))}
        </div>
      </div>
      <Typography variant="h3" style={{ textAlign: 'center' }}>
        Favorite Way To Play
      </Typography>
      <div className={classes.cardContainer}>
        <Card
          className={classNames(
            classes.card,
            mode === 'tabletop' && classes.selected
          )}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.mariowiki.com/images/thumb/9/91/NS_Hardware_2.jpg/800px-NS_Hardware_2.jpg"
              style={{ pointerEvents: 'none' }}
            />
            <CardContent style={{ paddingBottom: 0 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Tabletop Mode
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => selectMode('tabletop')}>
              Select
            </Button>
          </CardActions>
        </Card>
        <Card
          className={classNames(
            classes.card,
            mode === 'handheld' && classes.selected
          )}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.mariowiki.com/images/thumb/7/71/NS_Handheld_Mode.png/800px-NS_Handheld_Mode.png"
              style={{ pointerEvents: 'none' }}
            />
            <CardContent style={{ paddingBottom: 0 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Handheld Mode
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => selectMode('handheld')}>
              Select
            </Button>
          </CardActions>
        </Card>
      </div>
    </Scrollbar>
  </div>
)

export default SwitchPage
