import { saveData } from "./storage.js";
import { currentFile } from "./fileManager.js";
import { editor } from "./editor.js";

const saveBtn = document.getElementById("saveBtn");
const newBtn = document.getElementById("newBtn");

saveBtn.addEventListener("click", () => {
    saveData(currentFile.name, currentFile.content);
    alert("Saved");
});

newBtn.addEventListener("click", () => {
    editor.value = "";
    currentFile.name = "Untitled";
    currentFile.content = "";
});