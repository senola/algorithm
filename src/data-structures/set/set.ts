/**
 * 集合
 */
class Set {
    items: any;
    constructor() {
        this.items = {};
    }

    add(element: any) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }

        return false;
    }

    delete(element: any) {
        if (this.has(element)) {
            delete this.items[element];

            return true;
        }
        return false;
    }
    has(element: any): boolean {
        // return element in this.items;
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
    values() {
        return Object.values(this.items);
    }
}

export default Set;
