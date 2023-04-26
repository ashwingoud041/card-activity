const infuraId = process.env.REACT_APP_INFURA_ID;

import '@uniswap/widgets/fonts.css';
import { SwapWidget, Theme } from '@uniswap/widgets';

import { WalletConnectContext } from '../../../context';
import { colors } from '../../../constants/colors';
import { tokens } from './tokenList';
import { useConfig } from '../../../hooks/use-config';
import { useContext } from 'react';

export const SwapCustomWidget = () => {
    const { library } = useContext(WalletConnectContext);
    const {
        chainId,
        lakeAddress,
        swapConvenienceFee,
        swapConvenienceFeeRecipient,
    } = useConfig();

    const theme: Theme = {
        primary: colors.gray[500],
        secondary: colors.gray[500],
        interactive: colors.black[600],
        container: colors.black[600],
        module: colors.black[800],
        outline: colors.black[600],
        fontFamily: 'Kanit-Regular',
    };

    const jsonRpcUrlMap = { 
        1: ['https://rpc.flashbots.net'], 
        5: [`https://goerli.infura.io/v3/${infuraId}`]
      };

    return (
        <div>
            <SwapWidget
                hideConnectionUI
                width="100%"
                provider={library}
                jsonRpcUrlMap={jsonRpcUrlMap}
                defaultOutputTokenAddress={lakeAddress}
                convenienceFee={swapConvenienceFee}
                convenienceFeeRecipient={{
                    [chainId]: swapConvenienceFeeRecipient,
                }}
                theme={theme}
                tokenList={tokens}
            />
        </div>
    );
};
