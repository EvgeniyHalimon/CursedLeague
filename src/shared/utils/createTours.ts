import { ITournamentResults } from '../types';

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

function countPoints(players: string[], matches: string[][], matchResults: string[][]): ITournamentResults[]{
  const playerPoints: any = {};

  players.forEach((player) => {
    playerPoints[player] = 0;
  });

  for (let i = 0; i < matches.length; i++) {
    const [playerA, playerB] = matches[i];
    const [scoreA, scoreB] = matchResults[i];

    if (scoreA > scoreB) {
      playerPoints[playerA] += 3;
    } else if (scoreA < scoreB) {
      playerPoints[playerB] += 3;
    } else if (scoreA === scoreB){
      playerPoints[playerA] += 1;
      playerPoints[playerB] += 1;
    }
  }
  
  const resultsArray = Object.keys(playerPoints).map((player) => ({
    player,
    points: playerPoints[player],
  }));

  return resultsArray.sort((a, b) => a.points > b.points ? -1 : 1);
}

export {
  makeRoundRobinPairings,
  countPoints,
};
