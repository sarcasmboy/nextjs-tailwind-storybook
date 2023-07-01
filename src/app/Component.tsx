import React, { Suspense } from "react";

const Component = ({
    variant,
}: {
    variant: 'built-in' | 'extended'
}) => {
    const className = variant === 'built-in'
        ? 'bg-zinc-500'
        : 'bg-custom';

    return (
        <span className={`border-2 p-4 ${className}`}>{variant}</span>
    )
}

export default Component;