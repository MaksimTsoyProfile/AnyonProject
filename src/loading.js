const loading = () => {
  document.body.onload = () => {
    const element = document.querySelector('.preloader');
    element.classList.add('done');
  };
};

export default loading;
