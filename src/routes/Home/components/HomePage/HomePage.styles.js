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
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'auto',
    backgroundColor: 'black',
    borderRadius: '100%'
  },
  quad1: {
    backgroundColor: 'red',
    backgroundImage:
      'url(https://www.ssbwiki.com/images/thumb/0/02/SSBU-Smashville.png/1600px-SSBU-Smashville.png)'
  },
  quad2: {
    backgroundColor: 'green',
    backgroundImage:
      'url(https://cdn.stockphotosecrets.com/wp-content/uploads/2018/08/hide-the-pain-stockphoto-840x560.jpg)'
  },
  quad3: {
    backgroundColor: 'blue',
    backgroundImage:
      'url(http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg)'
  },
  quad4: {
    backgroundColor: 'yellow',
    backgroundImage:
      'url(https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-1-5a39121d2fd9b__700.jpg)'
  },
  header: {
    position: 'absolute',
    color: 'black',
    left: '50%',
    top: '80%',
    textAlign: 'center',
    width: '66%',
    transform: 'translateX(-50%) translateY(-50%)'
  },
  quadIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '66%',
    maxWidth: '300px',
    height: 'auto',
    transform: 'translateX(-50%) translateY(-50%)'
  }
})
