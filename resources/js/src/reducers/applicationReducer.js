import actions from '../actions'
import applicationReducerInit from './applicationReducerInit'

const applicationReducer = (state = applicationReducerInit,action)=>{

    switch (action.type) {

        case actions.application.APP_GET.type: 
            return state

        case actions.application.APP_PENDING.type: 

            return {
                ...state,
                pending: true
            }
        case actions.application.APP_SUCCESS.type:
            return {
                ...state,
                pending: false,
                ...action.payload.application
            }
        
        case actions.application.APP_UPDATE_SUCCESS.type:
            return {
                ...state,
                pending:false,
                links: {
                    ...state.links,
                    drawer: action.payload.application.links.drawer
                }
            }            

        case actions.application.APP_ERROR.type:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        case actions.search.SEARCH_UPDATE.type: 

            return {
                ...state,
                search: action.input
            }

        case actions.search.SEARCH_UPDATE_FILTER.type: 

            return {
                ...state,
                searchfilter: action.filter
            }

        case actions.auth.AUTH_LOGOUT_SUCCESS.type:
            return {
                ...state,
                ...action.payload
            }

        case actions.form.DOWNLOAD_MARCS_SUCCESS.type:

        return  {
            ...state,
            marcLink: action.payload.zip
        }

        default:
            return state;
}

}

export default applicationReducer;