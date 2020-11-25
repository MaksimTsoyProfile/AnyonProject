export const loading = () => {
  document.body.onload = () => {
    const element = document.querySelector('.preloader');
    element.classList.add('done');
  };
};

export const startLoading = () => {
  const element = document.querySelector('.preloader');
  element.classList.remove('done');
};

export const endLoading = () => {
  const element = document.querySelector('.preloader');
  element.classList.add('done');
};
