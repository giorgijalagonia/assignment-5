<!DOCTYPE html>
<html>
<body>
    <button id="hideButton">hide div</button>
    <div id="textDiv">random text</div>
    <script>
        const hideButton = document.getElementById("hideButton");
        const textDiv = document.getElementById("textDiv");

        hideButton.addEventListener("click", function() {
            textDiv.style.display = "none";

            const cardDiv = document.createElement("div");
            cardDiv.id = "card";

            const h2 = document.createElement("h2");
            h2.textContent = "Gandalf";

            const link = document.createElement("a");
            link.href = "#";
            link.textContent = "Go to profile";

            cardDiv.appendChild(h2);
            cardDiv.appendChild(link);

            document.body.appendChild(cardDiv);
        });
    </script>
</body>
</html>
