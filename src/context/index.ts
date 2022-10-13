import { createContext } from 'react';
import { LakeStatsState } from '../hooks/use-lake-stats';
import { WalletConnectState } from '../hooks/use-wallet-connect';

export const WalletConnectContext = createContext<WalletConnectState>({
    loading: false,
    active: false,
    account: undefined,
    ethBalance: 0,
    tokenBalance: 0,
    library: undefined,
    error: null,
    activateProvider: () => {},
    deactivate: () => {},
    activateBrowserWallet: () => {},
});

export const LakeStatsContext = createContext<LakeStatsState>({
    marketCup: 0,
    prevMarketCup: 0,
    circulationSupply: 0,
    prevCirculationSupply: 0,
    lakePrice: 0,
    prevLakePrice: 0,
    consentsGathered: 0,
    prevConsentsGathered: 0,
});
