import { Button, styled, CircularProgress, useTheme } from '@mui/material';
import Link from 'next/link';

// Styled components
const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: theme.spacing(4),
  fontWeight: 600,
  padding: theme.spacing(3),
  textTransform: 'capitalize',
  borderRadius: theme.spacing(2),
  boxShadow: 'none',
  '&:hover a': { color: 'initial !important' },
  '&:disabled': { color: '#fff' },
}));

const CustomButtonLink = styled(Link)(({ theme }) => ({
  fontSize: theme.spacing(4),
  fontWeight: 600,
  color: theme.palette.common.white,
  padding: theme.spacing(4, 3),
  textAlign: 'center',
  borderRadius: theme.spacing(1),
  display: 'block',
  textDecoration: 'none',
}));

// Helper functions for generating colors
const generateColorStyles = (color, variant = 'contained', theme) => {
  const colorMapping = {
    main: {
      contained: {
        bg: { light: theme.palette.secondary.main, dark: theme.palette.secondary.main },
        text: { light: theme.palette.secondary.contrastText, dark: theme.palette.secondary.contrastTextBlack },
        border: { light: 'none', dark: 'none' },
        hover: {
          bg: { light: theme.palette.secondary.secondary_10, dark: theme.palette.secondary.secondary_50 },
          text: { light: 'white', dark: theme.palette.secondary.contrastTextBlack },
          border: { light: 'none', dark: 'none' },
        },
      },
      outlined: {
        bg: { light: "transparent", dark: "transparent" },
        text: { light: theme.palette.text.primary, dark: 'white' },
        border: { light: `1px solid ${theme.palette.secondary.main}`, dark: `1px solid ${theme.palette.secondary.main}` },
        hover: {
          bg: { light: theme.palette.secondary.secondary_99, dark: theme.palette.primary.primary_20 },
          text: { light: theme.palette.text.primary, dark: 'white' },
          border: { light: `1px solid ${theme.palette.secondary.main}`, dark: `1px solid ${theme.palette.secondary.main}` },
        },
      },
    },
    gray: {
      contained: {
        bg: { light: theme.palette.grey[200], dark: theme.palette.grey[700] },
        text: { light: theme.palette.text.primary, dark: theme.palette.text.primary },
        border: { light: 'none', dark: 'none' },
        hover: {
          bg: { light: theme.palette.grey[300], dark: theme.palette.grey[600] },
          text: { light: 'white', dark: 'white' },
          border: { light: 'none', dark: 'none' },
        },
      },
      outlined: {
        bg: { light: theme.palette.background.default, dark: theme.palette.background.paper },
        text: { light: theme.palette.text.primary, dark: theme.palette.text.primary },
        border: { light: `1px solid ${theme.palette.background.default}`, dark: `1px solid ${theme.palette.background.paper}` },
        hover: {
          bg: { light: theme.palette.grey[500], dark: theme.palette.grey[700] },
          text: { light: theme.palette.text.secondary, dark: 'white' },
          border: { light: `1px solid ${theme.palette.grey[500]}`, dark: `1px solid ${theme.palette.grey[700]}` },
        },
      },
    },
    success: {
      contained: {
        bg: { light: theme.palette.success.main, dark: theme.palette.success.dark },
        text: { light: theme.palette.success.contrastText, dark: theme.palette.success.contrastText },
        border: { light: 'none', dark: 'none' },
        hover: {
          bg: { light: theme.palette.success.light, dark: theme.palette.success.dark },
          text: { light: 'white', dark: 'white' },
          border: { light: 'none', dark: 'none' },
        },
      },
      outlined: {
        bg: { light: theme.palette.success.main, dark: theme.palette.success.dark },
        text: { light: theme.palette.success.contrastText, dark: theme.palette.success.contrastText },
        border: { light: `1px solid ${theme.palette.success.main}`, dark: `1px solid ${theme.palette.success.dark}` },
        hover: {
          bg: { light: theme.palette.success.light, dark: theme.palette.success.dark },
          text: { light: 'white', dark: 'white' },
          border: { light: `1px solid ${theme.palette.success.light}`, dark: `1px solid ${theme.palette.success.dark}` },
        },
      },
    },
    error: {
      contained: {
        bg: { light: theme.palette.error.main, dark: theme.palette.error.main },
        text: { light: theme.palette.error.contrastText, dark: theme.palette.error.contrastText },
        border: { light: 'none', dark: 'none' },
        hover: {
          bg: { light: theme.palette.error.light, dark: theme.palette.error.dark },
          text: { light: 'white', dark: 'white' },
          border: { light: 'none', dark: 'none' },
        },
      },
      outlined: {
        bg: { light: theme.palette.error.main, dark: theme.palette.error.dark },
        text: { light: theme.palette.error.contrastText, dark: theme.palette.error.contrastText },
        border: { light: `1px solid ${theme.palette.error.main}`, dark: `1px solid ${theme.palette.error.dark}` },
        hover: {
          bg: { light: theme.palette.error.light, dark: theme.palette.error.error_30 },
          text: { light: 'white', dark: 'white' },
          border: { light: `1px solid ${theme.palette.error.light}`, dark: `1px solid ${theme.palette.error.error_30}` },
        },
      },
    },
    lightBlue: {
      contained: {
        bg: { light: theme.palette.secondary.secondary_20, dark: theme.palette.secondary.secondary_99 },
        text: { light: theme.palette.secondary.contrastText, dark: theme.palette.secondary.contrastTextBlack },
        border: { light: 'none', dark: 'none' },
        hover: {
          bg: { light: theme.palette.secondary.secondary_10, dark: theme.palette.secondary.secondary_20 },
          text: { light: 'white', dark: theme.palette.secondary.contrastTextBlack },
          border: { light: 'none', dark: 'none' },
        },
      },
      outlined: {
        bg: { light: theme.palette.secondary.secondary_99, dark: theme.palette.secondary.secondary_95 },
        text: { light: theme.palette.secondary.secondary_20, dark: theme.palette.secondary.secondary_20 },
        border: { light: `1px solid ${theme.palette.secondary.secondary_20}`, dark: `1px solid ${theme.palette.secondary.secondary_20}` },
        hover: {
          bg: { light: theme.palette.secondary.secondary_95, dark: theme.palette.secondary.secondary_90 },
          text: { light: theme.palette.secondary.secondary_20, dark:  theme.palette.secondary.secondary_20 },
          border: { light: `1px solid ${theme.palette.secondary.secondary_20}`, dark: `1px solid ${theme.palette.secondary.secondary_20}` },
        },
      },
    },
    default: {
      contained: {
        bg: { light: theme.palette.background.default, dark: theme.palette.background.paper },
        text: { light: theme.palette.text.primary, dark: 'white' },
        border: { light: 'none', dark: 'none' },
        hover: {
          bg: { light: theme.palette.grey[500], dark: theme.palette.grey[700] },
          text: { light: 'white', dark: 'white' },
          border: { light: 'none', dark: 'none' },
        },
      },
      outlined: {
        bg: { light: theme.palette.background.default, dark: theme.palette.background.paper },
        text: { light: theme.palette.text.primary, dark: 'white' },
        border: { light: `1px solid ${theme.palette.background.default}`, dark: `1px solid ${theme.palette.background.paper}` },
        hover: {
          bg: { light: theme.palette.grey[500], dark: theme.palette.grey[700] },
          text: { light: 'white', dark: 'white' },
          border: { light: `1px solid ${theme.palette.grey[500]}`, dark: `1px solid ${theme.palette.grey[700]}` },
        },
      },
    },
  };

  const themeMode = theme.palette.mode;
  const colorVariant = colorMapping[color]?.[variant] || colorMapping.default[variant];

  return {
    backgroundColor: colorVariant.bg[themeMode],
    color: colorVariant.text[themeMode],
    border: colorVariant.border[themeMode],
    '&:hover': {
      backgroundColor: colorVariant.hover.bg[themeMode],
      color: colorVariant.hover.text[themeMode],
      border: colorVariant.hover.border[themeMode],
    },
  };
};

const BaseButton = ({
  children,
  sx = {},
  onClick,
  color = 'main',
  size = 'medium', // Default size
  link = false,
  to = '',
  disabled = false,
  loading = false,
  variant = 'contained',
  type = '',
  arrowIcon = false,
  href = '',
  target = '',
}) => {
  const theme = useTheme();
  const colorStyles = generateColorStyles(color, variant, theme);

  // Define sizes
  const sizeStyles = {
    small: {
      fontSize: theme.spacing(2.5),
      padding: theme.spacing(1.5),
    },
    medium: {
      fontSize: theme.spacing(3),
      padding: theme.spacing(1.5 , 3),
    },
    large: {
      fontSize: theme.spacing(4),
      padding: theme.spacing(3),
    },
  };

  return (
    <CustomButton
      variant={variant}
      type={type}
      sx={{
        ...colorStyles,
        ...sizeStyles[size], // Apply size styles
        '&:disabled': {
          opacity: 0.8,
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
          color: theme.palette.primary.main,
        },
        ...sx,
      }}
      disabled={disabled}
      onClick={onClick}
      component={link ? CustomButtonLink : 'button'}
      to={link ? to : undefined}
      href={href}
      target={target}
    >
      {loading ? (
        <CircularProgress size={20} color="primary" />
      ) : (
        <>{children}</>
      )}
    </CustomButton>
  );
};
export default BaseButton;
