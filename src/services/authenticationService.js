function authenticate(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (data.email === "ttcg@gmail.com" && data.password === "ttcgreact") {
            return resolve({
                isSuccessful: true,
                userName: 'ttcg',
                level: 'admin'
            })
        }
        else {
            reject('Username or Password is wrong.')
        }
    }, 1000)
    })
}

const AuthenticateService = {
    authenticate
}

export default AuthenticateService;