// lib/editor/serialize.ts
import { DOMSerializer } from "prosemirror-model";
import DOMPurify from "dompurify";
import { EditorState } from "prosemirror-state";

export function serializeToHTML(state: EditorState) {
  const fragment = DOMSerializer
    .fromSchema(state.schema)
    .serializeFragment(state.doc.content);
  
  const wrapper = document.createElement("div");
  wrapper.appendChild(fragment);
  
  return DOMPurify.sanitize(wrapper.innerHTML);
}
