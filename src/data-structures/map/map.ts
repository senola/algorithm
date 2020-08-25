/**
 * Map 实现
 */
import Utils from '../../utils';

class ValuePair {
    key: any;
    value: any;
    constructor(key: any, value: any) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[${this.key}: ${this.value}]`;
    }
}

class Map {
    toStringFn: Function;
    table: object;
    constructor(toStringFn = Utils.defaultToString) {
        this.toStringFn = toStringFn;
        this.table = {};
    }

    set(key: any, value: any) {
        if (key !== null && value !== null) {
            const tableKey = this.toStringFn(key);

            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key: any) {
        if (this.hasKey(key)) {
            delete this.table[this.toStringFn(key)];

            return true;
        }
        return false;
    }

    hasKey(key: any) {
        return !!this.table[this.toStringFn(key)];
    }
    get(key: any) {
        const valuePair = this.table[this.toStringFn(key)];

        return valuePair ? valuePair.value : undefined;
    }
    clear() {
        this.table = {};
    }
    size() {
        return Object.keys(this.table).length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    keys() {
        return this.keyValues().map(valuePair=> { return valuePair.key; });
    }
    values() {
        return this.keyValues().map(valuePair=> { return valuePair.value; });
    }
    keyValues() {
        return Object.values(this.table);
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;

        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }
}

export default Map;
