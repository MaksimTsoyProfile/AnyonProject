const randomColor = () => {
  const min = 1;
  const max = 6;
  const random = Math.floor(Math.random() * (max - min)) + min;
  switch (random) {
    case 1:
      return 'secondary';
    case 2:
      return 'danger';
    case 3:
      return 'success';
    case 4:
      return 'warning';
    case 5:
      return 'info';
    case 6:
      return 'light';
    default:
      return 'primary';
  }
};

export default randomColor;
