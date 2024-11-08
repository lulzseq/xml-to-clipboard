function handleMouseOver(event) {
  const tag = event.target;
  if (tag) {
    tag.addEventListener("click", () => {
      const text = tag.textContent.trim();
      navigator.clipboard.writeText(text);
    });
  }
}

document.addEventListener("mouseover", handleMouseOver);

// TODO: опубликлвать в сторе и закинуть в репозиторий