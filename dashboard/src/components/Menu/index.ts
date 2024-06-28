export interface MenusInterface {
    title: string,
    spacing?: boolean,
    submenu?: boolean,
    path: string,
    submenuItems?: MenusInterface[],
}