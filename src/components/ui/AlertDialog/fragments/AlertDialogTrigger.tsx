'use client';
import React, { useContext } from 'react';
import { clsx } from 'clsx';
import ButtonPrimitive from '~/core/primitives/Button';
import { AlertDialogContext } from '../contexts/AlertDialogContext';

export type AlertDialogTriggerProps = {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

const AlertDialogTrigger = ({ children, asChild, className = '', ...props } : AlertDialogTriggerProps) => {
    const { rootClass, handleOpenChange, getReferenceProps, refs } = useContext(AlertDialogContext);

    return (
        <ButtonPrimitive
            ref={refs.setReference}
            asChild={asChild}
            onClick={() => handleOpenChange(true)}
            className={clsx(`${rootClass}-trigger`, className)}
            {...getReferenceProps()}
            {...props}
        >
            {children}
        </ButtonPrimitive>
    );
};

export default AlertDialogTrigger;
