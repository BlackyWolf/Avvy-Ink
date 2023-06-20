import { joinCss } from '@/utilities';

interface Properties {
    className?: string;
}

export const Logo = ({ className }: Properties) => {
    const css = joinCss(
        'flex items-center',
        className
    );

    return (
        <div className={css}>
            <span className="font-raleway font-light">Avvy</span>
            <span className="font-pacifico mr-4">Ink</span>
        </div>
    );
};
