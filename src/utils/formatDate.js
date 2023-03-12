const formatDate = date => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('ru', options)
    .format(new Date(date));
};

export default formatDate;
