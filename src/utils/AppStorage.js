class AppStorage{
    
    storeToken(token){
        localStorage.setItem('token',token);
    }

    storeUser(user){
        localStorage.setItem('user',user);
    }

    storeData(user,token){
        this.storeUser(user);
        this.storeToken(token);
    }

    clear(){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    getDatas()
    {
        let user = localStorage.getItem('user');
        let token = localStorage.getItem('token')

        console.log(user, token)

        return {
            "user" : user,
            "token" : token
        }
    }

    getUser(){
        let user = localStorage.getItem('user')

        alert(user)
        
        return user;
    }

    getToken(){
        const token = localStorage.getItem('token')
        return token;
    }
}

// eslint-disable-next-line no-class-assign
export default AppStorage = new AppStorage()