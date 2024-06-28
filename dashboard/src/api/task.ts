import request from "@/request/request";
import type {GeneralReturn} from "@/api/login";

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

export const AddTask = async(task: Task): Promise<GeneralReturn> => {
    // /backstage/internal/task
    try {
        const response = await request.post<GeneralReturn>("/backstage/internal/task", {
            "type": "TaskAdd",
            "harbor_key": task.harbor_key,
            "task_name": task.task_name,
            "path": task.path,
            "cmd": task.cmd,
            "heartbeat": task.heartbeat
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
            message: "AddTask failed due to server error.",
            success: false
        };
    }
}

export const EditTask = async(task: Task): Promise<GeneralReturn> => {
    // /backstage/internal/task
    try {
        const response = await request.post<GeneralReturn>("/backstage/internal/task", {
            "type": "TaskEdit",
            "task_id": task.ID,
            "harbor_key": task.harbor_key,
            "task_name": task.task_name,
            "path": task.path,
            "cmd": task.cmd,
            "heartbeat": task.heartbeat
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
            message: "AddTask failed due to server error.",
            success: false
        };
    }
}

export const RestartTask = async(task: Task): Promise<GeneralReturn> => {
    let rType = "TaskStart"
    if (task.run) {
        rType = "TaskStop"
    }


    try {
        const response = await request.post<GeneralReturn>("/backstage/internal/task", {
            "type": rType,
            "task_id": task.ID
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
            message: "AddTask failed due to server error.",
            success: false
        };
    }
}

export const DelTask = async(task: Task): Promise<GeneralReturn> => {
    try {
        const response = await request.post<GeneralReturn>("/backstage/internal/task", {
            "type": "TaskDel",
            "task_id": task.ID
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
            message: "AddTask failed due to server error.",
            success: false
        };
    }
}

export interface LogResp {
    data: Log[]
    message: string
    success: boolean
}

export interface Log {
    ID: number
    created_at: string
    updated_at: string
    task_id: number
    task_name: string
    success: boolean
    message?: string
}

export const GetLogs = async (): Promise<LogResp> => {
    try {
        const response = await request.get<LogResp>("/backstage/internal/logs");
        // console.log(response);
        return response; // 返回从服务器接收到的数据
    } catch (error) {
        console.log(error)
        // 如果发生错误，可以返回一个自定义的错误对象
        return {
            data: [],
            message: "mylog failed due to server error.",
            success: false
        };
    }
};
