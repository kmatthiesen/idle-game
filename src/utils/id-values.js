/**
 * The id values for the gold based buildings.
 * 
 * @type {{goldBuilding1: string, goldBuilding2: string, goldBuilding3: string, goldBuilding4: string, goldBuilding5: string}}
 */
export const GOLD_BUILDING_ID = {
    goldBuilding1: "goldBuilding1",
    goldBuilding2: "goldBuilding2",
    goldBuilding3: "goldBuilding3",
    goldBuilding4: "goldBuilding4",
    goldBuilding5: "goldBuilding5",
};

/**
 * The id values for the resource stores.
 *
 * @type {{goldStore: string}}
 */
export const STORE_RESOURCE_ID = {
    goldStore: "goldStore"
};

export const RESOURCE_ID = {
    gold: "gold"
};

export const STORE_RESOURCE_MAP = {
    [STORE_RESOURCE_ID.goldStore]: {
        id: STORE_RESOURCE_ID.goldStore,
        resource: RESOURCE_ID.gold,
        buildingIds: GOLD_BUILDING_ID
    }
};

export const MODULE_ID = {
    root: "root",
    ...STORE_RESOURCE_ID
};