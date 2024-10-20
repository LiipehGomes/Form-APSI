
    window.onload = function() {
        var canvas = document.getElementById('signatureCanvas');
        var ctx = canvas.getContext('2d');
        var drawing = false;
        var signatureInput = document.getElementById('signatureInput');
        
        // Iniciar o desenho
        canvas.addEventListener('mousedown', function(e) {
            drawing = true;
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        });

        // Continuar o desenho
        canvas.addEventListener('mousemove', function(e) {
            if (drawing) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
            }
        });

        // Parar o desenho
        canvas.addEventListener('mouseup', function() {
            drawing = false;
            // Armazenar a assinatura como uma imagem no campo oculto
            signatureInput.value = canvas.toDataURL();
        });

        // Parar o desenho quando o mouse sair do canvas
        canvas.addEventListener('mouseleave', function() {
            drawing = false;
        });

        // Limpar o canvas quando clicar no botão 'Clear'
        document.getElementById('clearCanvas').addEventListener('click', function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            signatureInput.value = ''; // Limpar também o campo oculto
        });
    }