import { JsonRpcProvider } from '@ethersproject/providers';
import { useUniswapPool } from './use-uniswap-pool';

export const useLakePrice = async (
    provider: JsonRpcProvider,
    blockTag?: number,
): Promise<number> => {
    const pool = await useUniswapPool(provider, blockTag);
    return Number(pool.token1Price.toSignificant());
};
