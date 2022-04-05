/**
 * Builds getters for a given function so I can be lazy and not type them myself.
 *
 * @param component {VueComponent} The component to add the getters to.
 * @param idValues {Object} An id object to iterate over and build getters from.
 * @param baseGetter {Function} Base getter function to build from.
 */
import {objectForEach} from "@/utils/object";

export function buildGetters(component, idValues, baseGetter) {
    if (idValues !== undefined) {
        objectForEach(idValues, key => {
            component[key] = baseGetter(key);
        });
    }
}

export function calculatePerSecond(buildings) {
    let perSecond = 0;
    objectForEach(buildings, building => {
        console.log(perSecond);
        perSecond += building.perSecond;
        console.log(perSecond);
    });
    console.log(perSecond);
    return parseInt(perSecond);
}