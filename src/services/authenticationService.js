function authenticate(data) {
    return new Promise((resolve, reject) => {
        if (data.email === "ttcg@gmail.com" && data.password === "ttcgreact") {
            return resolve({
                isSuccessful: true,
                userName: 'ttcg',
                level: 'admin'
            })
        }
        else {
            reject({
                isSuccessful: false
            })
        }
    })
}

const AuthenticateService = {
    authenticate
}

export default AuthenticateService;