function sing() {
    const bottle = amount => `${amount > 1 ? 'bottles' : 'bottle'}`;
    const general = amount => `${amount} ${bottle(amount)} of beer on the wall, ${amount} ${bottle(amount)} of beer.`;
    const takeDown = amount => `Take one down and pass it around, ${amount} ${bottle(amount)} of beer on the wall.`;
    const noMoreBottles = 'Take one down and pass it around, no more bottles of beer on the wall.';
    const noMoreOnWall = 'No more bottles of beer on the wall, no more bottles of beer.';
    const goToStore = 'Go to the store and buy some more, 99 bottles of beer on the wall.'
    const arr = [];
    for (let i = 99; i >= 1; i--) {
        arr.push(general(i));
        if (i > 1) {
            arr.push(takeDown(i - 1))
        } else {
            arr.push(noMoreBottles);
            arr.push(noMoreOnWall);
            arr.push(goToStore)
        }
    }
  return arr;
}