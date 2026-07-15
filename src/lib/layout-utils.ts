import type { CSSProperties } from 'react';

import type { LayoutBoxConfig, LayoutTextConfig, ResponsiveLayoutValue } from '@/types/layout';

type LayoutStyle = CSSProperties & Record<`--${string}`, string>;

const assignResponsiveVars = (style: LayoutStyle, variableName: string, value?: ResponsiveLayoutValue) => {
  if (!value) {
    return;
  }

  style[`--${variableName}-mobile`] = value.mobile;
  style[`--${variableName}-tablet`] = value.tablet;
  style[`--${variableName}-desktop`] = value.desktop;
};

export const getLayoutBoxStyle = (config?: LayoutBoxConfig): LayoutStyle | undefined => {
  if (!config) {
    return undefined;
  }

  const style = {} as LayoutStyle;

  assignResponsiveVars(style, 'layout-pt', config.paddingTop);
  assignResponsiveVars(style, 'layout-pb', config.paddingBottom);
  assignResponsiveVars(style, 'layout-px', config.paddingX);
  assignResponsiveVars(style, 'layout-py', config.paddingY);
  assignResponsiveVars(style, 'layout-gap', config.gap);
  assignResponsiveVars(style, 'layout-cols', config.columns);
  assignResponsiveVars(style, 'layout-max-width', config.maxWidth);
  assignResponsiveVars(style, 'layout-width', config.width);
  assignResponsiveVars(style, 'layout-height', config.height);
  assignResponsiveVars(style, 'layout-radius', config.borderRadius);
  assignResponsiveVars(style, 'layout-aspect', config.aspectRatio);

  return Object.keys(style).length > 0 ? style : undefined;
};

export const getLayoutTextStyle = (config?: LayoutTextConfig): LayoutStyle | undefined => {
  if (!config) {
    return undefined;
  }

  const style = {} as LayoutStyle;

  assignResponsiveVars(style, 'layout-font-size', config.fontSize);
  assignResponsiveVars(style, 'layout-line-height', config.lineHeight);
  assignResponsiveVars(style, 'layout-max-width', config.maxWidth);

  return Object.keys(style).length > 0 ? style : undefined;
};

export const mergeLayoutStyles = (...styles: Array<CSSProperties | undefined>) => {
  const merged = {} as CSSProperties;

  for (const style of styles) {
    if (style) {
      Object.assign(merged, style);
    }
  }

  return Object.keys(merged).length > 0 ? merged : undefined;
};
