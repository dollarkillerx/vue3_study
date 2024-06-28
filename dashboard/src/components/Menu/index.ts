export interface MenusInterface {
    title: string,
    spacing?: boolean,
    submenu?: boolean,
    path: string,
    icon: JSX.Element,
    submenuItems?: MenusInterface[],
}