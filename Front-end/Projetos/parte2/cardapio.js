/* ==========================================================================
   1. CATÁLOGO CENTRAL E CONFIGURAÇÕES GLOBAIS — BRASA & CO.
   ========================================================================== */
   const STORAGE_KEY = 'brasa_co_cart_v1';
   const DELIVERY_FEE = 8.90;
   const FREE_DELIVERY_THRESHOLD = 90.00;
   
   const MENU_ITEMS = [
     // --- Burgers na Brasa ---
     {
       id: 'brasa-classico',
       category: 'brasa',
       name: 'Brasa Clássico Supremo',
       weight: '180g',
       price: 36.90,
       isBurger: true,
       badge: { text: 'Mais Vendido', variant: 'red' },
       image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
       description: 'Blend 100% Angus na brasa, duplo cheddar inglês maturado, tiras de bacon caramelizado no melado, cebola roxa fresca e maionese defumada no brioche.',
       keywords: 'brasa classico supremo angus cheddar bacon cebola roxa maionese defumada'
     },
     {
       id: 'truffle-brie',
       category: 'brasa',
       name: 'Truffle & Brie Melt',
       weight: '180g',
       price: 42.90,
       isBurger: true,
       badge: { text: "Chef's Choice", variant: 'yellow' },
       image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
       description: 'Hambúrguer Angus suculento, fatia generosa de queijo brie cremoso derretido, cogumelos paris salteados na manteiga de ervas, rúcula e aioli de trufas negras.',
       keywords: 'truffle brie melt queijo brie cogumelos paris rucula aioli trufas negras'
     },
     {
       id: 'inferno-bbq',
       category: 'brasa',
       name: 'Inferno BBQ & Bacon',
       weight: '180g',
       price: 39.90,
       isBurger: true,
       badge: { text: 'Picante', variant: 'red' },
       image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80',
       description: 'Blend Angus grelhado, queijo gouda maçaricado, geleia de pimenta jalapeño defumada, onion rings crocantes, bacon em cubos e barbecue de café torrado.',
       keywords: 'inferno bbq bacon gouda geleia pimenta jalapeno onion rings barbecue picante'
     },
     {
       id: 'gorgonzola-mel',
       category: 'brasa',
       name: 'Gorgonzola & Mel Picante',
       weight: '180g',
       price: 41.90,
       isBurger: true,
       badge: null,
       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
       description: 'Blend Angus na brasa, creme de queijo gorgonzola artesanal, cebola caramelizada reduzida no vinho tinto, alface americana crocante e fio de mel apimentado.',
       keywords: 'gorgonzola mel picante creme gorgonzola cebola caramelizada nozes'
     },
     {
       id: 'veggie-brasa',
       category: 'brasa',
       name: 'Veggie Brasa Defumado',
       weight: '170g',
       price: 35.90,
       isBurger: true,
       badge: { text: 'Vegetariano', variant: 'green' },
       image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
       description: 'Hambúrguer artesanal de grão-de-bico, cogumelos portobello e especiarias defumadas selado na brasa, queijo prato derretido, tomate confit e pesto de manjericão.',
       keywords: 'veggie brasa defumado vegetariano grao de bico cogumelos queijo prato tomate'
     },
   
     // --- Smash Burgers ---
     {
       id: 'duplo-smash',
       category: 'smash',
       name: 'Duplo Smash Old School',
       weight: '2x 100g',
       price: 34.90,
       isBurger: true,
       badge: { text: 'Clássico', variant: 'dark' },
       image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
       description: 'Dois discos prensados na chapa até criar crosta dourada, duplo american cheese derretido, picles artesanal agridoce, cebola picada e molho especial Brasa.',
       keywords: 'duplo smash old school american cheese picles cebola molho especial'
     },
     {
       id: 'triple-cheddar',
       category: 'smash',
       name: 'Triple Cheddar Melt',
       weight: '3x 100g',
       price: 39.90,
       isBurger: true,
       badge: { text: '3 Carnes', variant: 'red' },
       image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
       description: 'Três camadas suculentas de smash burger intercaladas com cheddar cremoso artesanal, farofa crocante de bacon defumado e pão brioche selado.',
       keywords: 'triple cheddar melt smash tres carnes creme cheddar bacon farofa'
     },
     {
       id: 'oklahoma-smash',
       category: 'smash',
       name: 'Oklahoma Onion Smash',
       weight: '2x 100g',
       price: 32.90,
       isBurger: true,
       badge: null,
       image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80',
       description: 'Cebolas fatiadas ultrafinas prensadas diretamente sobre a carne na chapa quente, duplo queijo prato, picles da casa e mostarda artesanal com mel.',
       keywords: 'oklahoma onion smash cebola fatiada fina prensada queijo prato mostarda'
     },
   
     // --- Porções & Acompanhamentos ---
     {
       id: 'fritas-rusticas',
       category: 'porcoes',
       name: 'Fritas Rústicas da Casa',
       weight: '300g',
       price: 19.90,
       isBurger: false,
       badge: null,
       image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
       description: 'Batatas selecionadas cortadas com casca, fritas até ficarem douradas por fora e macias por dentro, finalizadas com páprica defumada, flor de sal e alecrim fresco.',
       keywords: 'fritas rusticas paprica defumada alecrim batata frita'
     },
     {
       id: 'fritas-loaded',
       category: 'porcoes',
       name: 'Fritas Brasa Loaded',
       weight: '450g',
       price: 28.90,
       isBurger: false,
       badge: { text: 'Para Dividir', variant: 'yellow' },
       image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
       description: 'Nossa porção generosa de fritas rústicas coberta com creme quente de cheddar inglês, cubos de bacon defumado crocante e cebolinha fresca.',
       keywords: 'fritas brasa loaded cheddar cremoso bacon crocante cebolinha'
     },
     {
       id: 'onion-rings',
       category: 'porcoes',
       name: 'Onion Rings Artesanais',
       weight: '12 unid.',
       price: 24.90,
       isBurger: false,
       badge: null,
       image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80',
       description: 'Anéis de cebola doce empanados em massa leve temperada com cerveja artesanal, super crocantes. Acompanha molho barbecue defumado.',
       keywords: 'onion rings aneis de cebola empanados cerveja barbecue'
     },
   
     // --- Shakes & Bebidas ---
     {
       id: 'shake-doce-leite',
       category: 'bebidas',
       name: 'Shake Doce de Leite & Sal',
       weight: '400ml',
       price: 24.90,
       isBurger: false,
       badge: { text: 'Favorito', variant: 'yellow' },
       image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
       description: 'Sorvete artesanal de fava de baunilha batido com doce de leite mineiro cremoso, toque de flor de sal, borda caramelizada e chantilly fresco.',
       keywords: 'milkshake doce de leite flor de sal sorvete baunilha chantilly'
     },
     {
       id: 'shake-chocolate',
       category: 'bebidas',
       name: 'Shake Chocolate & Brownie',
       weight: '400ml',
       price: 26.90,
       isBurger: false,
       badge: null,
       image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
       description: 'Sorvete de chocolate 70% cacau batido com calda de chocolate belga, pedaços generosos de brownie assado na casa e raspas de chocolate meio amargo.',
       keywords: 'milkshake chocolate belga brownie cacau'
     },
     {
       id: 'limonada-brasa',
       category: 'bebidas',
       name: 'Limonada da Brasa',
       weight: '450ml',
       price: 14.90,
       isBurger: false,
       badge: null,
       image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
       description: 'Suco natural de limão siciliano e taiti espremidos na hora, xarope artesanal de açúcar mascavo tostado, folhas de hortelã fresca e gelo cristalino.',
       keywords: 'limonada defumada hortela suco natural refrescante'
     }
   ];
   
   /* ==========================================================================
      2. UTILITÁRIOS E GERENCIAMENTO CENTRAL DO CARRINHO (LOCALSTORAGE)
      ========================================================================== */
   function formatBRL(value) {
     return Number(value || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   }
   
   function normalizeText(text) {
     return String(text || '')
       .toLowerCase()
       .normalize('NFD')
       .replace(/[\u0300-\u036f]/g, '');
   }
   
   function slugify(text) {
     return normalizeText(text)
       .replace(/[^a-z0-9]+/g, '-')
       .replace(/^-|-$/g, '') || `item-${Date.now()}`;
   }
   
   function parsePrice(value) {
     if (typeof value === 'number') return value;
     if (!value) return 0;
     const str = String(value).replace(/R\$/gi, '').trim();
     const normalized = str.includes(',')
       ? str.replace(/\./g, '').replace(',', '.')
       : str;
     const parsed = parseFloat(normalized);
     return Number.isNaN(parsed) ? 0 : parsed;
   }
   
   function getCart() {
     try {
       const raw = localStorage.getItem(STORAGE_KEY);
       const parsed = raw ? JSON.parse(raw) : [];
       return Array.isArray(parsed) ? parsed : [];
     } catch {
       return [];
     }
   }
   
   function saveCart(cart) {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
     updateNavbarCartBadge(cart);
   }
   
   function addItemToCart(itemPayload) {
     const cart = getCart();
   
     // Tenta localizar o item no catálogo por ID ou pelo Nome
     const catalogMatch = MENU_ITEMS.find(m =>
       (itemPayload.id && m.id === itemPayload.id) ||
       (itemPayload.name && normalizeText(m.name) === normalizeText(itemPayload.name))
     );
   
     const resolvedId = catalogMatch
       ? catalogMatch.id
       : (itemPayload.id || slugify(itemPayload.name));
   
     const resolvedName = catalogMatch ? catalogMatch.name : (itemPayload.name || 'Item Brasa & Co.');
     const existing = cart.find(c => c.id === resolvedId || normalizeText(c.name) === normalizeText(resolvedName));
   
     if (existing) {
       existing.qty += 1;
     } else {
       cart.push({
         id: resolvedId,
         name: resolvedName,
         desc: catalogMatch
           ? `${catalogMatch.weight} • ${catalogMatch.description}`
           : (itemPayload.desc || 'Preparado na hora na brasa'),
         price: catalogMatch ? catalogMatch.price : parsePrice(itemPayload.price),
         qty: 1,
         isBurger: catalogMatch ? catalogMatch.isBurger : Boolean(itemPayload.isBurger),
         doneness: 'Ao Ponto (Rosado)',
         img: catalogMatch
           ? catalogMatch.image
           : (itemPayload.img || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80')
       });
     }
   
     saveCart(cart);
     return { cart, addedName: resolvedName };
   }
   
   function updateNavbarCartBadge(cart = getCart()) {
     const navCartBadge = document.getElementById('nav-cart-badge');
     if (!navCartBadge) return;
   
     const totalUnits = cart.reduce((acc, item) => acc + item.qty, 0);
     navCartBadge.textContent = `${totalUnits} ${totalUnits === 1 ? 'item' : 'itens'}`;
   }
   
   /* ==========================================================================
      3. BARRA FLUTUANTE DO CARDÁPIO (SINCRONIZADA COM O CARRINHO)
      ========================================================================== */
   function syncFloatingOrderBar(lastAddedName = null) {
     const orderBar = document.getElementById('order-bar');
     if (!orderBar) return;
   
     const orderCountEl = document.getElementById('order-count');
     const orderLastItemEl = document.getElementById('order-last-item');
     const orderTotalEl = document.getElementById('order-total');
   
     const cart = getCart();
     const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
     const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
   
     if (totalQty === 0) {
       orderBar.hidden = true;
       return;
     }
   
     const latestItem = lastAddedName || cart[cart.length - 1].name;
     if (orderCountEl) orderCountEl.textContent = `${totalQty} ${totalQty === 1 ? 'item' : 'itens'}`;
     if (orderLastItemEl) orderLastItemEl.textContent = `Último: ${latestItem}`;
     if (orderTotalEl) orderTotalEl.textContent = formatBRL(totalPrice);
     orderBar.hidden = false;
   }
   
   /* ==========================================================================
      4. EVENTO GLOBAL PARA ADICIONAR ITENS (FUNCIONA EM QUALQUER PÁGINA/HTML)
      ========================================================================== */
   function extractItemFromButton(btn) {
     const card = btn.closest('.menu-item-card, .burger-card, .promo-card, article');
   
     const name =
       btn.dataset.name ||
       card?.querySelector('h3, h4, .burger-card__title')?.textContent?.trim() ||
       'Burger Artesanal';
   
     const price =
       btn.dataset.price ||
       card?.querySelector('.menu-item-card__price, .burger-card__price')?.textContent ||
       0;
   
     const desc =
       btn.dataset.desc ||
       card?.querySelector('.menu-item-card__desc, p')?.textContent?.trim() ||
       'Preparado na hora na brasa';
   
     const img =
       btn.dataset.img ||
       card?.querySelector('img')?.src ||
       '';
   
     const isBurger = btn.dataset.burger
       ? btn.dataset.burger === 'true'
       : /burger|smash|angus/i.test(name);
   
     return {
       id: btn.dataset.id || slugify(name),
       name,
       price,
       desc,
       img,
       isBurger
     };
   }
   
   function initGlobalAddButtons() {
     document.addEventListener('click', event => {
       const btn = event.target.closest('.add-to-order, .add-to-cart, [data-add-to-cart]');
       if (!btn) return;
   
       event.preventDefault();
   
       const payload = extractItemFromButton(btn);
       const { addedName } = addItemToCart(payload);
   
       syncFloatingOrderBar(addedName);
   
       // Feedback visual imediato no botão
       if (!btn.dataset.originalLabel) {
         btn.dataset.originalLabel = btn.textContent.trim();
       }
       btn.textContent = '✓ Adicionado';
       btn.classList.add('btn--added');
   
       clearTimeout(btn._feedbackTimer);
       btn._feedbackTimer = setTimeout(() => {
         btn.textContent = btn.dataset.originalLabel;
         btn.classList.remove('btn--added');
       }, 900);
     });
   }
   
   /* ==========================================================================
      5. MENU MOBILE RESPONSIVO
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
      6. LÓGICA DA PÁGINA DE CARDÁPIO (cardapio.html)
      ========================================================================== */
   function initCatalogPage() {
     // Se houver contêineres [data-grid], preenche automaticamente a partir do MENU_ITEMS
     const grids = document.querySelectorAll('[data-grid]');
     grids.forEach(grid => {
       const categoryKey = grid.dataset.grid;
       const categoryItems = MENU_ITEMS.filter(item => item.category === categoryKey);
   
       grid.innerHTML = '';
       categoryItems.forEach(item => {
         const article = document.createElement('article');
         article.className = 'menu-item-card';
         article.dataset.category = item.category;
         article.dataset.search = normalizeText(`${item.name} ${item.description} ${item.keywords}`);
   
         const badgeHTML = item.badge
           ? `<span class="burger-card__badge burger-card__badge--${item.badge.variant}">${item.badge.text}</span>`
           : '';
   
         article.innerHTML = `
           <div class="menu-item-card__media">
             <img src="${item.image}" alt="${item.name}" loading="lazy">
             ${badgeHTML}
           </div>
           <div class="menu-item-card__body">
             <div class="menu-item-card__top">
               <h3>${item.name}</h3>
               <span class="burger-card__weight">${item.weight}</span>
             </div>
             <p class="menu-item-card__desc">${item.description}</p>
             <div class="menu-item-card__footer">
               <span class="menu-item-card__price">${formatBRL(item.price)}</span>
               <button
                 type="button"
                 class="btn btn--primary btn--sm add-to-order"
                 data-id="${item.id}"
                 data-name="${item.name}"
                 data-price="${item.price.toFixed(2)}"
               >
                 + Adicionar
               </button>
             </div>
           </div>
         `;
   
         grid.appendChild(article);
       });
     });
   
     // Filtros e busca (funcionam tanto com cards gerados quanto com cards estáticos no HTML)
     const filterTabs = document.querySelectorAll('.filter-tab[data-filter]');
     const searchInput = document.getElementById('menu-search-input');
     const categories = document.querySelectorAll('.menu-category');
     const emptySearch = document.getElementById('empty-search');
     const resetFiltersBtn = document.getElementById('reset-filters-btn');
     const clearOrderBtn = document.getElementById('clear-order-btn');
     let currentCategory = 'all';
   
     function applyFilters() {
       if (categories.length === 0) return;
   
       const query = searchInput ? normalizeText(searchInput.value.trim()) : '';
       let totalVisibleCards = 0;
   
       categories.forEach(section => {
         const sectionCards = section.querySelectorAll('.menu-item-card');
         let visibleInSection = 0;
   
         sectionCards.forEach(card => {
           const searchableText = card.dataset.search || normalizeText(card.textContent);
           const cardCategory = card.dataset.category || section.dataset.category || '';
           const matchesCategory = currentCategory === 'all' || cardCategory === currentCategory;
           const matchesSearch = !query || searchableText.includes(query);
   
           if (matchesCategory && matchesSearch) {
             card.style.display = 'flex';
             visibleInSection += 1;
             totalVisibleCards += 1;
           } else {
             card.style.display = 'none';
           }
         });
   
         section.style.display = visibleInSection > 0 ? 'block' : 'none';
       });
   
       if (emptySearch) emptySearch.hidden = totalVisibleCards > 0;
     }
   
     filterTabs.forEach(tab => {
       tab.addEventListener('click', () => {
         filterTabs.forEach(t => {
           t.classList.remove('is-active');
           t.setAttribute('aria-pressed', 'false');
         });
         tab.classList.add('is-active');
         tab.setAttribute('aria-pressed', 'true');
         currentCategory = tab.dataset.filter;
         applyFilters();
       });
     });
   
     if (searchInput) searchInput.addEventListener('input', applyFilters);
   
     if (resetFiltersBtn) {
       resetFiltersBtn.addEventListener('click', () => {
         if (searchInput) searchInput.value = '';
         currentCategory = 'all';
         filterTabs.forEach(t => {
           const isAll = t.dataset.filter === 'all';
           t.classList.toggle('is-active', isAll);
           t.setAttribute('aria-pressed', isAll);
         });
         applyFilters();
       });
     }
   
     if (clearOrderBtn) {
       clearOrderBtn.addEventListener('click', () => {
         saveCart([]);
         syncFloatingOrderBar();
       });
     }
   
     syncFloatingOrderBar();
   }
   
   /* ==========================================================================
      7. LÓGICA DA PÁGINA DE CARRINHO (carrinho.html)
      ========================================================================== */
   function initCartPage() {
     const cartWorkspace = document.getElementById('cart-workspace');
     if (!cartWorkspace) return;
   
     let deliveryMode = 'delivery';
     let activeCoupon = null;
   
     const cartItemsList = document.getElementById('cart-items-list');
     const emptyCartBox = document.getElementById('empty-cart-box');
     const cartItemsHeading = document.getElementById('cart-items-heading');
   
     const summarySubtotalEl = document.getElementById('summary-subtotal');
     const summaryDeliveryEl = document.getElementById('summary-delivery');
     const summaryDiscountRow = document.getElementById('summary-discount-row');
     const summaryDiscountLabel = document.getElementById('summary-discount-label');
     const summaryDiscountEl = document.getElementById('summary-discount');
     const summaryTotalEl = document.getElementById('summary-total');
     const checkoutSubmitBtn = document.getElementById('checkout-submit-btn');
   
     function renderCart() {
       const cartItems = getCart();
       const totalUnits = cartItems.reduce((acc, item) => acc + item.qty, 0);
   
       cartItemsHeading.textContent = `Seu Carrinho (${totalUnits} ${totalUnits === 1 ? 'item' : 'itens'})`;
       updateNavbarCartBadge(cartItems);
   
       if (cartItems.length === 0) {
         cartItemsList.innerHTML = '';
         emptyCartBox.hidden = false;
         checkoutSubmitBtn.disabled = true;
         checkoutSubmitBtn.style.opacity = '0.55';
         checkoutSubmitBtn.style.cursor = 'not-allowed';
       } else {
         emptyCartBox.hidden = true;
         checkoutSubmitBtn.disabled = false;
         checkoutSubmitBtn.style.opacity = '1';
         checkoutSubmitBtn.style.cursor = 'pointer';
   
         cartItemsList.innerHTML = cartItems.map((item, index) => `
           <article class="review-card" style="padding: 1.25rem; background-color: #FFFFFF; flex-direction: row; align-items: center; gap: 1.15rem; flex-wrap: wrap;">
             <img
               src="${item.img}"
               alt="${item.name}"
               style="width: 96px; height: 96px; object-fit: cover; border-radius: var(--radius-sm); flex-shrink: 0;"
             >
   
             <div style="flex: 1; min-width: 210px;">
               <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.25rem;">
                 <h3 class="burger-card__title" style="font-size: 1.45rem;">${item.name}</h3>
                 <strong style="font-family: var(--font-display); font-size: 1.5rem; color: var(--color-red);">
                   ${formatBRL(item.price * item.qty)}
                 </strong>
               </div>
   
               <p style="font-size: 0.85rem; color: var(--color-brown); margin-bottom: 0.75rem;">
                 ${item.desc}
               </p>
   
               <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding-top: 0.65rem; border-top: 1px solid var(--color-cream-alt);">
                 ${item.isBurger ? `
                   <label style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; font-weight: 700; color: var(--color-brown-dark);">
                     Ponto:
                     <select
                       data-index="${index}"
                       class="doneness-select"
                       style="padding: 0.28rem 0.55rem; border-radius: 4px; border: 1px solid var(--color-cream-border); background-color: var(--color-cream); font-family: var(--font-body); font-size: 0.8rem; color: var(--color-black);"
                     >
                       <option value="Ao Ponto (Rosado)" ${item.doneness === 'Ao Ponto (Rosado)' ? 'selected' : ''}>Ao Ponto (Rosado)</option>
                       <option value="Bem Passado" ${item.doneness === 'Bem Passado' ? 'selected' : ''}>Bem Passado</option>
                     </select>
                   </label>
                 ` : `<span class="burger-card__weight">Unitário: ${formatBRL(item.price)}</span>`}
   
                 <div style="display: inline-flex; align-items: center; gap: 0.65rem;">
                   <div style="display: inline-flex; align-items: center; border: 1.5px solid var(--color-cream-border); border-radius: var(--radius-pill); overflow: hidden; background-color: var(--color-cream);">
                     <button
                       type="button"
                       class="qty-btn"
                       data-action="decrease"
                       data-index="${index}"
                       aria-label="Diminuir quantidade de ${item.name}"
                       style="width: 32px; height: 30px; border: none; background: none; font-weight: 800; font-size: 1rem; color: var(--color-brown-dark); cursor: pointer;"
                     >−</button>
                     <span style="min-width: 26px; text-align: center; font-weight: 800; font-size: 0.9rem; color: var(--color-black);">
                       ${item.qty}
                     </span>
                     <button
                       type="button"
                       class="qty-btn"
                       data-action="increase"
                       data-index="${index}"
                       aria-label="Aumentar quantidade de ${item.name}"
                       style="width: 32px; height: 30px; border: none; background: none; font-weight: 800; font-size: 1rem; color: var(--color-brown-dark); cursor: pointer;"
                     >+</button>
                   </div>
   
                   <button
                     type="button"
                     class="remove-item-btn"
                     data-index="${index}"
                     style="background: none; border: none; color: var(--color-red); font-family: var(--font-body); font-size: 0.82rem; font-weight: 700; cursor: pointer; text-decoration: underline;"
                   >
                     Remover
                   </button>
                 </div>
               </div>
             </div>
           </article>
         `).join('');
       }
   
       updateTotals();
     }
   
     function updateTotals() {
       const cartItems = getCart();
       const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
   
       let deliveryCost = 0;
       if (subtotal > 0 && deliveryMode === 'delivery') {
         deliveryCost = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
       }
   
       let discountAmount = 0;
       const couponFeedback = document.getElementById('coupon-feedback');
   
       if (activeCoupon && subtotal > 0) {
         if (subtotal < activeCoupon.min) {
           discountAmount = 0;
           couponFeedback.textContent = `Adicione mais ${formatBRL(activeCoupon.min - subtotal)} para ativar o cupom ${activeCoupon.code}.`;
         } else {
           discountAmount = activeCoupon.type === 'fixed'
             ? activeCoupon.value
             : subtotal * (activeCoupon.value / 100);
           couponFeedback.textContent = `Cupom ${activeCoupon.code} aplicado com sucesso!`;
         }
       }
   
       const finalTotal = Math.max(0, subtotal + deliveryCost - discountAmount);
   
       summarySubtotalEl.textContent = formatBRL(subtotal);
   
       if (subtotal === 0) {
         summaryDeliveryEl.textContent = formatBRL(0);
       } else if (deliveryCost === 0) {
         summaryDeliveryEl.innerHTML = '<span class="text-yellow">GRÁTIS</span>';
       } else {
         summaryDeliveryEl.textContent = formatBRL(deliveryCost);
       }
   
       if (discountAmount > 0) {
         summaryDiscountRow.hidden = false;
         summaryDiscountRow.style.display = 'flex';
         summaryDiscountLabel.textContent = `Desconto (${activeCoupon.code})`;
         summaryDiscountEl.textContent = `- ${formatBRL(discountAmount)}`;
       } else {
         summaryDiscountRow.hidden = true;
         summaryDiscountRow.style.display = 'none';
       }
   
       summaryTotalEl.textContent = formatBRL(finalTotal);
       return { subtotal, deliveryCost, discountAmount, finalTotal };
     }
   
     // Controle de quantidade (+ / -) e remoção
     cartItemsList.addEventListener('click', e => {
       const cartItems = getCart();
   
       const qtyBtn = e.target.closest('.qty-btn');
       if (qtyBtn) {
         const idx = parseInt(qtyBtn.dataset.index, 10);
         if (qtyBtn.dataset.action === 'increase') {
           cartItems[idx].qty += 1;
         } else if (cartItems[idx].qty > 1) {
           cartItems[idx].qty -= 1;
         } else {
           cartItems.splice(idx, 1);
         }
         saveCart(cartItems);
         renderCart();
         return;
       }
   
       const removeBtn = e.target.closest('.remove-item-btn');
       if (removeBtn) {
         const idx = parseInt(removeBtn.dataset.index, 10);
         cartItems.splice(idx, 1);
         saveCart(cartItems);
         renderCart();
       }
     });
   
     // Alteração do ponto da carne
     cartItemsList.addEventListener('change', e => {
       if (e.target.classList.contains('doneness-select')) {
         const cartItems = getCart();
         const idx = parseInt(e.target.dataset.index, 10);
         cartItems[idx].doneness = e.target.value;
         saveCart(cartItems);
       }
     });
   
     // Sugestões rápidas ("Turbine Seu Pedido")
     document.querySelectorAll('.quick-add-btn').forEach(btn => {
       btn.addEventListener('click', () => {
         addItemToCart({
           id: btn.dataset.id,
           name: btn.dataset.name,
           desc: btn.dataset.desc,
           price: btn.dataset.price,
           isBurger: btn.dataset.burger === 'true',
           img: btn.dataset.img
         });
   
         renderCart();
   
         const original = btn.textContent;
         btn.textContent = '✓ Adicionado';
         btn.classList.add('btn--added');
         setTimeout(() => {
           btn.textContent = original;
           btn.classList.remove('btn--added');
         }, 850);
       });
     });
   
     // Limpar carrinho
     const clearCartAllBtn = document.getElementById('clear-cart-all');
     if (clearCartAllBtn) {
       clearCartAllBtn.addEventListener('click', () => {
         saveCart([]);
         renderCart();
       });
     }
   
     // Modalidade: Delivery vs. Retirada no Balcão
     const modeDeliveryBtn = document.getElementById('mode-delivery');
     const modePickupBtn = document.getElementById('mode-pickup');
     const addressFields = document.getElementById('delivery-address-fields');
     const pickupInfoBox = document.getElementById('pickup-info-box');
     const addressInput = document.getElementById('customer-address');
     const neighborhoodInput = document.getElementById('customer-neighborhood');
   
     function setDeliveryMode(mode) {
       deliveryMode = mode;
       const isDelivery = mode === 'delivery';
   
       modeDeliveryBtn.classList.toggle('is-active', isDelivery);
       modeDeliveryBtn.setAttribute('aria-checked', isDelivery);
       modePickupBtn.classList.toggle('is-active', !isDelivery);
       modePickupBtn.setAttribute('aria-checked', !isDelivery);
   
       addressFields.hidden = !isDelivery;
       addressFields.style.display = isDelivery ? 'flex' : 'none';
       pickupInfoBox.hidden = isDelivery;
   
       addressInput.required = isDelivery;
       neighborhoodInput.required = isDelivery;
   
       updateTotals();
     }
   
     modeDeliveryBtn.addEventListener('click', () => setDeliveryMode('delivery'));
     modePickupBtn.addEventListener('click', () => setDeliveryMode('pickup'));
   
     // Cupom promocional
     document.getElementById('apply-coupon-btn').addEventListener('click', () => {
       const code = document.getElementById('coupon-input').value.trim().toUpperCase();
       const couponFeedback = document.getElementById('coupon-feedback');
   
       if (code === 'BRASA15') {
         activeCoupon = { code: 'BRASA15', type: 'fixed', value: 15.00, min: 50.00 };
       } else if (code === 'BRASA10') {
         activeCoupon = { code: 'BRASA10', type: 'percent', value: 10, min: 0 };
       } else if (!code) {
         activeCoupon = null;
         couponFeedback.textContent = 'Digite um código válido (ex: BRASA15).';
       } else {
         activeCoupon = null;
         couponFeedback.textContent = 'Cupom inválido. Experimente BRASA15 ou BRASA10.';
       }
   
       updateTotals();
     });
   
     // Finalização do pedido
     const checkoutForm = document.getElementById('checkout-form');
     const orderConfirmedBox = document.getElementById('order-confirmed-box');
   
     checkoutForm.addEventListener('submit', e => {
       e.preventDefault();
       if (getCart().length === 0) return;
   
       const totals = updateTotals();
       const payment = document.getElementById('payment-method').value;
       const randomOrderNumber = Math.floor(1000 + Math.random() * 9000);
   
       document.getElementById('confirmed-code').textContent = `#BRASA-${randomOrderNumber}`;
       document.getElementById('confirmed-total').textContent = formatBRL(totals.finalTotal);
       document.getElementById('confirmed-time').textContent = deliveryMode === 'delivery'
         ? '30 a 40 minutos (Entrega)'
         : '20 a 25 minutos (Retirada)';
   
       document.getElementById('confirmed-summary-text').textContent = deliveryMode === 'delivery'
         ? `Enviaremos seu pedido para ${addressInput.value} (${neighborhoodInput.value}) com pagamento via ${payment}.`
         : `Seu pedido já está na brasa para retirada no balcão (Rua das Brasas, 482) com pagamento via ${payment}.`;
   
       saveCart([]);
       activeCoupon = null;
       document.getElementById('coupon-input').value = '';
       document.getElementById('coupon-feedback').textContent = '';
       renderCart();
   
       orderConfirmedBox.hidden = false;
       orderConfirmedBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
     });
   
     document.getElementById('new-order-btn').addEventListener('click', () => {
       orderConfirmedBox.hidden = true;
       renderCart();
     });
   
     renderCart();
   }
   
   /* ==========================================================================
      8. INICIALIZAÇÃO E SINCRONIZAÇÃO ENTRE ABAS/NAVEGAÇÃO
      ========================================================================== */
   document.addEventListener('DOMContentLoaded', () => {
     initMobileMenu();
     initGlobalAddButtons();
     updateNavbarCartBadge();
     initCatalogPage();
     initCartPage();
   });
   
   // Atualiza o contador caso o usuário volte pelo botão "Voltar" do navegador ou mude de aba
   window.addEventListener('pageshow', () => {
     updateNavbarCartBadge();
     syncFloatingOrderBar();
   });
   
   window.addEventListener('storage', event => {
     if (event.key === STORAGE_KEY) {
       updateNavbarCartBadge();
       syncFloatingOrderBar();
     }
   });