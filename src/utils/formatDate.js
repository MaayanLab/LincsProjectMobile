export default (d) => {
  const date = new Date(d);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const time = date.getHours();
  return `${monthNames[monthIndex]} ${day}, ${year} at ${time}PM EST`;
};
