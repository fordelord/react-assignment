import React, { useMemo } from 'react';

import { ETypographyVariant, ITypography } from './types';

const Typography: React.FC<ITypography> = ({
  variant,
  children,
  onClick,
  className = '',
}) => {
  const getTypographyStyle = () => {
    switch (variant) {
      case ETypographyVariant.HEADING_XL:
        return 'text-[30px] leading-[38px] font-semibold';
      case ETypographyVariant.HEADING_MD:
        return 'text-[20px] leading-[28px] font-semibold';
      case ETypographyVariant.HEADING_SM:
        return 'text-[16px] leading-[24px] font-semibold';
      case ETypographyVariant.TITLE_XL:
        return 'text-[18px] leading-[24px] font-semibold';
      case ETypographyVariant.TITLE_XXL:
        return 'text-[28px] leading-[34px] font-semibold';
      case ETypographyVariant.TITLE_MD:
        return 'text-[18px] leading-[24px] font-normal';
      case ETypographyVariant.TITLE_SM:
        return 'text-[16px] leading-[22px] font-normal';
      case ETypographyVariant.BODY_XL:
        return 'text-[18px] leading-[24px] font-medium';
      case ETypographyVariant.BODY_MD:
        return 'text-[16px] leading-[22px] font-normal';
      case ETypographyVariant.BODY_SM:
        return 'text-[14px] leading-[20px] font-normal';
      case ETypographyVariant.LABEL_XL:
        return 'text-[16px] leading-[22px] font-normal';
      case ETypographyVariant.LABEL_MD:
        return 'text-[14px] leading-[20px] font-normal';
      default:
        return 'text-[12px] leading-[18px] font-normal';
    }
  };

  const typographyElement = useMemo(() => {
    switch (variant) {
      case ETypographyVariant.HEADING_SM:
        return 'h4';
      case ETypographyVariant.HEADING_MD:
        return 'h2';
      case ETypographyVariant.HEADING_XL:
        return 'h1';
      default:
        return 'span';
    }
  }, [variant]);

  const typographyStyle = getTypographyStyle();

  return React.createElement(
    typographyElement,
    { className: `${typographyStyle} ${className}`, onClick },
    children
  );
};

export default Typography;
