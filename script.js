document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const backgroundSelect = document.getElementById('background-select');
    const characterSelect = document.getElementById('character-select');
    const skyColorPicker = document.getElementById('sky-color');
    const groundColorPicker = document.getElementById('ground-color');
    const generateBtn = document.getElementById('generate-btn');
    const saveBtn = document.getElementById('save-btn');
    const backgroundLayer = document.getElementById('background-layer');
    const characterLayer = document.getElementById('character-layer');
    const previewContainer = document.querySelector('.preview-container');

    // Update preview when selections change
    backgroundSelect.addEventListener('change', updatePreview);
    characterSelect.addEventListener('change', updatePreview);
    skyColorPicker.addEventListener('input', updatePreview);
    groundColorPicker.addEventListener('input', updatePreview);

    // Generate button click handler
    generateBtn.addEventListener('click', updatePreview);

    // Save button click handler
    saveBtn.addEventListener('click', saveToGallery);

    // Update the preview with current selections
    function updatePreview() {
        // Set background image
        if (backgroundSelect.value) {
            backgroundLayer.style.backgroundImage = `url('${backgroundSelect.value}')`;
        } else {
            backgroundLayer.style.backgroundImage = 'none';
        }

        // Set character image
        if (characterSelect.value) {
            characterLayer.style.backgroundImage = `url('${characterSelect.value}')`;
        } else {
            characterLayer.style.backgroundImage = 'none';
        }

        // Set background colors
        previewContainer.style.backgroundColor = skyColorPicker.value;
        previewContainer.style.backgroundImage = `linear-gradient(to bottom, ${skyColorPicker.value}, ${groundColorPicker.value})`;
    }

    // Save current composition to gallery
    function saveToGallery() {
        // In a real implementation, we would:
        // 1. Convert the preview to an image (using html2canvas or similar)
        // 2. Save to localStorage or a backend
        // 3. For now, we'll just show an alert
        alert('Image saved to gallery! Visit the Gallery page to view your creations.');
    }

    // Initialize preview
    updatePreview();
});