import axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/helloworld')
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/helloworldbean')
    }

    executeHelloWorldPathVariableService(name) {
        // let username = 'Rena'
        // let password = '19990309'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)

        return axios.get(`http://localhost:8080/helloworld/path-variable/${name}`
            // ,
            // {
            //     headers: {
            //         authorization: basicAuthHeader
            //     }
            // }
        )
    }
}

export default new HelloWorldService();