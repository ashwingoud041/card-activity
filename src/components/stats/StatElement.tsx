import styled from 'styled-components';
import { colors } from '../../constants/colors';
import downChart from './../../assets/icons/down-chart.svg';
import upChart from './../../assets/icons/up-chart.svg';

interface Props {
    title: string;
    currentValue: number;
    formattedValue: string;
    prevValue: number;
}

export const StatElement = ({
    title,
    currentValue,
    formattedValue,
    prevValue,
}: Props) => (
    <StatElementContainer className="flex justify-between px-8">
        <div className="w-1/4 flex justify-center items-center mr-4">
            <img
                className="w-full"
                src={currentValue < prevValue ? downChart : upChart}
                alt="chart"
            ></img>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
            <span className="font-kanit-medium whitespace-nowrap text-gray-700 text-xs font-normal tracking-[.12em]">
                {title}
            </span>
            <span className="font-kanit-medium color-gradient text-2xl font-bold">
                {formattedValue}
            </span>
        </div>
    </StatElementContainer>
);

const StatElementContainer = styled.div`
    box-shadow: inset 1px 1px 1px rgba(68, 68, 68, 0.05),
        inset -1px -1px 4px rgba(134, 134, 134, 0.12);
    border-radius: 20px;
    background: ${colors.black[600]};
    width: 100%;
    height: 4.75rem;
    margin: 0.5rem 0;
`;
