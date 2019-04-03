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
      'url(https://i.kym-cdn.com/photos/images/original/001/316/888/f81.jpeg)',
    height: 200
  },
  quad2: {
    backgroundColor: 'green',
    backgroundImage:
      'url(https://cdn.stockphotosecrets.com/wp-content/uploads/2018/08/hide-the-pain-stockphoto-840x560.jpg)',
    height: 200
  },
  quad3: {
    backgroundColor: 'blue',
    backgroundImage:
      'url(http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg)',
    height: 200
  },
  quad4: {
    backgroundColor: 'yellow',
    backgroundImage:
      'url(https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-1-5a39121d2fd9b__700.jpg)',
    height: 200
  }
})
