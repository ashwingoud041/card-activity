import { Page } from '../components/page/Page';
import { Stats } from '../components/stats/Stats';

export const Main = () => (
    <Page>
        <div className="w-full flex flex-col items-center justify-center px-28">
            <div className="w-full h-[90vh] flex justify-between py-14">
                <div className="w-[62%]">Your Account </div>
                <div className="w-[31%]">
                    <Stats />
                </div>
            </div>
            <div className="my-28">Liquidity / Swap / Buy</div>
            <div className="flex my-28">
                <div className="mx-8">Your $Lake Vesting Schedule</div>
                <div className="mx-8">Withdraw</div>
            </div>
        </div>
    </Page>
);
