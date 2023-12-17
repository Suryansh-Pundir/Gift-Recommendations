<div class="wrapper">
        
        <script>
            // JavaScript code goes here
            window.onload = function () {
                // Display an alert when the page is loaded
                alert('Welcome to PRESENTIFY!');

                // Add an interactive feature - change background color on button click
                var changeColorButton = document.createElement('button');
                changeColorButton.textContent = 'Change Background Color';
                changeColorButton.addEventListener('click', function () {
                    // Change the background color to a random color
                    document.body.style.backgroundColor = getRandomColor();
                });

                // Append the button to the body
                document.body.appendChild(changeColorButton);

                // Function to generate a random color
                function getRandomColor() {
                    var letters = '0123456789ABCDEF';
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                }
            };
        </script>

        

        <footer>
           
        </footer>
    </div>