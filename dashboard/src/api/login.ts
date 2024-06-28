import request from "@/request/request";

export interface GeneralReturn {
    message: string
    success: boolean
}

export const Login = async (token: string): Promise<GeneralReturn> => {
    try {
        const response = await request.post<GeneralReturn>("/backstage/public/login", {
            "token": token,
        }, {
            headers: {
                'Content-Type': 'application/json' // 确保内容类型为 JSON
            }
        });
        return response; // 返回从服务器接收到的数据
    } catch (error) {
        console.log(error)
        // 如果发生错误，可以返回一个自定义的错误对象
        return {
            message: "Login failed due to server error.",
            success: false
        };
    }
};

