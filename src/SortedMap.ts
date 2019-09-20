import { OrderedKeyed } from "./Common";

/**
 * Key-value storage which iteration order is based on sorted keys
 */
export class SortedMap<K extends keyof T, T> implements OrderedKeyed<K, T> {
    /**
     * @note It has to be implemented via some Binary Tree
     */
    takeWhile(f: (value: T, key: K, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }    
    sort(f: (fst: K, snd: K, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    reorder(f: (fst: K, snd: K, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    snapBy(f: (value: T, key: K, collection: this) => boolean): [this, this] {
        throw new Error("Method not implemented.");
    }
    splitBy(f: (value: T, key: K, collection: this) => boolean): this[] {
        throw new Error("Method not implemented.");
    }
    last(f: (value: T, key: K, collection: this) => boolean): T {
        throw new Error("Method not implemented.");
    }
    first(f: (value: T, key: K, collection: this) => boolean): T {
        throw new Error("Method not implemented.");
    }
    mapRight<F>(f: (value: T, key: K, collection: this) => F): OrderedKeyed<K, F> {
        throw new Error("Method not implemented.");
    }
    flatMapRight<F>(f: (value: T, key: K, collection: this) => OrderedKeyed<K, F>): OrderedKeyed<K, F> {
        throw new Error("Method not implemented.");
    }
    forEachRight(f: (value: T, key: K, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    updateRight(f: (value: T, key: K, collection: this) => T): this {
        throw new Error("Method not implemented.");
    }
    reduceRight<F>(f: (accum: this, value: T, key: K, collection: F) => this, init?: F): F {
        throw new Error("Method not implemented.");
    }
    dropWhile(f: (value: T, key: K, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    keyOf(value: T): K {
        throw new Error("Method not implemented.");
    }
    keyBy(f: (value: T, key: K, collection: this) => boolean): K {
        throw new Error("Method not implemented.");
    }
    lastKeyOf(value: T): K {
        throw new Error("Method not implemented.");
    }
    lastKeyBy(f: (value: T, key: K, collection: this) => boolean): K {
        throw new Error("Method not implemented.");
    }
    map<F>(f: (value: T, key: K, collection: this) => F): import("./Common").Keyed<K, T> {
        throw new Error("Method not implemented.");
    }
    flatMap<F>(f: (value: T, key: K, collection: this) => import("./Common").Keyed<K, T>): import("./Common").Keyed<K, T> {
        throw new Error("Method not implemented.");
    }
    forEach(f: (value: T, key: K, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    reduce<F>(f: (accum: this, value: T, key: K, collection: F) => this, init?: F): F {
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
    take(n: number): this {
        throw new Error("Method not implemented.");
    }
    reverse(): this {
        throw new Error("Method not implemented.");
    }
    snap(n: number): [this, this] {
        throw new Error("Method not implemented.");
    }
    split(n: number): this[] {
        throw new Error("Method not implemented.");
    }
    slice(from: number, to: number): this {
        throw new Error("Method not implemented.");
    }
    concat(value: this): this {
        throw new Error("Method not implemented.");
    }
    pop(): T {
        throw new Error("Method not implemented.");
    }
    shift(): T {
        throw new Error("Method not implemented.");
    }
    drop(n: number): this {
        throw new Error("Method not implemented.");
    }
}