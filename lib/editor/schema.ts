// // lib/editor/schema.ts
// import { Schema } from "prosemirror-model";
// import { orderedList, bulletList, listItem } from "prosemirror-schema-list";
// import { schema as basicSchema } from "prosemirror-schema-basic";


// export const schema = new Schema({
//   nodes: {
//     doc: {
//         content: "block"
//     },
//     // ...basicSchema.spec.nodes,
//     ordered_list: orderedList,
//     bullet_list: bulletList,
//     list_item: listItem,
//     paragraph: {
//       content: "inline*",
//       group: "block",
//       parseDOM: [{ tag: "p" }],
//       toDOM: () => ["p", 0]
//     },
//     text: {
//       group: "inline"
//     },
//     image: {
//       group: "block",
//       draggable: true,
//       attrs: {
//         src: {},
//         alt: { default: "" },
//         title: { default: "" }
//       },
//       parseDOM: [{
//         tag: "img[src]",
//         getAttrs(dom: HTMLElement) {
//           return {
//             src: dom.getAttribute("src"),
//             alt: dom.getAttribute("alt"),
//             title: dom.getAttribute("title")
//           }
//         }
//       }],
//       toDOM(node) {
//         return ["img", node.attrs]
//       }
//     },
//     ad_unit: {
//       group: "block",
//       draggable: true,
//       attrs: {
//         id: {},
//         type: { default: "banner" }
//       },
//       parseDOM: [{
//         tag: "div[data-ad]",
//         getAttrs(dom: HTMLElement) {
//           return {
//             id: dom.getAttribute("data-ad"),
//             type: dom.getAttribute("data-type")
//           }
//         }
//       }],
//       toDOM(node) {
//         return ["div", 
//           { 
//             "data-ad": node.attrs.id,
//             "data-type": node.attrs.type,
//             class: "ad-placeholder"
//           },
//           "Ad Unit"
//         ]
//       }
//     },
//   },
//   marks: basicSchema.spec.marks
// });