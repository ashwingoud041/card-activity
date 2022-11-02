import { useContext, useEffect } from 'react';

import { SwapWidget } from '@uniswap/widgets';
import { WalletConnectContext } from '../../../context';
import { useConfig } from '../../../hooks/use-config';

export const SwapCustomWidget = () => {
    const { library } = useContext(WalletConnectContext);
    const {
        chainId,
        rpcUrl,
        lakeAddress,
        swapConvenienceFee,
        swapConvenienceFeeRecipient,
    } = useConfig();

    return (
        <div>
            <SwapWidget
                disableBranding
                hideConnectionUI
                width="100%"
                provider={library}
                jsonRpcUrlMap={{ [chainId]: [rpcUrl] }}
                defaultOutputTokenAddress={lakeAddress}
                convenienceFee={swapConvenienceFee}
                convenienceFeeRecipient={swapConvenienceFeeRecipient}
            />
        </div>
    );
};
