/* ==========================================================================
   1. DADOS DOS PILARES DE BENEFÍCIOS DO CLUBE
   ========================================================================== */
const CLUB_PILLARS = [
  {
    title: 'Programa de Pontos Brasa',
    description: 'A cada R$ 1,00 gasto, você ganha 10 brasas para trocar por porções, shakes ou burgers inteiros.',
    iconSvg: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'
  },
  {
    title: 'Checkout em 15 Segundos',
    description: 'Salve seus endereços de entrega e o ponto preferido da sua carne (ao ponto ou bem passado).',
    iconSvg: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
  },
  {
    title: 'Ofertas Secretas Toda Quinta',
    description: 'Receba cupons exclusivos para os combos do cardápio antes de serem divulgados nas redes sociais.',
    iconSvg: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>'
  }
];

function renderClubPillars() {
  const container = document.getElementById('club-pillars');
  if (!container) return;

  container.innerHTML = CLUB_PILLARS.map(pillar => `
    <div class="pillar-item">
      <div class="pillar-item__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          ${pillar.iconSvg}
        </svg>
      </div>
      <div>
        <h3>${pillar.title}</h3>
        <p>${pillar.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. MENU MOBILE RESPONSIVO
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  navMenu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   3. MÁSCARA AUTOMÁTICA DE WHATSAPP NO CADASTRO
   ========================================================================== */
function initPhoneMask() {
  const phoneInput = document.getElementById('reg-phone');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', e => {
    let digits = e.target.value.replace(/\D/g, '').slice(0, 11);

    if (digits.length > 6) {
      e.target.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else if (digits.length > 2) {
      e.target.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length > 0) {
      e.target.value = `(${digits}`;
    } else {
      e.target.value = '';
    }
  });
}

/* ==========================================================================
   4. ALTERNÂNCIA DE ABAS, SENHA E AUTENTICAÇÃO (LOGIN / CADASTRO)
   ========================================================================== */
function initAuthController() {
  const USER_STORAGE_KEY = 'brasa_co_user_v1';

  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const authFeedback = document.getElementById('auth-feedback');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackMessage = document.getElementById('feedback-message');
  const switchToRegisterBtn = document.getElementById('switch-to-register');
  const switchToLoginBtn = document.getElementById('switch-to-login');
  const forgotPasswordBtn = document.getElementById('forgot-password-btn');

  if (!tabLogin || !tabRegister || !loginForm || !registerForm) return;

  function showFeedback(title, message) {
    feedbackTitle.textContent = title;
    feedbackMessage.textContent = message;
    authFeedback.hidden = false;
    authFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showLogin() {
    tabLogin.classList.add('is-active');
    tabLogin.setAttribute('aria-selected', 'true');
    tabRegister.classList.remove('is-active');
    tabRegister.setAttribute('aria-selected', 'false');

    loginForm.hidden = false;
    loginForm.style.display = 'flex';
    registerForm.hidden = true;
    registerForm.style.display = 'none';
    authFeedback.hidden = true;
  }

  function showRegister() {
    tabRegister.classList.add('is-active');
    tabRegister.setAttribute('aria-selected', 'true');
    tabLogin.classList.remove('is-active');
    tabLogin.setAttribute('aria-selected', 'false');

    registerForm.hidden = false;
    registerForm.style.display = 'flex';
    loginForm.hidden = true;
    loginForm.style.display = 'none';
    authFeedback.hidden = true;
  }

  tabLogin.addEventListener('click', showLogin);
  tabRegister.addEventListener('click', showRegister);
  if (switchToRegisterBtn) switchToRegisterBtn.addEventListener('click', showRegister);
  if (switchToLoginBtn) switchToLoginBtn.addEventListener('click', showLogin);

  // Mostrar / Ocultar Senha
  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.textContent = isPassword ? 'Ocultar' : 'Ver';
    });
  });

  // Envio do Formulário de Login
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({
      email,
      points: 350,
      loggedAt: new Date().toISOString()
    }));

    showFeedback(
      'Login realizado com sucesso!',
      `Olá (${email}), você já está conectado ao Clube Brasa & Co. Seu saldo atual é de 350 brasas.`
    );
  });

  // Envio do Formulário de Cadastro
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const fullName = document.getElementById('reg-name').value.trim();
    const firstName = fullName.split(' ')[0];
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({
      name: fullName,
      email,
      phone,
      points: 150,
      coupon: 'BRASA15',
      loggedAt: new Date().toISOString()
    }));

    showFeedback(
      `Bem-vindo ao Clube Brasa, ${firstName}!`,
      'Sua conta foi criada e o cupom BRASA15 (R$ 15,00 OFF) já está ativo para seu primeiro pedido.'
    );
  });

  // Recuperação de Senha
  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener('click', () => {
      const emailValue = document.getElementById('login-email').value.trim();
      showFeedback(
        'Recuperação de senha',
        emailValue
          ? `Enviamos um link de redefinição de senha para ${emailValue}.`
          : 'Digite seu e-mail no campo acima e clique novamente para receber o link de redefinição.'
      );
    });
  }
}

/* ==========================================================================
   INICIALIZAÇÃO DA PÁGINA DE LOGIN
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderClubPillars();
  initMobileMenu();
  initPhoneMask();
  initAuthController();
});