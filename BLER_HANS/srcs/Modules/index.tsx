import { combineReducers } from 'redux'
import userNum from './userNum/reducer'
import games from './games/reducer'
import userRank from './userRank/reducer'
import userStats from './userStats/reducer'

const Reducer = combineReducers({
	userNum,
	games,
	userRank,
	userStats
})

export default Reducer

export type tState = ReturnType<typeof Reducer>;