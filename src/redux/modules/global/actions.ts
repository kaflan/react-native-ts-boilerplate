import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('@@global');

export const start = actionCreator<void>('START');

export const initialized = actionCreator<void>('INITIALIZED');

export const finish = actionCreator<void>('FINISH');
