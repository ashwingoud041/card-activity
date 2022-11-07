import { ReactNode } from 'react';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';
import styled from 'styled-components';

interface Props {
    isOpen: boolean;
    children: ReactNode;
    onClick: () => void;
}

export const WidgetBody = ({ isOpen, children, onClick }: Props) => (
    <WidgetBodyBorder className="w-full flex flex-col items-center bg-black-600 rounded-[20px] my-6">
        <div className="w-full">{isOpen ? children : ''}</div>
        <div
            className="w-full h-8 flex justify-center items-center cursor-pointer"
            onClick={onClick}
        >
            <img src={isOpen ? arrowUp : arrowDown} alt="arrow"></img>
        </div>
    </WidgetBodyBorder>
);

const WidgetBodyBorder = styled.div`
    box-shadow: inset 1px 1px 1px rgba(68, 68, 68, 0.05),
        inset -1px -1px 4px rgba(134, 134, 134, 0.12);
`;
