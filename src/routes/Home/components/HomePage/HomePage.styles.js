export default theme => ({
  root: {
    ...theme.flexRowCenter,
    width: '100%',
    backgroundColor: 'black',
    display: 'flex'
  },
  col: {
    ...theme.flexColumnCenter,
    display: 'block',
    width: '100%'
  },
  circle: {
    position: 'absolute',
    top: 'calc(50vh - 20vh)',
    zIndex: '100',
    backgroundImage: 'url()'
  },
  quad1: {
    backgroundColor: 'red',
    marginLeft: '0',
    width: '100%',
    height: 200,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 5,
    borderBottomWidth: 2.5,
    borderRightWidth: 2.5
  },
  quad2: {
    backgroundColor: 'green',
    width: '100%',
    height: 200,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 5,
    borderLeftWidth: 2.5,
    borderBottomWidth: 2.5
  },
  quad3: {
    backgroundColor: 'blue',
    width: '100%',
    height: 200,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 5,
    borderTopWidth: 2.5,
    borderRightWidth: 2.5
  },
  quad4: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 200,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 5,
    borderTopWidth: 2.5,
    borderLeftWidth: 2.5
  }
})
