import { useEffect, useState } from 'react';

import { Dashboard } from '../components/subPages/Dashboard';
import { Disclaimer } from '../components/disclaimer/Disclaimer';
import { LOADING_DELAY } from '../constants/commons';
import { Loading } from '../components/loading/Loading';
import { Menu } from '../components/menu/Menu';
import { Page } from '../components/page/Page';

export const Main = () => {
    const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [subPageIndex, setSubPageIndex] = useState<number>(0);
    useEffect(() => {
        setIsDisclaimerAccepted(
            localStorage.getItem('isDisclaimerAccepter') === 'true',
        );
        setTimeout(() => {
            setIsLoading(false);
        }, LOADING_DELAY);
    }, []);

    const acceptDisclaimer = () => {
        localStorage.setItem('isDisclaimerAccepter', 'true');
        setIsDisclaimerAccepted(true);
    };
    return (
        <>
            {isLoading && <Loading />}
            {isDisclaimerAccepted && (
                <>
                    <Page>{subPageIndex === 0 && <Dashboard />}</Page>
                    <div className="w-full lg:hidden fixed bottom-0">
                        <Menu
                            subPageIndex={subPageIndex}
                            setSubPage={(index: number) => {
                                setSubPageIndex(index);
                            }}
                        />
                    </div>
                </>
            )}
            {!isDisclaimerAccepted && !isLoading && (
                <Disclaimer onAcceptClick={acceptDisclaimer} />
            )}
        </>
    );
};
