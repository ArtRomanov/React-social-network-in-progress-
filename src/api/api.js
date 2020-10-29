import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0a36b23d-0682-4e92-9916-d49497d5f2d4'
    }
})
export const usersAPI = {
    getUsers (currentPage, pageSize)  {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
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
    }
    
}

export const profileAPI = {

    getProfile(userId){
        
        return instance.get('profile/'+ userId )
        .then(response => {
            return response.data
        })
    },
    getStatus(userId){
        
        return instance.get('profile/status/'+ userId )
        .then(response => {
            return response.data
        })
    },
    updateStatus(status){
        
        return instance.put('profile/status',{status: status})

    },
    uploadPhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile)

        return instance.put('profile/photo', formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    uploadData(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    
    me(){
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post(`auth/login`,{email, password, rememberMe, captcha})
        .then(response => {
            return response.data
        })
    },
    logout(){
        return instance.delete(`auth/login`)
        .then(response => {
            return response.data
        })
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

