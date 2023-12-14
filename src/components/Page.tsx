import { Box, Paper } from '@mui/material';
import Lexical from './Lexical';
import styles from './Page.module.scss';

export default function Page() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
                sx={{
                    mx: 1,
                    minHeight: '11in',
                    maxWidth: '8in',
                    flexGrow: 1,
                }}
                className={styles.page}
            >
                <Lexical />
            </Paper>
        </Box>
    );
}
