function positiveSum(arr) {
    return arr.reduce((sum, elem) => {
      if (elem > 0) sum += elem;
      return sum;
    }, 0);
  }