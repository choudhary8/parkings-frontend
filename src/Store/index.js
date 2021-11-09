import Vue from 'vue'
import auth from './modules/auth'
import Vuex from 'vuex'

Vue.use( Vuex );

const store = new Vuex.Store( {
    modules : {
        auth : auth
    }
})

export default store;