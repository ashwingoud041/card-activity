import { ReactNode } from 'react';
import { GradientButtonBase } from './GradientButtonBase';

interface Props {
    isSmall: boolean;
    disabled: boolean;
    text: string;
    children: ReactNode;
    onClick?: () => void;
}

export const GradientButtonWithIcon = ({
    isSmall,
    disabled,
    text,
    children,
    onClick,
}: Props) => (
    <GradientButtonBase isSmall={isSmall} disabled={disabled} onClick={onClick}>
        <div className="w-full flex justify-between">
            {children}
            <span
                className={`${
                    isSmall ? 'text-base font-medium' : 'text-xl'
                } tracking-wider`}
            >
                {text}
            </span>
        </div>
    </GradientButtonBase>
);
