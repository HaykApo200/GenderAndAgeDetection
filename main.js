const pictureBox = document.getElementById("picture");
const input = document.getElementById('btn1');
const outputBox = document.getElementById('outputBox');

input.addEventListener("change", (e) => {
    let photo = e.target.files[0]; 

    if (photo) {
        var reader = new FileReader();
        reader.readAsDataURL(photo);

        reader.onload = function(event) {  
            pictureBox.style.backgroundImage = `url('${event.target.result}')`; 
            pictureBox.style.opacity = '1';
            outputBox.style.display = "inline";
        };
    } else {
        pictureBox.style.backgroundImage = "url('./image/pictures.jpg')";
        pictureBox.style.opacity = '0.5';
        outputBox.style.display = "none";
        output.innerHTML = " ";
    }
})
