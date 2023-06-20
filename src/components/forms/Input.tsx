import { joinCss } from '@/utilities';
import { HTMLInputTypeAttribute } from 'react';

interface Properties {
    autoComplete?: string;
    className?: string;
    error?: string;
    id?: string;
    label?: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
}

export const Input = ({
    autoComplete,
    className,
    error,
    id,
    label,
    name,
    placeholder,
    required,
    type
}: Properties) => {
    const css = joinCss(

    );

    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={id || name}
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    {label}
                </label>
            )}

            <input
                autoComplete={autoComplete}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id={id || name}
                name={name}
                placeholder={placeholder}
                required={required}
                type={type}
            />

            {error && (
                <span className="text-sm text-red-500 font-semibold">{error}</span>
            )}
        </div>
    );
};
