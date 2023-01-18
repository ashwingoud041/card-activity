import { Navigation } from '../navigation/Navigation';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Page = ({ children }: Props) => (
    <div className="w-full max-w-[536px] lg:max-w-[1536px] h-full min-h-screen overflow-y-scroll overflow-x-hidden m-auto relative px-4 lg:px-6 xl:px-28 mb-[5rem] lg:mb-0">
        <Navigation />
        {children}
    </div>
);
