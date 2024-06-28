import request from "@/request/request";

export interface TaskResp {
    data: Task[]
    message: string
    success: boolean
}

export interface Task {
    ID: number
    created_at: string
    updated_at: string
    harbor_key: string
    task_name: string
    path: string
    cmd: string
    heartbeat: string
    run: boolean
    last_run_time?: number
}

export const GetTasks = async (): Promise<TaskResp> => {
    try {
        const response = await request.get<TaskResp>("/backstage/internal/tasks");
        // console.log(response);
        return response; // 返回从服务器接收到的数据
    } catch (error) {
        console.log(error)
        // 如果发生错误，可以返回一个自定义的错误对象
        return {
            data: [],
            message: "Login failed due to server error.",
            success: false
        };
    }
};

