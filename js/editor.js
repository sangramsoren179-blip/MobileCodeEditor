import { currentFile } from "./fileManager.js";

export const editor = document.getElementById("editor");

editor.addEventListener("input", () => {
    currentFile.content = editor.value;
});