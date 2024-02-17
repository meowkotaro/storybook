import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
 
const style = tv({
  base: 'text-black font-medium rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
  variants: {
    colorType: {
      primary: 'ring-2 ring-gray-600 ring-opacity-50',
      error: 'ring-2 ring-red-500 ring-opacity-50 focus:ring-red-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
});

type Props = VariantProps<typeof style> & ComponentPropsWithRef<"input"> & {
    // inputのtype属性を受け取る
    error?: string;
};

export const Textbox: FC<Props> =forwardRef(function Textbox({size, colorType, error, ...props}, ref){

    return (
        <>
            <input className={style({ size, colorType })} ref={ref} {...props}/>
            <div className='h-5'>
                {error && <p className="text-red-500 text-sm whitespace-nowrap">{error}</p>}
            </div>
        </>
    );
})
 