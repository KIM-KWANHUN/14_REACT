import menu from '../data/menu-detail.json'

export function getMenuList() {
    return menu;
}

export function getMenuByCode(menuCode) {
    console.log(menuCode)
    return menu.filter(menus => menus.menuCode === parseInt(menuCode))[0];
}