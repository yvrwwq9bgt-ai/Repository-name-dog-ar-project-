const viewer = document.querySelector("model-viewer");
viewer.addEventListener("load", () => console.log("Dog 3D model loaded successfully."));
viewer.addEventListener("error", () => console.error("Failed to load the dog 3D model. Check models/dog.glb"));
