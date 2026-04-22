const form = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

// Usuario y contraseña de prueba
const usuarioCorrecto = "admin";
const passwordCorrecto = "1234";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (usuario === usuarioCorrecto && password === passwordCorrecto) {
        mensaje.style.color = "#00ff88";
        mensaje.textContent = "✅ Login exitoso";

        // Simular redirección
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "❌ Usuario o contraseña incorrectos";
    }
});