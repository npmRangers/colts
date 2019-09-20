import { Indexed } from "./Common";

/**
 * Extension for native Array which follows our API.
 */
export class Array<T> implements Indexed<T> {
    map<F>(f: (value: T, index: number, collection: this) => F): Array<F> {
        throw new Error("Method not implemented.");
    }    
    flatMap<F>(f: (value: T, index: number, collection: this) => Array<F>): Array<F> {
        throw new Error("Method not implemented.");
    }
    forEach(f: (value: T, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    reduce<F>(f: (accum: F, value: T, index: number, collection: this) => F, init?: F): F {
        throw new Error("Method not implemented.");
    }
    update(f: (value: T, index: number, collection: this) => T): this {
        throw new Error("Method not implemented.");
    }
    partition(f: (value: T, index: number, collection: this) => boolean): [this, this] {
        throw new Error("Method not implemented.");
    }
    filter(f: (value: T, index: number, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    all(f: (value: T, index: number, collection: this) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    any(f: (value: T, index: number, collection: this) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    merge(
        takeIfExistsAtThis: (value: T, index: number, collection: this) => boolean, 
        takeIfExistsAtBoth: (value: T, index: number, collection: this) => boolean, 
        takeIfExistsAtThat: (value: T, index: number, collection: this) => boolean, 
        that: this
    ): this {
        throw new Error("Method not implemented.");
    }
    combine(
        takeIfExistsAtThis: (value: T, index: number, collection: this) => boolean, 
        takeIfExistsAtBoth: (value: T, index: number, collection: this) => boolean, 
        takeIfExistsAtThat: (value: T, index: number, collection: this) => boolean, 
        that: this
    ): this {
        throw new Error("Method not implemented.");
    }
    takeWhile(f: (value: T, index: number, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    sort(f: (fst: T, snd: T, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    reorder(f: (fst: T, snd: T, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    snapBy(f: (value: T, index: number, collection: this) => boolean): [this, this] {
        throw new Error("Method not implemented.");
    }
    splitBy(f: (value: T, index: number, collection: this) => boolean): this[] {
        throw new Error("Method not implemented.");
    }
    last(f: (value: T, index: number, collection: this) => boolean): T {
        throw new Error("Method not implemented.");
    }
    first(f: (value: T, index: number, collection: this) => boolean): T {
        throw new Error("Method not implemented.");
    }
    mapRight<F>(f: (value: T, index: number, collection: this) => F): Indexed<F> {
        throw new Error("Method not implemented.");
    }
    flatMapRight<F>(f: (value: T, index: number, collection: this) => Array<F>): Array<F> {
        throw new Error("Method not implemented.");
    }
    forEachRight(f: (value: T, index: number, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    updateRight(f: (value: T, index: number, collection: this) => T): this {
        throw new Error("Method not implemented.");
    }
    reduceRight<F>(f: (accum: F, value: T, index: number, collection: this) => F, init?: F): F {
        throw new Error("Method not implemented.");
    }
    dropWhile(f: (value: T, index: number, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    indexBy(f: (value: T, index: number, collection: this) => boolean): number {
        throw new Error("Method not implemented.");
    }
    lastIndexBy(f: (value: T, index: number, collection: this) => boolean): number {
        throw new Error("Method not implemented.");
    }
    indexOf( value: T ): number {
        throw new Error("Method not implemented.");
    }
    lastIndexOf( value: T ): number {
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