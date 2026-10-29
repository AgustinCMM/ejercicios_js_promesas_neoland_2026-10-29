(() => {
  const STORAGE_KEY = "repaso-promesas-progreso-v1";
  const statusOptions = ["pendiente", "resuelto"];
  const notice = document.querySelector("#app-notice");
  const exerciseIds = Array.from({ length: 51 }, (_, index) => String(index + 1).padStart(2, "0"));
  const toggleButtons = Array.from(document.querySelectorAll("[data-status-toggle]"));
  const exportButton = document.querySelector("[data-export-progress]");
  const importButton = document.querySelector("[data-import-trigger]");
  const importInput = document.querySelector("[data-import-progress]");
  let storageAvailable = false;
  let progress = createPendingProgress();
  let startupNotice = "";

  function createPendingProgress() {
    return Object.fromEntries(exerciseIds.map((id) => [id, "pendiente"]));
  }

  function isValidProgressFile(value) {
    if (!value || typeof value !== "object" || value.version !== 1) {
      return false;
    }

    const states = value.exercises;
    if (!states || typeof states !== "object" || Array.isArray(states)) {
      return false;
    }

    const keys = Object.keys(states);
    if (keys.length !== exerciseIds.length || exerciseIds.some((id) => !Object.hasOwn(states, id))) {
      return false;
    }

    return exerciseIds.every((id) => statusOptions.includes(states[id]));
  }

  function showNotice(message, kind) {
    if (!notice) {
      return;
    }

    notice.textContent = message;
    notice.dataset.kind = kind || "warning";
    notice.hidden = !message;
  }

  function checkStorage() {
    try {
      const storage = window.localStorage;
      storage.setItem(STORAGE_KEY + "-check", "ok");
      storage.removeItem(STORAGE_KEY + "-check");
      return true;
    } catch {
      startupNotice = "El almacenamiento local no está disponible. Los cambios no se conservarán al cerrar o recargar esta página.";
      return false;
    }
  }

  function loadProgress() {
    if (!storageAvailable) {
      return createPendingProgress();
    }

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === null) {
        return createPendingProgress();
      }

      const parsed = JSON.parse(saved);
      if (!isValidProgressFile(parsed)) {
        startupNotice = "El progreso guardado no tiene un formato válido. Se muestran todos los ejercicios como pendientes.";
        return createPendingProgress();
      }

      return { ...parsed.exercises };
    } catch {
      startupNotice = "No se pudo leer el progreso guardado. Se muestran todos los ejercicios como pendientes.";
      return createPendingProgress();
    }
  }

  function saveProgress() {
    if (!storageAvailable) {
      return false;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: 1,
          exercises: progress
        })
      );
      return true;
    } catch {
      storageAvailable = false;
      return false;
    }
  }

  function renderProgress() {
    const indexCards = document.querySelectorAll("[data-exercise-card]");
    indexCards.forEach((card) => {
      const state = progress[card.dataset.exerciseId] || "pendiente";
      const label = card.querySelector("[data-status-label]");
      if (label) {
        label.textContent = state === "resuelto" ? "Estado: Resuelto" : "Estado: Pendiente";
        label.dataset.state = state;
      }
    });

    toggleButtons.forEach((button) => {
      const state = progress[button.dataset.exerciseId] || "pendiente";
      const stateLabel = button.querySelector("[data-current-status]");

      if (stateLabel) {
        stateLabel.textContent = state === "resuelto" ? "Resuelto" : "Pendiente";
        stateLabel.dataset.state = state;
      }

      button.dataset.state = state;
      button.setAttribute(
        "aria-label",
        state === "resuelto" ? "Cambiar estado a pendiente" : "Cambiar estado a resuelto"
      );
      button.setAttribute("aria-pressed", String(state === "resuelto"));
    });
  }

  function downloadProgress() {
    const fileData = {
      version: 1,
      savedAt: new Date().toISOString(),
      exercises: progress
    };
    const file = new Blob([JSON.stringify(fileData, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "progreso-repaso-promesas.json";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showNotice("Se descargó una copia JSON del progreso.", "success");
  }

  async function importProgress(file) {
    if (!file) {
      return;
    }

    try {
      const parsed = JSON.parse(await file.text());
      if (!isValidProgressFile(parsed)) {
        showNotice("El archivo no contiene los 51 estados válidos. No se reemplazó el progreso actual.", "error");
        return;
      }

      progress = { ...parsed.exercises };
      renderProgress();
      const saved = saveProgress();
      showNotice(
        saved
          ? "Progreso importado y guardado en este navegador."
          : "Progreso importado para esta sesión. El almacenamiento local no está disponible.",
        saved ? "success" : "warning"
      );
    } catch {
      showNotice("No se pudo leer el archivo JSON. No se reemplazó el progreso actual.", "error");
    } finally {
      importInput.value = "";
    }
  }

  storageAvailable = checkStorage();
  progress = loadProgress();
  renderProgress();

  if (startupNotice) {
    showNotice(startupNotice, "warning");
  }

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.exerciseId;
      progress[id] = progress[id] === "resuelto" ? "pendiente" : "resuelto";
      renderProgress();
      if (!saveProgress()) {
        showNotice(
          "El estado cambió en esta página, pero el almacenamiento local no está disponible y no se conservará al recargar.",
          "warning"
        );
      } else {
        showNotice("");
      }
    });
  });

  if (exportButton) {
    exportButton.addEventListener("click", downloadProgress);
  }

  if (importButton && importInput) {
    importButton.addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", () => importProgress(importInput.files[0]));
  }

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY || !storageAvailable) {
      return;
    }

    try {
      const parsed = JSON.parse(event.newValue);
      if (isValidProgressFile(parsed)) {
        progress = { ...parsed.exercises };
        renderProgress();
      }
    } catch {
      // La vista actual conserva su estado si otra pestaña escribe datos no válidos.
    }
  });
})();
