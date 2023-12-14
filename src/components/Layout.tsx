import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return <Box sx={{ mb: 8 }}>{children}</Box>;
}
