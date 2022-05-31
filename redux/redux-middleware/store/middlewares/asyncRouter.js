export const asyncRouter = jobs => store => next => action => {
    const matchJob = Object.entries(jobs).find(([k, v]) => k === action.type);
    if (matchJob) {
        matchJob[1](store, action);
    } else {
        next(action);
    }
};
