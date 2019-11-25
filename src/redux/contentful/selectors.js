import { createSelector } from 'reselect'

const selectContentful = state => state.contentful;

export const selectContentfulModules = createSelector([selectContentful], (data) => 
    (
        data.data ? data.data.modules : {}
    )
)
