export const sortMenu = (items: string[]) => {
    return items
        .sort((a, b) => {
            if (a > b) return -1;
            if (b < a) return 1;
            return 0;
        })
        .reverse();
};

export const findMenu = (order: string, menus: string[]): boolean => {
    let min = 0;
    let max = menus.length - 1;
    let current = Math.floor(menus.length / 2);

    while (min <= max) {
        if (order === menus[current]) {
            return true;
        } else if (order > menus[current]) {
            min = current + 1;
        } else {
            max = current - 1;
        }

        current = Math.floor((min + max) / 2);
    }

    return false;
};

export const canOrderFromBaemin = (menus: string[], orders: string[]) => {
    const sortedMenus = sortMenu(menus);

    for (const order of orders) {
        if (!findMenu(order, sortedMenus)) {
            return false;
        }
    }

    return true;
};

export const canOrderFromBaeminUsingMap = (
    menus: string[],
    orders: string[]
) => {
    const menuMap = menus.reduce(
        (acc, menu) => ((acc[menu] = true), acc),
        {} as any
    );

    for (const order of orders) {
        if (!menuMap[order]) {
            return false;
        }
    }

    return true;
};
