export type Key = symbol | string | number

type PairMapper<T1, T2, C, F> = (fst: T1, snd: T2, collection: C) =>  F
type Mapper<T, C, F> = (value: T, collection: C) =>  F
type TripletMapper<T1, T2, T3, C, F> = (fst: T1, snd: T2, thr: T3, collection: C) =>  F
type Reducer<T, F, C> = PairMapper<F, T, C, F>
type IndexedReducer<T, C, F> = TripletMapper<F, T, number, C, F>
type KeyedReducer<T, K extends Key, F, C> = TripletMapper<F, T, K, C, F>
type Predicate<T, C> = Mapper<T, C, boolean>
type KeyedMapper<T, K extends Key, C, F> = PairMapper<T, K, C, F>
type KeyedPredicate<T, K extends Key, C> = KeyedMapper<T, K, C, boolean>
type IndexedMapper<T, C, F> = KeyedMapper<T, number, C, F>
type IndexedPredicate<T, C> = KeyedMapper<T, number, C, boolean>

/**
 * The most basic API which has to be implemented by all collections
 */
interface Common<T> {
    clone(): this
    has( v: T ): boolean 
}

/**
 * The API for a basic collection which has specified order
 */
interface Sequational<T> {
    take(n: number): this
    reverse(): this
    /**
     * Split collection by specified index into two collection of the similar type
     * @param n 
     */
    snap( n: number): [this, this]
    split( n: number ): this[]
    slice( from: number, to: number ): this
    pop(): T
    shift(): T
}

/**
 * The basic API for a collection transformers
 */
export interface Simple<T> extends Common<T> {
    map<F>( f: Mapper<T, this, F> ): Simple<F>
    flatMap<F>( f: Mapper<T, this, Simple<F>> ): Simple<F>
    forEach( f: Mapper<T, this, void> ): this
    reduce<F>( f: Reducer<T, this, F>, init?: F ): F	
    /**
     * Applies mapper function an mutates collection elements accordingly 
     * @param f 
     */
    update( f: Mapper<T, this, T> ): this
    /**
     * Filter elements by predicate and stores values in different collections accordingly
     * @param f 
     */
    partition( f: Predicate<T, this> ): [this, this]
    filter( f: Predicate<T, this> ): this
    /**
     * Apply predicate to every element and returns true if all of them are true
     * @param f 
     */
    all( f: Predicate<T, this> ): boolean
    /**
     * Apply predicate to every element and returns true if any of them is true
     * @param f 
     */
    any( f: Predicate<T, this> ): boolean
    /**
     * Combine two collection according to specified predicates, result of the transformation is applied as mutation to this
     * @param takeIfExistsAtThis 
     * @param takeIfExistsAtBoth 
     * @param takeIfExistsAtThat 
     * @param that 
     */
    merge( 
        takeIfExistsAtThis: Predicate<T, this>,
        takeIfExistsAtBoth: Predicate<T, this>,
        takeIfExistsAtThat: Predicate<T, this>,
        that: this
    ): this
    /**
     * Combine two collection according to specified predicates, result of the transformation is stored in a new collection 
     * @param takeIfExistsAtThis 
     * @param takeIfExistsAtBoth 
     * @param takeIfExistsAtThat 
     * @param that 
     */
    combine( 
        takeIfExistsAtThis: Predicate<T, this>,
        takeIfExistsAtBoth: Predicate<T, this>,
        takeIfExistsAtThat: Predicate<T, this>,
        that: this
    ): this
}

/**
 * The extension for Sequational collection's API for segmenting and reordering of elements sequences
 */
export interface SimpleSequational<T> extends Simple<T>, Sequational<T> {
    takeWhile( f: Predicate<T, this> ): this
    /**
     * Sort values by a predicate, places result in a new collection
     * @param f 
     */
    sort( f: PairMapper<T, T, this, boolean> ): this
    /**
     * Sort elements by a predicate
     * @param f 
     */
    reorder( f: PairMapper<T, T, this, boolean>): this
    /**
     * Split collection into two parts by the place predicate became true the first time
     */
    snapBy( f: Predicate<T, this> ): [this, this]
    splitBy( f: Predicate<T, this> ): this[]
    last( f: Predicate<T, this> ): T
    first( f: Predicate<T, this> ): T
    concat( value: this ): this
}

/**
 * The extension of Sequational collection's which can be efficiently iterated in reversed order
 */
interface BiSequational<T> extends Sequational<T> {
    drop(n: number): this
}

/**
 * The extension for Sequational collection's API which enables iteration in opposite direction
 */
export interface SimpleBiSequational<T> extends SimpleSequational<T>, BiSequational<T> {
    mapRight<F>( f: Mapper<T, this, F> ): SimpleBiSequational<F>
    flatMapRight<F>( f: Mapper<T, this, SimpleBiSequational<F>> ): SimpleBiSequational<F>
    forEachRight( f: Mapper<T, this, void> ): this
    updateRight( f: Mapper<T, this, T> ): this
    reduceRight<F>( f: Reducer<T, this, F>, init?: F ): F	
    dropWhile( f: Predicate<T, this> ): this
}

/**
 * The transformers API for BiSequational collections which has an efficient lookup by index
 */
export interface Indexed<T> extends Common<T>, BiSequational<T> {
    map<F>(f: IndexedMapper<T, this, F>): Indexed<F>
    flatMap<F>( f: IndexedMapper<T, this, Indexed<F>> ): Indexed<F>
    forEach( f: Mapper<T, this, void> ): this
    reduce<F>( f: IndexedReducer<T, this, F>, init?: F ): F	
    update( f: IndexedMapper<T, this, T> ): this
    partition( f: IndexedPredicate<T, this> ): [this, this]
    filter( f: IndexedPredicate<T, this> ): this
    all( f: IndexedPredicate<T, this> ): boolean
    any( f: IndexedPredicate<T, this> ): boolean
    merge( 
        takeIfExistsAtThis: IndexedPredicate<T, this>,
        takeIfExistsAtBoth: IndexedPredicate<T, this>,
        takeIfExistsAtThat: IndexedPredicate<T, this>,
        that: this
    ): this
    combine( 
        takeIfExistsAtThis: IndexedPredicate<T, this>,
        takeIfExistsAtBoth: IndexedPredicate<T, this>,
        takeIfExistsAtThat: IndexedPredicate<T, this>,
        that: this
    ): this
    takeWhile( f: IndexedPredicate<T, this> ): this
    sort( f: PairMapper<T, T, this, boolean> ): this
    reorder( f: PairMapper<T, T, this, boolean>): this
    snapBy( f: IndexedPredicate<T, this> ): [this, this]
    splitBy( f: IndexedPredicate<T, this> ): this[]
    last( f: IndexedPredicate<T, this> ): T
    first( f: IndexedPredicate<T, this> ): T
    mapRight<F>( f: IndexedMapper<T, this, F> ): Indexed<F>
    flatMapRight<F>( f: IndexedMapper<T, this, BiSequational<F>> ): BiSequational<F>
    forEachRight( f: IndexedMapper<T, this, void> ): this
    updateRight( f: IndexedMapper<T, this, T> ): this
    reduceRight<F>( f: IndexedReducer<T, this, F>, init?: F ): F	
    dropWhile( f: IndexedPredicate<T, this> ): this
    indexBy( f: IndexedPredicate<T, this>): number
    lastIndexBy( f: IndexedPredicate<T, this>): number
    indexOf( value: T ): number
    lastIndexOf( value: T ): number
}

/**
 * The API specific for collections which has efficient capabilities to add element to the end of sequence
 */
export interface Prependable<T> {
    prepend( v: T) : this
}

/**
 * The API specific for collections which has efficient capabilities to add element to the start of sequence
 */
export interface Appendable<T> {
    append( v: T ): this
}

/**
 * The basic API for collections which associate values with key identifiers
 */
export interface Keyed<K extends Key, T> extends Common<T> {
    map<F>( f: KeyedMapper<T, K, this, F> ): Keyed<K, T> 
    flatMap<F>( f: KeyedMapper<T, K, this, Keyed<K, T>> ): Keyed<K, T> 
    forEach( f: KeyedMapper<T, K, this, void> ): this	
    reduce<F>( f: KeyedReducer<T, K, this, F>, init?: F ): F	
    update( f: KeyedMapper<T, K, this, T> ): this
    partition( f: KeyedPredicate<T, K, this> ): [this, this]
    filter( f: KeyedPredicate<T, K, this> ): this
    all( f: KeyedPredicate<T, K, this> ): boolean
    any( f: KeyedPredicate<T, K, this> ): boolean
    merge( 
        takeIfExistsAtThis: KeyedPredicate<T, K, this>,
        takeIfExistsAtBoth: KeyedPredicate<T, K, this>,
        takeIfExistsAtThat: KeyedPredicate<T, K, this>,
        that: this
    ): this
    combine( 
        takeIfExistsAtThis: KeyedPredicate<T, K, this>,
        takeIfExistsAtBoth: KeyedPredicate<T, K, this>,
        takeIfExistsAtThat: KeyedPredicate<T, K, this>,
        that: this
    ): this
    keysOf( value: T ): K[]
    keysBy( f: KeyedPredicate<T, K, this> ): K[]
    keys(): K[]
    values(): T[]
}

/**
 * The extension for collections which associate values with key and has clear order
 */
export interface OrderedKeyed<K extends Key, T> extends Keyed<K, T>, BiSequational<T> {
    takeWhile( f: KeyedPredicate<T, K, this> ): this
    sort( f: PairMapper<K, K, this, boolean> ): this
    reorder( f: PairMapper<K, K, this, boolean>): this
    snapBy( f: KeyedPredicate<T, K, this> ): [this, this]
    splitBy( f: KeyedPredicate<T, K, this> ): this[]
    last( f: KeyedPredicate<T, K, this> ): T
    first( f: KeyedPredicate<T, K, this> ): T
    mapRight<F>( f: KeyedMapper<T, K, this, F> ): OrderedKeyed<K, F>
    flatMapRight<F>( f: KeyedMapper<T, K, this, OrderedKeyed<K, F>> ): OrderedKeyed<K, F>
    forEachRight( f: KeyedMapper<T, K, this, void> ): this
    updateRight( f: KeyedMapper<T,K, this, T> ): this	
    reduceRight<F>( f: KeyedReducer<T, K, this, F>, init?: F ): F	
    dropWhile( f: KeyedPredicate<T, K, this> ): this
    /**
     * Search for the first key of the value according to the order
     * @param value 
     */
    keyOf( value: T ): K | undefined
    keyBy( f: KeyedPredicate<T, K, this> ): K | undefined
    lastKeyOf( value: T ): K
    lastKeyBy( f: KeyedPredicate<T, K, this> ): K
}

/**
 * The extension for collections which has extendable list of possible keys
 */
export interface KeyValue<K extends Key, T> {
    set(key: K, value: T): this
    delete(key: K): this
    get(key: K): T | undefined
    getOrElse(key: K, value: T): T
}

/**
 * The extension for collections which has well defined list of possible keys with variable type of associated values 
 */
export interface FixedKeyValues<K extends keyof T, T> {
    set(key: K, value: T[K]): this
    delete(key: K): this
    get(key: K): T[K]
}

/**
 * An API for collections which has an ability to add and remove elements without association with an order or key
 */
export interface Bucket<T> extends Common<T> {
    add( value: T ): this
    remove( value: T ): this 
}