import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

export default function Lexical() {
    const initialConfig = {
        namespace: 'lexical',
        onError(error: Error) {
            console.error(error);
        },
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <PlainTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<></>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
        </LexicalComposer>
    );
}
