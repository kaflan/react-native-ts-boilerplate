import actionCreatorFactory from 'typescript-fsa';
import { IFilm } from './types'

const actionCreator = actionCreatorFactory('@@films');

export const start = actionCreator<void>('START');

export const initialized = actionCreator<void>('INITIALIZED');

export const finish = actionCreator<void>('FINISH');

export const filmListLoaded = actionCreator<IFilm[]>('FINISH_LOADED');

