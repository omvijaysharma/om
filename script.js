function OMFele(ele) {return document.querySelector(ele)}

document.addEventListener("DOMContentLoaded", function() {
    OMFele('#bg-video').src = "background/sukuna.mp4";
});
//======================================================================================
function linkText() {
    let links = document.querySelectorAll('.project-list a');
    let results = [];
    
    links.forEach(link => {
        if (link.innerText === "") {
            // Agar text empty hai toh URL se last word lelo
            const href = link.getAttribute('href');
            if (href) {
                const parts = href.split('/').filter(part => part !== '');
                if (parts.length > 0) {
                    const lastWord = parts[parts.length - 1];
                    link.innerText = lastWord; // Set kardo text
                    results.push(lastWord);
                }
            }
        } else {
            // Agar text already hai toh use hi rakho
            results.push(link.innerText);
        }
    });
    
    return results;
}

// run when start ============================================================
linkText();
