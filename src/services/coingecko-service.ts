import axios, { AxiosInstance } from 'axios';

export class CoingeckoService {
    private instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.coingecko.com/api/v3',
        });
    }

    async getERC20Price(
        token: string,
        network: string = 'ethereum',
    ): Promise<number> {
        token = token.toLowerCase();
        return (
            await this.instance.get(`/simple/token_price/${network}`, {
                params: {
                    contract_addresses: token,
                    vs_currencies: 'usd',
                },
            })
        ).data[token]?.usd;
    }
}
