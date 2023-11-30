import { ReactNode } from 'react';

export interface IActionPanel {
    title?: string;
    children?: ReactNode;
    backButton?: string;
}