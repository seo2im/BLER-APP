import axios from 'axios'
import key from '../../../secret'

export type tUser = {
    userNum:  number;
    nickname: string;
}
export type tUserNumAPI  = {
    code:    number;
    message: string;
    user:    tUser;
}

export const getAPI = async (nickname : string) => {
	const response = await axios({
		url : `https://open-api.bser.io/v1/user/nickname?query=${nickname}`,
		method : 'get',
		headers : {
			'accept' : 'application/json',
			'x-api-key' : key
		}
	})
	return response.data;
}