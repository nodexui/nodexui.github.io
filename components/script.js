
// SVG Templates
const copySvgIcon = `
      <rect x="9" y="9" width="13" height="13" rx="3" ry="3"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    `;
const checkSvgIcon = `
      <polyline points="20 6 9 17 4 12"></polyline>
    `;

const toast = document.getElementById('iosToast');
let toastTimeout;

// Attach listener to each code box copy button independently
document.querySelectorAll('.ios-code-card').forEach((card) => {
    const copyBtn = card.querySelector('.ios-copy-btn');
    const btnText = card.querySelector('.btn-text');
    const btnIcon = card.querySelector('.btn-icon');
    const codeElement = card.querySelector('.code-content');
    let buttonResetTimeout;

    copyBtn.addEventListener('click', async () => {
        // Clean extracted text (ignores HTML markup)
        const textToCopy = codeElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);

            // Update this specific button state
            copyBtn.classList.add('copied');
            btnText.textContent = 'Copied';
            btnIcon.innerHTML = checkSvgIcon;

            // Display the global iOS Toast HUD
            clearTimeout(toastTimeout);
            toast.classList.add('show');

            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);

            // Reset button back to original state after 2.2s
            clearTimeout(buttonResetTimeout);
            buttonResetTimeout = setTimeout(() => {
                copyBtn.classList.remove('copied');
                btnText.textContent = 'Copy';
                btnIcon.innerHTML = copySvgIcon;
            }, 2200);

        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});
const modal = document.getElementById("demoModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

function open() { modal.classList.add("active"); }
function close() { modal.classList.remove("active"); }

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) close();
});