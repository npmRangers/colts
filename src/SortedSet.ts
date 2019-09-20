import { SimpleBiSequational, Bucket } from "./Common";

/**
 * Set of unique elements with generalized API and iteration order based on values sorting
 */
export class SortedSet<T> implements SimpleBiSequational<T>, Bucket<T> {
    /**
     * @note It has to be backed by some BinaryTree
     */
    mapRight<F>(f: (value: T, collection: this) => F): SortedSet<F> {
        throw new Error("Method not implemented.");
    }    
    flatMapRight<F>(f: (value: T, collection: this) => SortedSet<F>): SortedSet<F> {
        throw new Error("Method not implemented.");
    }
    forEachRight(f: (value: T, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    updateRight(f: (value: T, collection: this) => T): this {
        throw new Error("Method not implemented.");
    }
    reduceRight<F>(f: (accum: this, value: T, collection: F) => this, init?: F): F {
        throw new Error("Method not implemented.");
    }
    dropWhile(f: (value: T, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    takeWhile(f: (value: T, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    sort(f: (fst: T, snd: T, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    reorder(f: (fst: T, snd: T, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    snapBy(f: (value: T, collection: this) => boolean): [this, this] {
        throw new Error("Method not implemented.");
    }
    splitBy(f: (value: T, collection: this) => boolean): this[] {
        throw new Error("Method not implemented.");
    }
    last(f: (value: T, collection: this) => boolean): T {
        throw new Error("Method not implemented.");
    }
    first(f: (value: T, collection: this) => boolean): T {
        throw new Error("Method not implemented.");
    }
    concat(value: this): this {
        throw new Error("Method not implemented.");
    }
    map<F>(f: (value: T, collection: this) => F): SortedSet<F> {
        throw new Error("Method not implemented.");
    }
    flatMap<F>(f: (value: T, collection: this) => SortedSet<F>): SortedSet<F> {
        throw new Error("Method not implemented.");
    }
    forEach(f: (value: T, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    reduce<F>(f: (accum: this, value: T, collection: F) => this, init?: F): F {
        throw new Error("Method not implemented.");
    }
    update(f: (value: T, collection: this) => T): this {
        throw new Error("Method not implemented.");
    }
    partition(f: (value: T, collection: this) => boolean): [this, this] {
        throw new Error("Method not implemented.");
    }
    filter(f: (value: T, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    all(f: (value: T, collection: this) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    any(f: (value: T, collection: this) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    merge(
        takeIfExistsAtThis: (value: T, collection: this) => boolean, 
        takeIfExistsAtBoth: (value: T, collection: this) => boolean, 
        takeIfExistsAtThat: (value: T, collection: this) => boolean, 
        that: this
    ): this {
        throw new Error("Method not implemented.");
    }
    combine(
        takeIfExistsAtThis: (value: T, collection: this) => boolean, 
        takeIfExistsAtBoth: (value: T, collection: this) => boolean, 
        takeIfExistsAtThat: (value: T, collection: this) => boolean, 
        that: this
    ): this {
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
    pop(): T {
        throw new Error("Method not implemented.");
    }
    shift(): T {
        throw new Error("Method not implemented.");
    }
    drop(n: number): this {
        throw new Error("Method not implemented.");
    }
    add(value: T): this {
        throw new Error("Method not implemented.");
    }
    remove(value: T): this {
        throw new Error("Method not implemented.");
    }
    clone(): this {
        throw new Error("Method not implemented.");
    }
    has(v: T): boolean {
        throw new Error("Method not implemented.");
    }
}