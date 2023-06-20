import { joinCss } from '@/utilities';
import { HTMLInputTypeAttribute } from 'react';

interface Properties {
    autoComplete?: string;
    className?: string;
    error?: string;
    id?: string;
    label: string;
    name: string;
    required?: boolean;
}

export const Checkbox = ({
    autoComplete,
    className,
    error,
    id,
    label,
    name,
    required
}: Properties) => {
    const css = joinCss(

    );

    return (
        <div className={className}>
            <div className="flex items-center">
                <input
                    autoComplete={autoComplete}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    id={id || name}
                    name={name}
                    required={required}
                    type="checkbox"
                />

                <label
                    htmlFor={id || name}
                    className="ml-3 block text-sm leading-6 text-gray-700"
                >
                    {label}
                </label>
            </div>

            {error && (
                <span className="text-sm text-red-500 font-semibold">{error}</span>
            )}
        </div>
    );
};
