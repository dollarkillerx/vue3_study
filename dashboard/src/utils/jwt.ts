export class JWT {
    constructor() {
    }

    public static getToken(): string | null {
        return localStorage.getItem("token")
    }

    public static setToken(token: string) {
        localStorage.setItem("token", token)
    }

    public static removeToken() {
        localStorage.removeItem("token")
    }
}