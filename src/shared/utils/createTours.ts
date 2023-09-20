function makeRoundRobinPairings(players: string[]): string[][] {
  if (players.length % 2 == 1) {
    players.push('Отдыхает');
  }

  const playerCount = players.length;
  const rounds = playerCount - 1;
  const half = playerCount / 2;

  const tournamentPairings: string[][] = [];

  const playerIndexes: any = players.map((_, i) => i).slice(1);

  for (let round = 0; round < rounds; round++) {
    const roundPairings = [];

    const newPlayerIndexes = [0].concat(playerIndexes);
    const firstHalf = newPlayerIndexes.slice(0, half);
    const secondHalf = newPlayerIndexes.slice(half, playerCount).reverse();

    for (let i = 0; i < firstHalf.length; i++) {
      roundPairings.push(`${players[firstHalf[i]]} : ${players[secondHalf[i]]}`);
    }

    playerIndexes.push(playerIndexes.shift());
    console.log('TOUR: ',`${round}`, 'playerIndexes', playerIndexes);

    tournamentPairings.push(roundPairings);
    console.log('TOUR: ',`${round}`, 'tournamentPairings', tournamentPairings);
  }

  return tournamentPairings;
}

export {
  makeRoundRobinPairings,
};