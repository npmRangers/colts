import { Keyed, FixedKeyValues } from "./Common";

/**
 * Represents Key-value associated collection with limited range of accepted keys.
 * 
 * Practically, it works as an ordinary TypeScript object with an extra iteration capabilities. 
 */
export class Record<K extends keyof T, T> implements Keyed<K, T>, FixedKeyValues<K, T> {
    set(key: K, value: T[K]): this {
        throw new Error("Method not implemented.");
    }
    delete(key: K): this {
        throw new Error("Method not implemented.");
    }
    get(key: K): T[K] {
        throw new Error("Method not implemented.");
    }
    map<F>(f: (value: T, key: K, collection: this) => F): Record<K, T> {
        throw new Error("Method not implemented.");
    }    
    flatMap<F>(f: (value: T, key: K, collection: this) => Record<K, T>): Record<K, T> {
        throw new Error("Method not implemented.");
    }
    forEach(f: (value: T, key: K, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    reduce<F>(f: (accum: this, value: T, thr: K, collection: F) => this, init?: F): F {
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