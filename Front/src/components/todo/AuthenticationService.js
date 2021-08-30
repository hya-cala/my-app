class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log('Sucessful')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log(user)
        if (user === null) return false
        return true
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log(user)
        if (user === null) return ''
        return user
    }
}

export default new AuthenticationService();