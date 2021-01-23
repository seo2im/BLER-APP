import axios from 'axios'
import key from '../../secret'

export type tApi = {
    code:    number;
    message: string;
    data:    { [key: string]: number };
}


export const getAPI = async () => {
	return await axios({
		url : 'https://open-api.bser.io/v1/data/hash',
		method : 'get',
		headers : {
			'accept' : 'application/json',
			'x-api-key' : key
		}
	})
}