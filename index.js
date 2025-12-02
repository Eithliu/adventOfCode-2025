import fs from 'node:fs';

fs.readFile('./day1/data.txt', "utf8", (e, data) => {
  if (e) {
    console.error(e);
    return;
  }
  const formattedData = data.split('\n');

  const res = formattedData.map((datum) => {
    return {
      side: datum[0],
      count: datum.slice(1)
    }
  });
  let countOfZeros = 0;
  const currentCount = 50;
  let toCount = currentCount;
  let c = 0;
  res.map((obj) => {
    const numberofClicks = Number(obj.count);
    const sideToCount = obj.side;

    console.log('----------');
    console.log('De quel coté on va : ', sideToCount)
    console.log(sideToCount === 'R' ? `combien on ajoute : ${numberofClicks}` : `combien on retire : ${numberofClicks}`)
    console.log('----------');

    if (obj.side === 'L') {
      console.log(toCount, '-', numberofClicks)
      toCount -= numberofClicks;

    } else {
      console.log(toCount, '+', numberofClicks)
      toCount += numberofClicks;

    }
    if (toCount < 0) {
      toCount = (100 - Math.abs(toCount)) % 100;
    } else if (toCount >= 100) {
      toCount = (toCount - 100) % 100;
    }
    if (toCount === 0) countOfZeros++;

    console.log("le compte est égal à", toCount);
    console.log("le nombre de passage à zéro", countOfZeros);
    console.log('c le c', c);
  })
});
