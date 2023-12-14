import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const buttons = [
    { tooltip: 'Get a Prompt', Icon: TerminalIcon },
    { tooltip: 'Search Quotes', Icon: FormatQuoteIcon },
    { tooltip: 'Search Journal', Icon: MenuBookIcon },
    { tooltip: 'Summarize', Icon: HistoryEduIcon },
];

export default function Menu() {
    return (
        <AppBar position="sticky" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                {buttons.map(({ tooltip, Icon }) => (
                    <Tooltip arrow title={tooltip} key={tooltip}>
                        <IconButton size="large">
                            <Icon />
                        </IconButton>
                    </Tooltip>
                ))}
            </Toolbar>
        </AppBar>
    );
}
