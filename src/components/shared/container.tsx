import type { CSSProperties, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import { containerLayout } from '@/lib/layout';
import { getLayoutBoxStyle, mergeLayoutStyles } from '@/lib/layout-utils';

interface ContainerProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

export const Container = ({ children, className, style }: ContainerProps) => (
  <div className={cn('layout-container mx-auto w-full', className)} style={mergeLayoutStyles(getLayoutBoxStyle(containerLayout.container), style)}>
    {children}
  </div>
);
