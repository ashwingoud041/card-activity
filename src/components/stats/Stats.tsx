import { useContext, useEffect, useState } from 'react';

import { ASSET_LAKE } from '../../constants/assets';
import CopyToClipboard from 'react-copy-to-clipboard';
import { GradientButtonWithIcon } from '../button/gradient/GradientButtonWithIcon';
import { JsonRpcProvider } from '@ethersproject/providers';
import { REFRESH_STATS_INTERVAL } from '../../constants/commons';
import { StatElement } from './StatElement';
import { WalletConnectContext } from '../../context';
import { colors } from '../../constants/colors';
import { formatValue } from '../../utils/formatValue';
import metamaskIcon from './../../assets/icons/metamask-icon.svg';
import styled from 'styled-components';
import { useConfig } from '../../hooks/use-config';
import { useLakeStats } from '../../hooks/use-lake-stats';

export interface LakeStats {
    marketCup: number;
    pastMarketCup: number;
    circulationSupply: number;
    pastCirculationSupply: number;
    lakePrice: number;
    pastLakePrice: number;
    consentsGathered: number;
    pastConsentsGathered: number;
}

const zeroStats = {
    marketCup: 0,
    pastMarketCup: 0,
    circulationSupply: 0,
    pastCirculationSupply: 0,
    lakePrice: 0,
    pastLakePrice: 0,
    consentsGathered: 0,
    pastConsentsGathered: 0,
};

export const Stats = () => {
    const [lakeStats, setLakeStats] = useState<LakeStats>(zeroStats);
    const { lakeAddress } = useConfig();
    const { library } = useContext(WalletConnectContext);

    useEffect(() => {
        const fetchData = async (library: JsonRpcProvider) => {
            setLakeStats(await useLakeStats(library));
        };

        if (library) {
            fetchData(library).catch(console.error);
            setInterval(() => {
                fetchData(library).catch(console.error);
            }, REFRESH_STATS_INTERVAL);
        }
    }, [library]);

    const addToMetamask = async () => {
        try {
            const { ethereum } = window as any;
            await ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: lakeAddress,
                        symbol: ASSET_LAKE.symbol,
                        decimals: ASSET_LAKE.decimals,
                        image: ASSET_LAKE.image,
                    },
                },
            });
        } catch (ex) {
            console.error(ex);
        }
    };
    return (
        <div className="w-full h-full flex flex-col items-center justify-between bg-black-800 rounded-[30px] inset-shadow px-8 py-6">
            <div className="font-kanit-medium color-gray-gradient text-shadow text-2xl tracking-[.12em]">
                $LAKE STATS
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                <StatElement
                    title={'MARKET CAP'}
                    currentValue={lakeStats.marketCup}
                    pastValue={lakeStats.pastMarketCup}
                    formattedValue={formatValue(lakeStats.marketCup, '$')}
                />
                <StatElement
                    title={'CIRCULATION SUPPLY'}
                    currentValue={lakeStats.circulationSupply}
                    pastValue={lakeStats.pastCirculationSupply}
                    formattedValue={formatValue(lakeStats.circulationSupply)}
                />
                <StatElement
                    title={'$LAKE PRICE'}
                    currentValue={lakeStats.lakePrice}
                    pastValue={lakeStats.pastLakePrice}
                    formattedValue={formatValue(lakeStats.lakePrice, '$', 4)}
                />
                <StatElement
                    title={'CONSENTS GATHERED'}
                    currentValue={lakeStats.consentsGathered}
                    pastValue={lakeStats.pastConsentsGathered}
                    formattedValue={formatValue(
                        lakeStats.consentsGathered,
                        '',
                        0,
                    )}
                />
            </div>
            <div className="w-full flex flex-col items-center justify-center px-4">
                <div className="mb-6">
                    <GradientButtonWithIcon
                        size="medium"
                        disabled={false}
                        text="ADD TO METAMASK"
                        onClick={addToMetamask}
                    >
                        <img src={metamaskIcon} alt="metamask"></img>
                    </GradientButtonWithIcon>
                </div>

                <CopyToClipboard text={lakeAddress}>
                    <GradientBorder className="min-w-[14rem] h-[2.5rem] p-px flex justify-center items-center rounded-[32px] cursor-pointer">
                        <div className="w-full h-full flex justify-center items-center rounded-[32px] bg-black-500 px-4">
                            <span className="color-gradient-light tracking-wider text-xs font-medium font-kanit-medium">
                                COPY CONTRACT ADDRESS
                            </span>
                        </div>
                    </GradientBorder>
                </CopyToClipboard>
            </div>
        </div>
    );
};

const GradientBorder = styled.div`
    background: linear-gradient(${colors.purple['300']}, ${colors.blue['300']});
    box-shadow: inset 1px 1px 7px rgba(255, 255, 255, 0.46);
    filter: drop-shadow(0px 0px 3px ${colors.purple['600']})
        drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
`;
