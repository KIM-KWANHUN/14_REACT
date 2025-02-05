import menus from '../data/menu-detail.json';

/*  
    menus 라는 이름으로 json 데이터를 사용하겠다.
*/

// 메뉴 데이터 통째로 return
export function getMenuList() {
    console.log('menus', menus);
    return menus;
}

// 전달 받은 메뉴 코드를 기반으로 메뉴 상세 조회
export function getMenuByMenuCode(menuCode) {
    console.log('detail 에서 넘어온 코드', menuCode)
    console.log(typeof menuCode);
    // pathVariable 로 넘어온 값은 문자열이기 때문에 정수값이 필요하면 변환 필요

    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}

export function getSearchMenu(name) {
    // match 함수
    // 포함 여부에 따라 인자가 포함되어 있으면 반환을 한다.
    return menus.filter(menu => menu.menuName.match(name));
    // true 면 match 해주고 false 면 제외시켜 버린다.
}