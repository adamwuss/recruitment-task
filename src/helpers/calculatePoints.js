const calculatePoints = (cash) => {
  if (cash >= 50 && cash < 100) return cash - 50;
  else if (cash > 100) return (2 * (cash - 100) + 50);
  return 0;
}

export default calculatePoints;
