import fs from 'node:fs';

fs.readFile('./day2/datatest.txt', "utf8", (e, data) => {
  if (e) {
    console.error(e);
    return;
  }
  const rangesTemp = data.split('\n');
  const ranges = rangesTemp.join(',').split(',');

  let count = 0;
  const map = []
  ranges.map((range) => {
    const [start, end] = range.split('-');
    map.push([start, end]);
  })
  const regex = /(\w+)\1+/
  let i = 0
  let j = 0
  for (i; i < map.length; i++) {
    const array = map[i];
    console.log(array[0], array[1], 'ici')
    for (j = array[0]; j <= array[1]; j++) {
      console.log('j', j)
      if (j.toString().match(regex)) count += +j
    }
  }
  console.log(count);
})
