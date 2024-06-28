import type {MenusInterface} from "@/components/Menu";

export const CONFIG = {
    apiURI: "https://r_test.dollarkiller.com",
    timeout: 3000, // Milliseconds
};

export const MenuConfig: MenusInterface[] = [
    {
        title: "dashboard",
        path: "/",
    },
    {
        title: "tasks",
        path: "/tasks",
    },
    {
        title: "mylog",
        path: "/mylog",
    }
];