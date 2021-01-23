import { getAPI } from './api'
import { getApiAsync } from './actions'
import createAsyncThunk from './createAsyncThunks'

export const getApiThunk = createAsyncThunk(getApiAsync, getAPI);