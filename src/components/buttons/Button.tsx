import { joinCss } from '@/utilities';
import { PropsWithChildren } from 'react';

type ButtonColor = 'amber' | 'blue' | 'cyan' | 'emerald' | 'fuchsia'
    | 'green' | 'indigo' | 'light' | 'lime' | 'orange' | 'pink'
    | 'red' | 'rose' | 'sky' | 'teal' | 'violet' | 'yellow';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Properties = PropsWithChildren<{
    className?: string;
    color: ButtonColor;
    outline?: boolean;
    size?: ButtonSize;
    type?: 'button' | 'reset' | 'submit';
}>;

function getColor(color: ButtonColor, outline: boolean) {
    switch (color) {
        case 'blue': return 'bg-blue-100 text-blue-600 hover:bg-blue-200 focus-visible:outline-blue-600';
        case 'indigo': return 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200 focus-visible:outline-indigo-600';
        case 'light': return 'bg-stone-200 text-stone-800 hover:bg-stone-300 focus-visible:outline-stone-700';
    }
}

function getSize(size: ButtonSize) {
    switch (size) {
        case 'xs': return 'px-2 py-1 text-xs';
        case 'sm': return 'px-2 py-1 text-sm';
        case 'md': return 'px-4 py-2 text-sm';
        case 'md': return 'px-4 py-2 text-sm';
        case 'md': return 'px-6 py-3 text-base';
    }
}

export const Button = ({ children, className, color, outline = false, size = 'md', type = 'button' }: Properties) => {
    const css = joinCss(
        'flex items-center w-full justify-center rounded-md font-semibold leading-6 shadow-sm',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        'transition duration-150',
        getColor(color, outline),
        getSize(size),
        className
    );

    return (
        <button className={css} type={type}>
            {children}
        </button>
    );
};
