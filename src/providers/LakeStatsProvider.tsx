import { ReactNode } from 'react';

import { LakeStatsContext } from '../context';
import { useLakeStats } from '../hooks/use-lake-stats';

type Props = {
    children: ReactNode;
};

export const LakeStatsProvider = ({ children }: Props) => {
    const stats = useLakeStats();

    return (
        <LakeStatsContext.Provider value={stats}>
            {children}
        </LakeStatsContext.Provider>
    );
};
