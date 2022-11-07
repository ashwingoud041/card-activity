import { ASSET_LAKE } from '../../../constants/assets';
import { useConfig } from '../../../hooks/use-config';

const { lakeAddress } = useConfig();

export const tokens = [
    {
        name: ASSET_LAKE.name,
        address: lakeAddress,
        symbol: ASSET_LAKE.symbol,
        decimals: ASSET_LAKE.decimals,
        chainId: 1,
        logoURI: ASSET_LAKE.image,
    },
    {
        name: 'Dai Stablecoin',
        decimals: 18,
        symbol: 'DAI',
        address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    },
    {
        name: 'TrueUSD',
        decimals: 18,
        symbol: 'TUSD',
        address: '0x0000000000085d4780B73119b644AE5ecd22b376',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png',
    },
    {
        name: 'USD Coin',
        decimals: 6,
        symbol: 'USDC',
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
        name: 'Tether USD',
        decimals: 6,
        symbol: 'USDT',
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    },
    {
        name: 'Basic Attention Token',
        decimals: 18,
        symbol: 'BAT',
        address: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0D8775F648430679A709E98d2b0Cb6250d2887EF/logo.png',
    },
    {
        name: 'ChainLink Token',
        decimals: 18,
        symbol: 'LINK',
        address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    },
    {
        name: 'MakerDAO',
        decimals: 18,
        symbol: 'MKR',
        address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    },
    {
        name: 'Decentraland MANA',
        decimals: 18,
        symbol: 'MANA',
        address: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png',
    },
    {
        name: 'Wrapped BTC',
        decimals: 8,
        symbol: 'WBTC',
        address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
    {
        name: 'Aave Token',
        decimals: 18,
        symbol: 'AAVE',
        address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png',
    },
    {
        name: 'Uniswap',
        decimals: 18,
        symbol: 'UNI',
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
    },
    {
        name: ASSET_LAKE.name,
        address: lakeAddress,
        symbol: ASSET_LAKE.symbol,
        decimals: ASSET_LAKE.decimals,
        chainId: 5,
        logoURI: ASSET_LAKE.image,
    },
    {
        name: 'Uniswap',
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        symbol: 'UNI',
        decimals: 18,
        chainId: 5,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
    },
    {
        name: 'Wrapped Ether',
        address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
        symbol: 'WETH',
        decimals: 18,
        chainId: 5,
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png',
    },
];
