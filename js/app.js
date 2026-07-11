const saveBtn = document.getElementById("saveBtn");
const newBtn = document.getElementById("newBtn");
saveBtn.onclick = () => {
    saveData(
        currentFile.name,
        currentFile.content
    );
    alert("Saved");
};
newBtn.onclick = () => {
    editor.value = "";
    currentFile.name = "Untitled";
    currentFile.content = "";
};