import MuiButton from '@mui/material/Button';
import React from 'react'

interface Props {
    color: string;
    variant: "text" | "outlined" | "contained";
    children: React.ReactNode;
    sx?: any; 
    onClick?: () => void;
}

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
            ...sx,
        }}>
        {children}
    </MuiButton>
  );
};
