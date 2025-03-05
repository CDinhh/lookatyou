const video = document.getElementById('video');
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => { video.srcObject = stream; })
            .catch(err => { console.error("Lỗi truy cập camera:", err); });

            document.querySelectorAll('.option').forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        document.querySelectorAll('.option').forEach(cb => {
                            if (cb !== this) cb.checked = false;
                        });
                    }
                });
            })


            document.getElementById("submitBtn").addEventListener("click", function() {
                let audio = document.getElementById("audio");
            
                if (document.getElementById("dep").checked) {
                    audio.src = "brother-ew.mp3";
                    audio.play();
                    setTimeout(() => { alert("??????????????"); }, 100); 
                } else if (document.getElementById("xau").checked) {
                    audio.src = "baby-laughing-meme.mp3";
                    audio.play();
                    setTimeout(() => { alert("Ừa đúng rồi đấy 🤣🤣🤣🤣"); }, 100); 
                }
            });