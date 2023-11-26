"use client";

import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

export default function Tiptap() {
  return (
    <EditorProvider
      editorProps={{
        attributes: {
          class: "focus:outline-none h-full w-full p-8",
        },
      }}
      extensions={extensions}
      content={content}
    >
      <FloatingMenu>This is the floating menu</FloatingMenu>
      <BubbleMenu>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  );
}
