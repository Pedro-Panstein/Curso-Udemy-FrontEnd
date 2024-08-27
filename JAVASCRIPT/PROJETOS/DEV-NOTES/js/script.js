const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");
const notification = document.querySelector(".notification-container");
const exitNotification = document.querySelector(".notification-container h2");
const searchInput = document.querySelector("#search-input");
const exportBtn = document.querySelector("#export-notes");

// Funções
function showNotes() {
  cleanNotes();

  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);

    notesContainer.appendChild(noteElement);
  });
}

function cleanNotes() {
  notesContainer.replaceChildren([]);
}

function addNote() {
  const notes = getNotes();

  const noteObject = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  };
  const noteElement = createNote(noteObject.id, noteObject.content);

  notesContainer.appendChild(noteElement);

  notes.push(noteObject);

  saveNotes(notes);

  noteInput.value = "";
}

function generateId() {
  return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed) {
  const element = document.createElement("div");
  element.classList.add("note");
  const textArea = document.createElement("textarea");
  textArea.value = content;
  textArea.placeholder = "Adicione algum texto...";
  element.appendChild(textArea);

  // Arrastar
  element.setAttribute("draggable", true); // método de arrastar
  element.dataset.id = id; // método de arrastar
 // método de arrastar
  element.addEventListener("dragstart", handleDragStart); // método de arrastar
  element.addEventListener("dragover", handleDragOver); // método de arrastar
  element.addEventListener("drop", handleDrop); // método de arrastar


  const pinIcon = document.createElement("i");

  pinIcon.classList.add(...["bi", "bi-pin"]);
  element.appendChild(pinIcon);

  const iconDelet = document.createElement("i");

  iconDelet.classList.add(...["bi", "bi-x-lg"]);
  element.appendChild(iconDelet);

  const iconDuplicate = document.createElement("i");

  iconDuplicate.classList.add(...["bi", "bi-file-earmark-plus"]);
  element.appendChild(iconDuplicate);

  if (fixed) {
    element.classList.add("fixed");
  }

  element.querySelector("textarea").addEventListener("keyup", (e) => {
    const noteContent = e.target.value;
    updateNote(id, noteContent);
  });

  element.querySelector(".bi-pin").addEventListener("click", () => {
    toggleFixNote(id);
  });

  element.querySelector(".bi-x-lg").addEventListener("click", () => {
    deleteNote(id, element);
  });

  element
    .querySelector(".bi-file-earmark-plus")
    .addEventListener("click", () => {
      duplicateNote(id);
    });

  return element;
}

function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.dataset.id);
}

// Função para permitir soltar
function handleDragOver(e) {
  e.preventDefault();
}

// Função para gerenciar a ação de soltar
function handleDrop(e) {
  e.preventDefault();
  const draggedNoteId = e.dataTransfer.getData("text/plain");
  const targetNoteId = e.target.closest(".note").dataset.id;

  if (draggedNoteId !== targetNoteId) {
    rearrangeNotes(draggedNoteId, targetNoteId);
  }
}

// Função para reorganizar as notas no array e atualizar o DOM
function rearrangeNotes(draggedNoteId, targetNoteId) {
  const notes = getNotes();
  
  const draggedIndex = notes.findIndex(note => note.id == draggedNoteId);
  const targetIndex = notes.findIndex(note => note.id == targetNoteId);
  
  const [draggedNote] = notes.splice(draggedIndex, 1);
  notes.splice(targetIndex, 0, draggedNote);
  
  saveNotes(notes);
  showNotes();
}



function toggleFixNote(id) {
  const notes = getNotes();
  const targetNotes = notes.filter((note) => note.id === id)[0];

  targetNotes.fixed = !targetNotes.fixed;

  saveNotes(notes);

  showNotes();
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);

  saveNotes(notes);

  notesContainer.removeChild(element);
}

function duplicateNote(id) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id === id)[0];

  const noteObject = {
    id: generateId(),
    content: targetNote.content,
    fixed: false,
  };

  const noteElement = createNote(
    noteObject.id,
    noteObject.content,
    noteObject.fixed
  );

  notesContainer.appendChild(noteElement);
  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();

  const targetNote = notes.filter((note) => note.id === id)[0];

  targetNote.content = newContent;

  saveNotes(notes);
}

function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  const orderedNotes = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1));

  return notes;
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function searchNotes(search) {
  const searchResult = getNotes().filter((note) => {
    return note.content.includes(search);
  });

  if (search !== "") {
    cleanNotes();

    searchResult.forEach((note) => {
      const noteElement = createNote(note.id, note.content);
      notesContainer.appendChild(noteElement);
    });
    return;
  }
  cleanNotes();

  showNotes();
}

function exportData() {
  const notes = getNotes();

  const csvString = [
    ["ID", "Conteúdo", "Fixado"],
    ...notes.map((note) => [note.id, note.content, note.fixed]),
  ].map((e) => e.join(",")).join("\n")
  
  const element = document.createElement("a")

  element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);

  element.target = "_blank"

  element.download = "notes.csv"

  element.click()
}

// Eventos
addNoteBtn.addEventListener("click", () => {
  if (noteInput.value === "") {
    notification.classList.remove("hidden");
    exitNotification.addEventListener("click", () => {
      notification.classList.add("hidden");
    });
  } else {
    addNote();
  }
});

noteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (noteInput.value === "") {
      notification.classList.remove("hidden");
      exitNotification.addEventListener("click", () => {
        notification.classList.add("hidden");
      });
    } else {
      addNote();
    }
  }
});

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;

  searchNotes(search);
});

exportBtn.addEventListener("click", () => {
  exportData();
});

showNotes();