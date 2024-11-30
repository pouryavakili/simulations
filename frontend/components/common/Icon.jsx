//* Import components
import { Icon as Iconify } from '@iconify-icon/react';

const Icon = ({ name, size, isCustomVariant, className , color = "#0D0D0D" }) => {
  const sizes = {
    xs: 14,
    sm: 22,
    md: 28,
    lg: 40,
  };

  return (
    <Iconify
      icon={isCustomVariant ? name : `solar:${name}-broken`}
      width={sizes[size ?? 'sm']}
      className={className}
      style={{ color : color }}
    />
  );
};

export default Icon;
