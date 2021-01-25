import { combineReducers } from 'redux'
import userNum from './userNum/reducer'
import games from './games/reducer'
import userRank from './userRank/reducer'
import userStat from './userStat/reducer'

const Reducer = combineReducers({
	userNum,
	games,
	userRank,
	userStat
})

export default Reducer

export type tState = ReturnType<typeof Reducer>;