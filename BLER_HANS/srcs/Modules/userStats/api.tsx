import axios from 'axios'
import key from '../../../secret'

export const getAPI = async (userNum : number, seasonId : number) => {
	const response = await axios({
		url : `https://open-api.bser.io/v1/user/stats/${userNum}/${seasonId}`,
		method : 'get',
		headers : {
			'accept' : 'application/json',
			'x-api-key' : key
		}
	})
	return response.data;
}

export type tUserStatsAPI = {
    code:      number;
    message:   string;
    userStats: tUserStat[];
}

export type tUserStat = {
    seasonId:          number;
    userNum:           number;
    matchingMode:      number;
    matchingTeamMode:  number;
    mmr:               number;
    nickname:          string;
    rank:              number;
    rankSize:          number;
    totalGames:        number;
    totalWins:         number;
    rankPercent:       number;
    averageRank:       number;
    averageKills:      number;
    averageAssistants: number;
    averageHunts:      number;
    top1:              number;
    top2:              number;
    top3:              number;
    top5:              number;
    top7:              number;
    characterStats:    tCharacterStat[];
}

export type tCharacterStat = {
    characterCode: number;
    totalGames:    number;
    usages:        number;
    maxKillings:   number;
    top3:          number;
    wins:          number;
    top3Rate:      number;
    averageRank:   number;
}
