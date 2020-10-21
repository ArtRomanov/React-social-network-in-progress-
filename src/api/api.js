import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3f606ceb-0cfb-4adc-a22a-afeb1f2eb419'
    }
})
export const usersAPI = {
    getUsers (currentPage, pageSize)  {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
           return response.data
        })    
    },
    
    getProfile(userId = 2){
        
        return instance.get('profile/'+ userId )
        .then(response => {
            return response.data
        })
    },

    followPost (id)  {
        return  instance.post(`follow/${id}`)
        .then(response => {
           return response.data
        })    
    },
    unfollowDelete (id)  {
        return  instance.delete(`follow/${id}`)
        .then(response => {
           return response.data
        })    
    },
    getAuthUser(){
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },
    
}
export const authAPI = {
    
    me(){
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },
    
}

