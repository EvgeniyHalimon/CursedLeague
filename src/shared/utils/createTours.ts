const removeDuplicatePairs = (arr: string[]): string[] => {
  const uniquePairs = new Set();
  
  for (const item of arr) {
    const [first, second] = item.split(' : ').sort((a: string, b: string) => a.localeCompare(b));
    const sortedItem = `${first} : ${second}`;
  
    uniquePairs.add(sortedItem);
  }
  
  return [...uniquePairs] as string[];
};

const createPairs = (mages: string[]): string[] => {
  const matches = [];
  //it find opponents for each player
  for (let i = 0; i < mages.length; i++) {
    const shallowCopy = mages.slice();
    shallowCopy.splice(i, 1);
    matches.push([...shallowCopy]);
  }

  const possiblePairs = [];
  //it creates match with each player
  for (let i = 0; i < matches.length - 1; i++) {
    const pairs = matches[i].map((man) => {
      return `${mages[i]} : ${man}`;
    });
    possiblePairs.push(pairs);
  }
  return removeDuplicatePairs(possiblePairs.flat());
};

const isInclude = (a: string[], b: string[]) => {
  return b.map((name: string) => {
    return a.some(keyword => keyword.includes(name));
  }).some(s => s === true);
};

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
  
const createTours = (pairs: string[], players: string[]) => {
  const maxTourSize = Math.floor(players.length / 2);
  const uniqueMatches: string[][] = [];
  
  while (pairs.length > 0) {
    const pairsCopy = [...pairs];
    shuffleArray(pairsCopy);
  
    pairsCopy.forEach((pair: string) => {
      let addedToExistingTour = false;
      for (const tour of uniqueMatches) {
        const playersInPair = pair.split(' : ');
        if (!isInclude(tour, playersInPair) && tour.length < maxTourSize) {
          tour.push(pair);
          addedToExistingTour = true;
          pairs.splice(pairs.indexOf(pair), 1);
          break; 
        }
      }
  
      if (!addedToExistingTour) {
        uniqueMatches.push([pair]);
        pairs.splice(pairs.indexOf(pair), 1);
      }
    });
  }
  return uniqueMatches;
};
  


export {
  createTours,
  createPairs,
};