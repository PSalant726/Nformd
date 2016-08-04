const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0,0,0,.6)',
    zIndex          : 10
  },
  content : {
    position        : 'absolute',
    top             : '50%',
    left            : '50%',
    transform       : 'translate(-50%, -52%)',
    border          : '1px solid #ccc',
    padding         : '0px',
    marginTop       : '18px',
    marginBottom    : '18px',
    zIndex          : 11,
    minWidth        : '520px',
    maxWidth        : '520px',
    maxHeight       : '820px',
    minHeight       : '800px',
    borderRadius    : '3px',
  }
};

module.exports = ModalStyle;
