export default theme => ({
  root: {
    position: 'relative'
  },
  container: {
    display: 'flex'
  },
  buttons: {
    display: 'block',
    marginTop: 25
  },
  left: {
    marginRight: 25
  },
  right: {
    marginLeft: 25
  },
  middle: {},
  fab: {
    margin: '14px',
    display: 'block'
  },
  spacer: {
    width: '100%',
    height: 'calc(15vh - 64px)'
  },
  card: {
    maxWidth: 345,
    width: 345,
    margin: theme.spacing.unit * 0.5
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '-webkit-flex-flow': 'row wrap'
  },
  media: {
    height: 250,
    backgroundSize: 'contain'
  },
  leftText: {
    position: 'absolute',
    top: 0,
    left: 0,
    hyphens: 'none'
  },
  rightText: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  scrollbar: {
    width: '100vw !important',
    height: 'calc(100vh - 64px) !important',
    display: 'flex',
    flexDirection: 'row'
  },
  selected: {
    border: 'solid 3px',
    color: 'aqua'
  }
})
