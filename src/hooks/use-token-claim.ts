import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract } from 'ethers';
import { VESTING_SCHEDULE_ADDRESS } from '../constants/blockchain';
import { vestingScheduleAbi } from '../abis/vestingSchedule';

export const useTokenClaim = () => {
    const claimAllTokens = async (provider: JsonRpcProvider): Promise<void> => {
        const vestingScheduleContract = new Contract(
            VESTING_SCHEDULE_ADDRESS,
            vestingScheduleAbi,
            provider,
        );
        return await vestingScheduleContract.callStatic.claimAllTokens();
    };

    return {
        claimAllTokens,
    };
};
