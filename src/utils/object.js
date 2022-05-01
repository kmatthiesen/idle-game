/**
 * Iterates over a given object and executes a given callback for each key of the object.
 *
 * @param object {Object} The object to iterate over.
 * @param callback {Function} A callback function to run against the every key of the object.
 */
export function objectForEach(object, callback) {
    Object.keys(object).forEach( callback );
}

export function mergeObjects(object1, object2) {


}