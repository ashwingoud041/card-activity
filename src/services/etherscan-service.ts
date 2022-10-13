import axios, { AxiosInstance } from 'axios';
import { BigNumber } from 'ethers';

export class EtherscanService {
    private instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.etherscan.io/api',
        });
    }

    async getTotalSupply(contractAddress: string): Promise<BigNumber> {
        return BigNumber.from(
            (
                await this.instance.get('', {
                    params: {
                        module: 'stats',
                        action: 'tokensupply',
                        contractAddress,
                        apiKey: import.meta.env.VITE_ETHERSCAN_API_KEY,
                    },
                })
            ).data.result,
        );
    }
}
