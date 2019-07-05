import Vue from 'vue'
import axios from 'axios'
var global_store = {
    namespaced: true,
    state: {
        storeData : null
    },
    mutations: {
        storeData : function (state, payload) {
            state.storeData = payload;
        }
    },
    actions: {
        storeData: function (context, payload) {
            axios.get("https://static.clewm.net/cli/flatkit/libs/jquery/bootstrap/dist/js/bootstrap_v3.0.js", {
            　　params: { 
                    
                }
            }).then(function (response) {
                context.commit("storeData", response.data)
                payload.callback(response.data)
            }).catch(function (response) {
                console.error(response.data)
            })
        }
    },
    getters: {
        storeData: function (state, getter) {
            return state.storeData;
        }
    }
}
export default global_store