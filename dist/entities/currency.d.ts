import { ChainId } from '../constants';
/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly ETHER: Currency;
    static readonly BNB: Currency;
    static readonly RBA: Currency;
    static readonly NATIVE: {
        1: Currency;
        56: Currency;
        97: Currency;
        158: Currency;
        159: Currency;
    };
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
    static getNativeCurrency(chainId?: ChainId): Currency;
    static getNativeCurrencySymbol(chainId?: ChainId): string | undefined;
    static getNativeCurrencyName(chainId?: ChainId): string | undefined;
    getSymbol(chainId?: ChainId): string | undefined;
    getName(chainId?: ChainId): string | undefined;
}
declare const ETHER: Currency;
export { ETHER };
