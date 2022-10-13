import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DAppProvider } from '@usedapp/core';

import { GlobalStyle } from './providers/GlobalStyle';
import { WalletConnectProvider } from './providers/WalletConnectProvider';
import { LakeStatsProvider } from './providers/LakeStatsProvider';
import { dappConfig } from './dapp-config';

interface Props {
    children: ReactNode;
}

export const Providers = ({ children }: Props) => (
    <DAppProvider config={dappConfig}>
        <WalletConnectProvider>
            <LakeStatsProvider>
                <BrowserRouter>
                    <GlobalStyle />
                    {children}
                </BrowserRouter>
            </LakeStatsProvider>
        </WalletConnectProvider>
    </DAppProvider>
);
