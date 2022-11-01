/** StrategyType is the type of strategy that a vault uses to optimize yields. */
export declare enum StrategyType {
    /** STRATEGY_TYPE_UNSPECIFIED - STRATEGY_TYPE_UNSPECIFIED represents an unspecified or invalid strategy type. */
    STRATEGY_TYPE_UNSPECIFIED = 0,
    /**
     * STRATEGY_TYPE_HARD - STRATEGY_TYPE_HARD represents the strategy that deposits assets in the Hard
     * module.
     */
    STRATEGY_TYPE_HARD = 1,
    /**
     * STRATEGY_TYPE_SAVINGS - STRATEGY_TYPE_SAVINGS represents the strategy that deposits assets in the
     * Savings module.
     */
    STRATEGY_TYPE_SAVINGS = 2,
    UNRECOGNIZED = -1
}
/** StrategyType is the type of strategy that a vault uses to optimize yields. */
export declare enum StrategyTypeSDKType {
    /** STRATEGY_TYPE_UNSPECIFIED - STRATEGY_TYPE_UNSPECIFIED represents an unspecified or invalid strategy type. */
    STRATEGY_TYPE_UNSPECIFIED = 0,
    /**
     * STRATEGY_TYPE_HARD - STRATEGY_TYPE_HARD represents the strategy that deposits assets in the Hard
     * module.
     */
    STRATEGY_TYPE_HARD = 1,
    /**
     * STRATEGY_TYPE_SAVINGS - STRATEGY_TYPE_SAVINGS represents the strategy that deposits assets in the
     * Savings module.
     */
    STRATEGY_TYPE_SAVINGS = 2,
    UNRECOGNIZED = -1
}
export declare function strategyTypeFromJSON(object: any): StrategyType;
export declare function strategyTypeToJSON(object: StrategyType): string;
