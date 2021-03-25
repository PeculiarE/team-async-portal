// utils to delay promise
function wait(ms) {
  return (x) => new Promise((resolve) => setTimeout(() => resolve(x), ms));
}

export default wait;
