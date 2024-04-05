import MuiButton from '@mui/material/Button';
import React from 'react'

interface Props {
    color: string; // The color of the button background or border.
    variant: "text" | "outlined" | "contained"; // The design of the button
    children: React.ReactNode; // The content to display inside the button.
    sx?: any; // Additional styles to apply to the button
    onClick?: () => void; // Optional click event handler function.
}
// Returns the desired button using Props.
export const Button = ({ color, variant, children, sx, onClick }: Props) => {
  return (
  <MuiButton
    onClick={onClick}
    variant={variant}
    sx={{
      background: variant !== "outlined" ? color : null,
      color: variant === "outlined" ? color : "auto",
      border: variant === "outlined" ? `1px solid ${color}` : null,
      width: "10rem",
      padding: "0.5rem 1rem",
      borderRadius: 0,
      fontWeight: 800,
      '&:hover': {
        backgroundColor: `${color}`,
        color: 'black'},
        ...sx }}>
          {children}
  </MuiButton>
  );
};
