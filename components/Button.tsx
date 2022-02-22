import { forwardRef, Ref, FC, ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

/*
 base: 'focus:outline-none transition ease-in-out duration-300',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    size: {
        small: 'px-2 py-1 text-sm',
        normal: 'px-4 py-2',
        large: 'px-8 py-3 text-lg'
    },
	color: {
		blue,
		green,
		subtle
	}
    variant: {
        primary: 'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
        danger: 'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white'
    }

	test test
*/

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'green' | 'blue' | 'white' | 'gray' | 'transparent';
	size?: 'large' | 'small';
    large?: boolean;
    small?: boolean;
    block?: boolean;
    inverted?: boolean;
    secondary?: boolean;
    contrast?: boolean;
    subtle?: boolean;
    link?: boolean;
    className?: string;
    disabled?: boolean;
    active?: boolean;
    selected?: boolean;
    strong?: boolean;
    innerRef?: Ref<HTMLButtonElement>;
}

const Button: FC<IProps> = ({
    large,
    small,
    block,
    inverted,
    secondary,
    contrast,
    subtle,
    link,
    className,
    children,
    disabled,
    active,
    selected,
    strong,
    innerRef,
    ...buttonProps
}) => (
    <button
        className={cx(className, 'align-center flex w-36 w-auto justify-center rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2', {
            large,
            small,
            block,
            inverted,
            secondary,
            contrast,
            subtle,
            link,
            active,
            selected,
            strong
        })}
        disabled={disabled}
        ref={innerRef}
        {...buttonProps}
    >
        {children}
    </button>
);

export default forwardRef<HTMLButtonElement, IProps>((props, ref) => <Button {...props} innerRef={ref} />);
