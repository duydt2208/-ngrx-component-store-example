export interface Hero {
    rank: HeroRank;
    name: string;
    level: number;
}

export type HeroRank = 'SSS' | 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export const convertRankPoint = (rank: HeroRank) => {
    switch (rank) {
        case 'SSS':
            return 10000000;
        case 'S':
            return 1000000;
        case 'A':
            return 100000;
        case 'B':
            return 10000;
        case 'C':
            return 1000;
        case 'D':
            return 100;
        case 'E':
            return 10;
        case 'F':
            return 1;
    }
};

export const compareHeroRank = (rankA: HeroRank, rankB: HeroRank) => {
    const rankAPoint = convertRankPoint(rankA);
    const rankBPoint = convertRankPoint(rankB);

    if (rankAPoint < rankBPoint) {
        return -1;
    }

    if (rankAPoint > rankBPoint) {
        return 1;
    }

    return 0;
};
