// Smooth scrolling (Rolagem suave para links internos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission (Lógica de envio do formulário de contato para o WhatsApp)
document.querySelector('.contact-form button').addEventListener('click', function(e) {
    e.preventDefault();
    const nome = document.querySelector('input[type="text"]').value;
    const mensagem = document.querySelector('textarea').value;
    
    // Opcional: Adicionar mais campos na mensagem (como email e telefone)
    const email = document.querySelector('input[type="email"]').value;
    const telefone = document.querySelector('input[type="tel"]').value;

    if (nome && mensagem) {
        let texto = `Olá! Meu nome é ${nome}. `;
        if (email) texto += `Meu e-mail: ${email}. `;
        if (telefone) texto += `Meu telefone: ${telefone}. `;
        texto += `Mensagem: ${mensagem}`;
        
        const url = `https://wa.me/5548991381353?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    } else {
        alert('Por favor, preencha pelo menos seu nome e mensagem.');
    }
});

// =======================================================
// Bloco 1: Lógica de Smooth Scrolling (Rolagem Suave)
// =======================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

