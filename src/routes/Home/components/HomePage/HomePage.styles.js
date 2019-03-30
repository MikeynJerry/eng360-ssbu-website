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
    width: '20vw',
    height: '20vw',
    borderRadius: '50%',
    backgroundImage:
      'url(https://i.kinja-img.com/gawker-media/image/upload/s--NrSaE4S8--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/iuzt6qgk49nkz4dwr1dz.jpg)',
    backgroundPosition: '50% 50%',
    zIndex: '100'
  },
  smash: {
    position: 'absolute',
    left: 0,
    top: 64,
    height: 'calc(100vh - 35vh - 84px)',
    width: 'calc(50vw - 10px)',
    backgroundColor: 'red'
  },
  spirits: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 'calc(50vh - 64px)',
    width: '48vw',
    backgroundColor: 'lightgreen'
  },
  online: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 'calc(48vh - 64px)',
    width: '52vw',
    backgroundColor: 'yellow'
  },
  vault: {
    position: 'absolute',
    right: 0,
    bottom: 'calc(48vh - 64px)',
    height: '20vh',
    width: '52vw',
    backgroundColor: 'pink'
  },
  games: {
    position: 'absolute',
    right: 0,
    top: 64,
    height: 'calc(100vh - (48vh - 64px) - 20vh - 64px)',
    width: '52vw',
    backgroundColor: 'blue'
  }
})
