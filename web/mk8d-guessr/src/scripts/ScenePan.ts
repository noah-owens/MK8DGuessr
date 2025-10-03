export function setupPanoramaViewer(viewer: HTMLElement, panorama: HTMLImageElement, offsetDisplay: HTMLElement, angleDisplay: HTMLElement) {
    var isDragging: boolean = false;
    var startX: number = 0;
    var offsetCurrent: number = 0;
    var imageWidth: number = 0;
    var viewerWidth: number = 0;
    var offsetMax: number = 0;

    panorama.ondragstart = (e) => e.preventDefault;

    function updateDebugHUD() {
        offsetDisplay.textContent = `Offset: ${Math.round(offsetCurrent)}px`;

        const angle = ((offsetCurrent / imageWidth) * 120 - 60).toFixed(1);
        angleDisplay.textContent = `Angle: ${angle}&deg;`;
    }

    function updatePan() {
        imageWidth = panorama.offsetWidth;
        viewerWidth = viewer.offsetWidth;
        offsetMax = (imageWidth - viewerWidth) / 2

        panorama.style.left = `calc(50% - ${offsetCurrent}px)`;
        updateDebugHUD();
    }

    viewer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        viewer.style.cursor = "grabbing";
    });

    viewer.addEventListener("mouseup", () => {
        isDragging = false;
        viewer.style.cursor = "grab";
    });

    viewer.addEventListener("mouseleave", () => {
        isDragging = false;
        viewer.style.cursor = "grab";
    });

    viewer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const delta = e.clientX - startX;
        startX = e.clientX;
        offsetCurrent -= delta;
        offsetCurrent = Math.max(-offsetMax, Math.min(offsetMax, offsetCurrent));
        panorama.style.left = `calc(50% - ${offsetCurrent}px)`;
        updateDebugHUD();
    });

    if (panorama.complete) {
      updatePan();
    } else {
      panorama.onload = updatePan;
    }

    window.addEventListener("resize", updatePan);
}