// src/components/CustomButton.jsx
import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({
    label,
    onClick,
    colorScheme = "blue",
    variant = "solid",
    size = "md",
    ...props
}) => {
    return (
        <Button
            onClick={onClick}
            colorScheme={colorScheme}
            variant={variant}
            size={size}
            {...props}
        >
            {label}
        </Button>
    );
};

export default CustomButton;
