import { Keyed, Key, KeyValue } from "./Common";

/**
 * Fast HashMap does not provide any guaranties regarding iteration order.
 */
export class Map<K extends Key, T> implements Keyed<K, T>, KeyValue<K, T> {
    /**
     * @note it should be backed by an object
     */
    set(key: K, value: T): this {
        throw new Error("Method not implemented.");
    }
    delete(key: K): this {
        throw new Error("Method not implemented.");
    }
    get(key: K): T {
        throw new Error("Method not implemented.");
    }
    getOrElse(key: K, value: T): T {
        throw new Error("Method not implemented.");
    }
    map<F>(f: (value: T, key: K, collection: this) => F): Map<K, T> {
        throw new Error("Method not implemented.");
    }
    flatMap<F>(f: (value: T, key: K, collection: this) => Map<K, T>): Map<K, T> {
        throw new Error("Method not implemented.");
    }
    forEach(f: (value: T, key: K, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    reduce<F>(f: (value: this, key: T, thr: K, collection: F) => this, init?: F): F {
        throw new Error("Method not implemented.");
    }
    update(f: (value: T, key: K, collection: this) => T): this {
        throw new Error("Method not implemented.");
    }
    partition(f: (value: T, key: K, collection: this) => boolean): [this, this] {
        throw new Error("Method not implemented.");
    }
    filter(f: (value: T, key: K, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    all(f: (value: T, key: K, collection: this) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    any(f: (value: T, key: K, collection: this) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    merge(
        takeIfExistsAtThis: (value: T, key: K, collection: this) => boolean, 
        takeIfExistsAtBoth: (value: T, key: K, collection: this) => boolean, 
        takeIfExistsAtThat: (value: T, key: K, collection: this) => boolean, 
        that: this
    ): this {
        throw new Error("Method not implemented.");
    }
    combine(
        takeIfExistsAtThis: (value: T, key: K, collection: this) => boolean, 
        takeIfExistsAtBoth: (value: T, key: K, collection: this) => boolean, 
        takeIfExistsAtThat: (value: T, key: K, collection: this) => boolean, 
        that: this
    ): this {
        throw new Error("Method not implemented.");
    }
    keysOf(value: T): K[] {
        throw new Error("Method not implemented.");
    }
    keysBy(f: (value: T, key: K, collection: this) => boolean): K[] {
        throw new Error("Method not implemented.");
    }
    keys(): K[] {
        throw new Error("Method not implemented.");
    }
    values(): T[] {
        throw new Error("Method not implemented.");
    }
    clone(): this {
        throw new Error("Method not implemented.");
    }    
    has(v: T): boolean {
        throw new Error("Method not implemented.");
    }
}