export function buildGetters(component, idValues) {
    Object.keys(idValues).forEach( key => {
        component[key] = component.getBuilding(key);
    });
}