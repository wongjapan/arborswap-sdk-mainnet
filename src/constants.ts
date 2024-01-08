import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETHEREUM = 1,
  BSC = 56,
  BSC_TESTNET = 97,
  ROBURNA = 158,
  ROBURNA_TESTNET = 159
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum PairType {
  INTERNAL,
  EXTERNAL
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}
export const FACTORY_ADDRESS = '0x0438309c81376d90D191Ab2Cdd464716B3c69B54'
export const FACTORY_ADDRESS_EXTERNAL = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
export const FACTORY_ADDRESS_ROBURNA = '0xC0f0F040C03fA3e4E3C9511Ad2539526f986dF69'
export const FACTORY_ADDRESS_ROBURNA_TESTNET = '0xa9c35896A518ce1DA9Bbe22cd2a71057E9D0cAA1'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: FACTORY_ADDRESS,
  [ChainId.ROBURNA]: FACTORY_ADDRESS_ROBURNA,
  [ChainId.ROBURNA_TESTNET]: FACTORY_ADDRESS_ROBURNA_TESTNET
}

export const EXTERNAL_FACTORY_ADDRESS_MAP = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_EXTERNAL,
  [ChainId.BSC]: FACTORY_ADDRESS_EXTERNAL,
  [ChainId.BSC_TESTNET]: FACTORY_ADDRESS_EXTERNAL,
  [ChainId.ROBURNA]: FACTORY_ADDRESS_EXTERNAL,
  [ChainId.ROBURNA_TESTNET]: FACTORY_ADDRESS_EXTERNAL
}

export const INIT_CODE_HASH = '0x2e26c6a371cb994ce7b30f334480a5782dff687140d5608ced830fc138a0ed7b'
export const INIT_CODE_HASH_EXTERNAL = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'
export const INIT_CODE_HASH_ROBURNA = '0x568d807ff31b5c3ec99125e4aeff3b02ee98c66ff603152daee8b2e7d279b83b'
export const INIT_CODE_HASH_ROBURNA_TESTNET = '0x568d807ff31b5c3ec99125e4aeff3b02ee98c66ff603152daee8b2e7d279b83b'

export const INIT_CODE_HASH_MAP = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: INIT_CODE_HASH,
  [ChainId.ROBURNA]: INIT_CODE_HASH_ROBURNA,
  [ChainId.ROBURNA_TESTNET]: INIT_CODE_HASH_ROBURNA_TESTNET
}

export const EXTERNAL_CODE_HASH_MAP = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_EXTERNAL,
  [ChainId.BSC]: INIT_CODE_HASH_EXTERNAL,
  [ChainId.BSC_TESTNET]: INIT_CODE_HASH_EXTERNAL,
  [ChainId.ROBURNA]: INIT_CODE_HASH_EXTERNAL,
  [ChainId.ROBURNA_TESTNET]: INIT_CODE_HASH_EXTERNAL
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
