import axios from 'axios'
import key from '../../../secret'

export type tUserRank = {
    userNum:  number;
    mmr:      number;
    nickname: string;
    rank:     number;
}
export type tUserRankAPI = {
    code:     number;
    message:  string;
    userRank: tUserRank;
}

export const getAPI = async (userNum : number, seasonId : number, matchingTeamMode: number) => {
	const response = await axios({
		url : `https://open-api.bser.io/v1/rank/${userNum}/${seasonId}/${matchingTeamMode}`,
		method : 'get',
		headers : {
			'accept' : 'application/json',
			'x-api-key' : key
		}
	})
	return response.data;
}

