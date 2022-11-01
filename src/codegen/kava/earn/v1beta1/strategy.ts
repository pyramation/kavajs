/** StrategyType is the type of strategy that a vault uses to optimize yields. */
export enum StrategyType {
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
  UNRECOGNIZED = -1,
}
/** StrategyType is the type of strategy that a vault uses to optimize yields. */

export enum StrategyTypeSDKType {
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
  UNRECOGNIZED = -1,
}
export function strategyTypeFromJSON(object: any): StrategyType {
  switch (object) {
    case 0:
    case "STRATEGY_TYPE_UNSPECIFIED":
      return StrategyType.STRATEGY_TYPE_UNSPECIFIED;

    case 1:
    case "STRATEGY_TYPE_HARD":
      return StrategyType.STRATEGY_TYPE_HARD;

    case 2:
    case "STRATEGY_TYPE_SAVINGS":
      return StrategyType.STRATEGY_TYPE_SAVINGS;

    case -1:
    case "UNRECOGNIZED":
    default:
      return StrategyType.UNRECOGNIZED;
  }
}
export function strategyTypeToJSON(object: StrategyType): string {
  switch (object) {
    case StrategyType.STRATEGY_TYPE_UNSPECIFIED:
      return "STRATEGY_TYPE_UNSPECIFIED";

    case StrategyType.STRATEGY_TYPE_HARD:
      return "STRATEGY_TYPE_HARD";

    case StrategyType.STRATEGY_TYPE_SAVINGS:
      return "STRATEGY_TYPE_SAVINGS";

    case StrategyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}