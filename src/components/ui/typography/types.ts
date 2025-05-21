import { ReactNode } from 'react';

export enum ETypographyVariant {
  HEADING_SM = 'HEADING_SM',
  HEADING_MD = 'HEADING_MD',
  HEADING_XL = 'HEADING_XL',
  TITLE_SM = 'TITLE_SM',
  TITLE_MD = 'TITLE_MD',
  TITLE_XL = 'TITLE_XL',
  TITLE_XXL = 'TITLE_XXL',
  BODY_SM = 'BODY_SM',
  BODY_MD = 'BODY_MD',
  BODY_XL = 'BODY_XL',
  LABEL_MD = 'LABEL_MD',
  LABEL_XL = 'LABEL_XL',
}

export interface ITypography {
  children: ReactNode;
  variant?: ETypographyVariant;
  className?: string;
  onClick?: () => void;
}
