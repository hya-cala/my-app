import axios from 'axios'
class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        let basicAuthHeader = this.createBasicAuthToken(username, password)
        return axios.get("http://localhost:8080/basicauth", {
            headers: {
                authorization: basicAuthHeader
            }
        })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ':' + password)
    }
    registerSuccessfulLogin(username, password) {

        let basicAuthHeader = this.createBasicAuthToken(username, password)
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(basicAuthHeader);
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

    setupAxiosInterceptors(header) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = header
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();