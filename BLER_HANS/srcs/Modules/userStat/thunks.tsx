import { getAPI } from './api'
import { getApiAsync } from './actions'
import createAsyncThunk from '../Public/createAsyncThunks'

export const getUserStat = createAsyncThunk(getApiAsync, getAPI);