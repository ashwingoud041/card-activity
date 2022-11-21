import { BLOCKS_PER_DAY } from '../constants/commons';
import { JsonRpcProvider } from '@ethersproject/providers';
import { useLakeCirculationSupply } from './use-lake-circulation-supply';
import { useLakePrice } from './use-lake-price';

export const useLakeStats = async (provider: JsonRpcProvider) => {
    const pastBlock = (await provider.getBlockNumber()) - BLOCKS_PER_DAY;
    const lakePrice = await useLakePrice(provider);
    const pastLakePrice = await useLakePrice(provider, pastBlock);
    const circulationSupply = await useLakeCirculationSupply(provider);
    const pastCirculationSupply = await useLakeCirculationSupply(
        provider,
        pastBlock,
    );
    return {
        marketCup: circulationSupply * lakePrice,
        pastMarketCup: pastCirculationSupply * pastLakePrice,
        circulationSupply,
        pastCirculationSupply,
        lakePrice,
        pastLakePrice,
        consentsGathered: 0,
        pastConsentsGathered: 0,
    };
};
