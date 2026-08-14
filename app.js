// initialize interactive identity kit functionality
document.addEventListener('DOMContentLoaded', () => {
  initToast();
  initCopyHandlers();
  initTypeTester();
  initSvgHandlers();
  initDemoInteractions();
});

// toast notification manager
function showToast(message, icon = 'fi-br-check') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fi ${icon}"></i><span>${message}</span>`;
  container.appendChild(toast);

  // animate in
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // dismiss after timeout
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 2400);
}

function initToast() {
  // ensure toast container is ready
}

// clipboard helper with feedback
async function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage, 'fi-br-check');
  } catch (err) {
    // fallback for environments without clipboard api permissions
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(successMessage, 'fi-br-check');
    } catch (fallbackErr) {
      showToast('Failed to copy', 'fi-br-cross');
    }
    document.body.removeChild(textarea);
  }
}

// copy handler setups
function initCopyHandlers() {
  // swatch cards click to copy
  const swatches = document.querySelectorAll('.swatch-card');
  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      const hex = swatch.getAttribute('data-copy');
      if (hex) {
        copyToClipboard(hex, `Copied hex color: ${hex}`);
      }
    });
  });

  // glass tier cards click to copy
  const glassCards = document.querySelectorAll('.glass-tier-card');
  glassCards.forEach((card) => {
    card.addEventListener('click', () => {
      const code = card.getAttribute('data-copy');
      if (code) {
        copyToClipboard(code, `Copied layer: ${code}`);
      }
    });
  });

  // two-line style note copy buttons
  const styleNoteContent = `Fonts: Outfit (headings/body, 400/500) & JetBrains Mono (code/metadata, 400/500).
Palette: Pitch Black #000000, Pure White #ffffff, Bright Gray #f5f5f5, Body Gray #d4d4d4, Muted Gray #a3a3a3, Dim Gray #737373, with 3–9% translucent white glass layers; a distraction-free monochrome aesthetic where the work is unconditionally the loudest element on the page.`;

  const copyNoteQuickBtn = document.getElementById('copy-style-note-quick-btn');
  if (copyNoteQuickBtn) {
    copyNoteQuickBtn.addEventListener('click', () => {
      copyToClipboard(styleNoteContent, 'Copied 2-line style note!');
    });
  }

  const copyNoteBtn = document.getElementById('copy-style-note-btn');
  if (copyNoteBtn) {
    copyNoteBtn.addEventListener('click', () => {
      copyToClipboard(styleNoteContent, 'Copied 2-line style note!');
    });
  }

  // full system prompt copy buttons
  const promptElement = document.getElementById('system-prompt-content');
  const fullPromptText = promptElement ? promptElement.innerText : '';

  const heroCopyPromptBtn = document.getElementById('hero-copy-prompt-btn');
  if (heroCopyPromptBtn) {
    heroCopyPromptBtn.addEventListener('click', () => {
      copyToClipboard(fullPromptText, 'Copied complete system prompt!');
    });
  }

  const copyFullPromptBtn = document.getElementById('copy-full-prompt-btn');
  if (copyFullPromptBtn) {
    copyFullPromptBtn.addEventListener('click', () => {
      copyToClipboard(fullPromptText, 'Copied complete system prompt!');
    });
  }
}

// live interactive type tester
function initTypeTester() {
  const textInput = document.getElementById('interactive-type-input');
  const familySelect = document.getElementById('font-family-select');
  const weightSelect = document.getElementById('font-weight-select');
  const sizeSlider = document.getElementById('font-size-slider');
  const sizeValDisplay = document.getElementById('font-size-val');
  const resetBtn = document.getElementById('reset-type-btn');

  if (!textInput || !familySelect || !weightSelect || !sizeSlider) return;

  const updateTypeStyles = () => {
    textInput.style.fontFamily = familySelect.value;
    textInput.style.fontWeight = weightSelect.value;
    textInput.style.fontSize = `${sizeSlider.value}px`;
    if (sizeValDisplay) {
      sizeValDisplay.textContent = `${sizeSlider.value}px`;
    }
  };

  familySelect.addEventListener('change', updateTypeStyles);
  weightSelect.addEventListener('change', updateTypeStyles);
  sizeSlider.addEventListener('input', updateTypeStyles);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      familySelect.value = "'Outfit', sans-serif";
      weightSelect.value = "400";
      sizeSlider.value = "24";
      textInput.value = "Decide once, inherit forever. Focus on the craft.";
      updateTypeStyles();
      showToast('Type tester reset to defaults', 'fi-br-refresh');
    });
  }

  updateTypeStyles();
}

// svg copy and download actions
function initSvgHandlers() {
  // copy svg code
  const copySvgBtns = document.querySelectorAll('.copy-svg-btn');
  copySvgBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const stage = document.getElementById(targetId);
      if (stage) {
        const svgElement = stage.querySelector('svg');
        if (svgElement) {
          const svgString = new XMLSerializer().serializeToString(svgElement);
          copyToClipboard(svgString, 'Copied raw SVG code!');
        }
      }
    });
  });

  // download svg file
  const downloadSvgBtns = document.querySelectorAll('.download-svg-btn');
  downloadSvgBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const filename = btn.getAttribute('data-filename') || 'asset.svg';
      const stage = document.getElementById(targetId);
      if (stage) {
        const svgElement = stage.querySelector('svg');
        if (svgElement) {
          const svgString = new XMLSerializer().serializeToString(svgElement);
          const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement('a');
          downloadLink.href = url;
          downloadLink.download = filename;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(url);
          showToast(`Downloaded ${filename}`, 'fi-br-download');
        }
      }
    });
  });
}

// interactive demo button feedback
function initDemoInteractions() {
  const primaryDemo = document.getElementById('demo-btn-primary');
  if (primaryDemo) {
    primaryDemo.addEventListener('click', () => {
      showToast('Primary solid button clicked', 'fi-br-sparkles');
    });
  }

  const secondaryDemo = document.getElementById('demo-btn-secondary');
  if (secondaryDemo) {
    secondaryDemo.addEventListener('click', () => {
      showToast('Secondary dark button clicked', 'fi-br-check');
    });
  }
}
