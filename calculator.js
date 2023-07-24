document.addEventListener('keydown', function(event) {
            // Check if the Enter key was pressed
            if (event.keyCode === 13 || event.key === "Enter") {
                display.value = eval(display.value);
            }
        });