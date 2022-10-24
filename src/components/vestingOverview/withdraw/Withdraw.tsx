import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../../assets/icons/logo.svg';
import { colors } from '../../../constants/colors';
import { WalletConnectContext } from '../../../context';
import { useTokenClaim } from '../../../hooks/use-token-claim';
import { IVestingSchedule } from '../../../interfaces/vestingSchedule.interface';
import { GradientButton } from '../../button/gradient/GradientButton';

interface Props {
    data: IVestingSchedule[];
}

export const Withdraw = ({ data }: Props) => {
    const { library } = useContext(WalletConnectContext);
    const [totalLocked, setTotalLocked] = useState(0);
    const [totalUnlocked, setTotalUnlocked] = useState(0);
    const [totalWithdrawn, setTotalWithdrawn] = useState(0);
    const { claimAllTokens } = useTokenClaim();
    useEffect(() => {
        let locked = 0;
        let unlocked = 0;
        let withdrawn = 0;
        data.map((el) => {
            locked = locked + el.allocatedAmount - el.unlockedAmount;
            unlocked = unlocked + el.unlockedAmount;
            withdrawn = withdrawn + el.withdrawnAmount;
        });
        setTotalLocked(locked);
        setTotalUnlocked(unlocked);
        setTotalWithdrawn(withdrawn);
    }, [data]);

    const onWithdrawClick = async () => {
        if (library) {
            await claimAllTokens(library);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-between bg-black-700 rounded-[30px] inset-shadow px-8 py-6">
            <div className="w-full flex justify-center font-kanit-medium color-gray-gradient text-shadow text-lg tracking-[.12em]">
                WITHDRAW
            </div>
            <div className="w-full flex flex-col items-center my-6">
                <div className="flex flex-col text-gray-600">
                    <div>
                        <span className="text-4xl tracking-[.1em]">
                            {Math.trunc(totalLocked)}
                        </span>
                        <span className="tracking-[.1em]">
                            {Math.abs(totalLocked - Math.trunc(totalLocked))
                                .toFixed(2)
                                .slice(1)}
                        </span>
                    </div>
                    <span className="text-sm tracking-[.1em] mt-1">
                        TOTAL LOCKED
                    </span>
                </div>
                <Line />
                <div className="flex items-center justify-center">
                    <img
                        className="w-[3rem] h-[3rem] mr-2"
                        src={logo}
                        alt="logo"
                    ></img>
                    <div className="flex flex-col">
                        <div>
                            <span className="text-4xl tracking-[.1em] color-gradient">
                                {Math.trunc(totalUnlocked)}
                            </span>
                            <span className="tracking-[.1em] color-gradient">
                                {Math.abs(
                                    totalUnlocked - Math.trunc(totalUnlocked),
                                )
                                    .toFixed(2)
                                    .slice(1)}
                            </span>
                        </div>
                        <span className="text-sm tracking-[.1em] text-gray-600">
                            TOTAL UNLOCKED
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center my-6">
                <GradientButton
                    size="small"
                    disabled={false}
                    text={`WITHDRAW ${totalUnlocked - totalWithdrawn} LAKE`}
                    onClick={onWithdrawClick}
                />
            </div>
        </div>
    );
};

const Line = styled.div`
    background: ${colors.gray['700']};
    width: 100%;
    height: 0.5px;
    margin: 1.5rem 0;
`;
