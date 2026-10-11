import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("bibsearch");
  if (!input) return;
  const clearButton = document.getElementById("bibsearch-clear");
  const status = document.getElementById("bibsearch-status");
  const entries = [...document.querySelectorAll(".bibliography > li")];
  let timeoutId;

  const filterItems = (value) => {
    const searchTerm = value.trim().toLowerCase();
    document.querySelectorAll(".bibliography, .bibliography .unloaded").forEach((element) => element.classList.remove("unloaded"));

    // Match whole entries consistently, including when a title spans text nodes.
    entries.forEach((element) => {
      element.classList.toggle("unloaded", !element.textContent.toLowerCase().includes(searchTerm));
    });
    if (window.CSS?.highlights) {
      highlightSearchTerm({ search: searchTerm, selector: ".bibliography > li" });
    }

    // Hide empty year/type headings while retaining the inherited bibliography groups.
    document.querySelectorAll("h2.bibliography").forEach((heading) => {
      let next = heading.nextElementSibling;
      let hasMatches = false;
      while (next && next.tagName !== "H2") {
        if (next.tagName === "OL") {
          const empty = !next.querySelector(":scope > li:not(.unloaded)");
          next.classList.toggle("unloaded", empty);
          if (next.previousElementSibling?.tagName === "H3") {
            next.previousElementSibling.classList.toggle("unloaded", empty);
          }
          if (!empty) hasMatches = true;
        }
        next = next.nextElementSibling;
      }
      heading.classList.toggle("unloaded", !hasMatches);
    });

    const visible = entries.filter((entry) => !entry.classList.contains("unloaded")).length;
    clearButton.hidden = !value;
    status.textContent = searchTerm
      ? visible === 0
        ? "No matching publications. Try another title, author, topic or year, or clear the filter."
        : `Showing ${visible} of ${entries.length} publications.`
      : `Showing all ${entries.length} publications.`;
  };

  const updateFromHash = () => {
    clearTimeout(timeoutId);
    const rawHash = window.location.hash.substring(1);
    try {
      input.value = decodeURIComponent(rawHash);
    } catch {
      input.value = rawHash;
    }
    filterItems(input.value);
  };

  input.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => filterItems(input.value), 300);
  });
  clearButton.addEventListener("click", () => {
    clearTimeout(timeoutId);
    input.value = "";
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    filterItems("");
    input.focus();
  });
  window.addEventListener("hashchange", updateFromHash);
  updateFromHash();
});
