import { GradientButtonBase } from './GradientButtonBase';
import { ReactNode } from 'react';
import { Size } from '../Button';

interface Props {
    size: Size;
    disabled: boolean;
    text: string;
    children: ReactNode;
    onClick?: () => void;
}

export const GradientButtonWithIcon = ({
    size,
    disabled,
    text,
    children,
    onClick,
}: Props) => (
    <GradientButtonBase size={size} disabled={disabled} onClick={onClick}>
        <div className="w-full flex justify-between">
            {children}
            <span
                className={`${
                    size === 'small'
                        ? 'text-sm'
                        : size === 'medium'
                        ? 'text-base font-medium'
                        : 'text-xl'
                } tracking-wider`}
            >
                {text}
            </span>
        </div>
    </GradientButtonBase>
);
