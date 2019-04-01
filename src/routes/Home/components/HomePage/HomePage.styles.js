export default theme => ({
  root: {
    ...theme.flexColumnCenter
  },
  section: {
    ...theme.flexColumnCenter
  },
  circle: {
    position: 'absolute',
    top: 'calc(50vh - 20vh)',
    zIndex: '100'
  },
  smash: {
    position: 'absolute',
    left: 0,
    top: 64,
    height: 'calc(100vh - 35vh - 84px)',
    width: 'calc(50vw - 10px)',
    backgroundColor: 'red',
    border: 5,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  spirits: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 'calc(50vh - 64px)',
    width: '48vw',
    backgroundColor: 'lightgreen',
    border: 5,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  online: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 'calc(48vh - 64px)',
    width: '52vw',
    backgroundColor: 'yellow',
    border: 5,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  vault: {
    position: 'absolute',
    right: 0,
    bottom: 'calc(48vh - 64px)',
    height: '20vh',
    width: '52vw',
    backgroundColor: 'pink',
    border: 5,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  games: {
    position: 'absolute',
    right: 0,
    top: 64,
    height: 'calc(100vh - (48vh - 64px) - 20vh - 64px)',
    width: '52vw',
    backgroundColor: 'blue',
    border: 5,
    borderColor: 'black',
    borderStyle: 'solid'
  }
})
