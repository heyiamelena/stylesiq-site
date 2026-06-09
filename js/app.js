/* app.js — StylesIQ Static Site Client Logic */

// ==========================================
// 1. Data Arrays (with updated asset paths)
// ==========================================

const products = [
  { id: '10', image: './assets/off_the_sholder_jacket_dress.png', cat: 'JACKET', name: 'The Shoulder Jacket Dress',
    story: 'Blazer meets dress in this hybrid piece. Off-shoulder construction creates elegant drama.', price: '$1299', material: 'Wool Blend', sold: false, badge: 'MASTERPIECE' },
  { id: '2', image: './assets/sweatshirt.png', cat: 'TOP', name: 'The Corset Sweatshirt',
    story: 'Oversized fleece reimagined with hand-stitched corset detailing and crystal accents. Comfort meets couture.', price: '$595', material: 'Fleece Cotton', sold: false, badge: 'STYLEMAKER' },
  { id: '1', image: './assets/denim_jacket.png', cat: 'JACKET', name: 'The Painted Denim Jacket',
    story: 'Classic denim transformed through hours of hand-painting. Abstract brushwork in muted tones creates a one-of-a-kind statement piece.', price: '$1299', material: 'Vintage Denim', sold: false, badge: 'LAST ONE' },
  { id: '002-2', image: './assets/bisection_blazer.jpg', cat: 'JACKET', name: 'The Bisection Blazer',
    story: 'Traditional tailoring fractured into two distinct identities. A meticulous cut down the center merges structural charcoal suiting with a passionate red lapel.', price: '$1299', material: 'Wool Suiting', sold: false, badge: 'MASTERPIECE' },
  { id: '002-1', image: './assets/metallic_tunic.jpg', cat: 'TOP', name: 'The Metallic Liquid Tunic',
    story: 'A mesmerizing tunic crafted from fluid silver mesh. It drapes seamlessly across the body, anchored by a dramatic tied back. A study in liquid reflection and light.', price: '$595', material: 'Metallic Mesh', sold: false, badge: 'STYLEMAKER' },
  { id: '002-3', image: './assets/split_trousers.jpg', cat: 'BOTTOM', name: 'The Split Houndstooth Trousers',
    story: 'High-waisted power trousers redefining classic menswear. A classic houndstooth front is contrasted by a striking dark back panel, generating elongated dimensions on every stride.', price: '$595', material: 'Wool Blend Tailoring', sold: false, badge: 'LAST ONE' },
  { id: '002-4', image: './assets/cutout_overshirt.jpg', cat: 'TOP', name: 'The Cutout Overshirt',
    story: 'Heritage houndstooth disrupted. Sliced away at the shoulders with raw, unfinished edges, this asymmetric silhouette challenges the rigid foundations of classic shirting.', price: '$595', material: 'Woven Houndstooth', sold: false, badge: 'STYLEMAKER' },
  { id: '5', image: './assets/color_block_jacket.png', cat: 'JACKET', name: 'The Color Block Jacket',
    story: 'Bold geometric color blocking in luxe fabrications. A wearable art piece that commands every room.', price: '$1299', material: 'Mixed Media', sold: false, badge: 'MASTERPIECE' },
  { id: '8', image: './assets/double_waisted_jeans.png', cat: 'BOTTOM', name: 'The Double Waist Jeans',
    story: 'Deconstructed denim with layered waistband detail. Margiela energy for everyday wear.', price: '$595', material: 'Denim', sold: false, badge: 'STYLEMAKER' },
  { id: '8-new', image: './assets/double_waist_jeans_new.jpg', cat: 'BOTTOM', name: 'The Twin Waist Denim',
    story: 'A subversive take on classic denim featuring a completely separated, secondary waistband that sits effortlessly above the hips. Double the hardware, double the impact.', price: '$595', material: '100% Cotton Denim', sold: true, badge: 'SOLD OUT' },
  { id: '101', image: './assets/chain-link-tweed.jpg', cat: 'JACKET', name: 'The Chain-Link Tweed',
    story: 'Textural blue houndstooth reinforced with industrial silver hardware, blending heritage fabric with a cold metallic edge to create a high-contrast statement that bridges classic tailoring and rebellious precision.', price: '$1299', material: 'Tweed', sold: true },
  { id: '102', image: './assets/voluminous-mantle.jpg', cat: 'JACKET', name: 'The Voluminous Mantle',
    story: 'Avant-garde ivory tailoring fused with explosive, multi-layered organza sleeves, creating a high-tension silhouette where rigid structure meets fluid, architectural volume.', price: '$1299', material: 'Tailoring & Organza', sold: true },
  { id: '3', image: './assets/black_statement_jacket.png', cat: 'JACKET', name: 'The Statement Jacket',
    story: 'Structured black jacket with sculptural elements. Each seam placed with architectural precision. Power dressing, redefined.', price: '$1299', material: 'Structured Wool', sold: true },
  { id: '4', image: './assets/zipped_trousers_suit_black.png', cat: 'BOTTOM', name: 'The Zipper Trousers',
    story: 'Tailored trousers featuring exposed zipper detailing from waist to ankle. Industrial edge meets elegant drape.', price: '$595', material: 'Tailored Suiting', sold: true },
  { id: '6', image: './assets/fur_shirt.png', cat: 'TOP', name: 'The Fur Panel Shirt',
    story: 'Crisp shirting elevated with strategically placed faux fur panels. Texture play at its finest.', price: '$595', material: 'Cotton & Faux Fur', sold: true },
  { id: '7', image: './assets/diagonal_shirt.png', cat: 'TOP', name: 'The Diagonal Shirt',
    story: 'Asymmetric construction creates visual intrigue. The familiar button-down, completely reimagined.', price: '$595', material: 'Cotton', sold: true },
  { id: '9', image: './assets/fluffy_black_t_shirt.png', cat: 'TOP', name: 'The Textured Tee',
    story: 'Basic black tee transformed with dimensional texture. Simple silhouette, extraordinary surface.', price: '$595', material: 'Cotton Knit', sold: true },
  { id: '11', image: './assets/skirt_element.png', cat: 'BOTTOM', name: 'The Element Skirt',
    story: 'Sculptural skirt with architectural seaming. Movement and structure in perfect tension.', price: '$595', material: 'Structured Cotton', sold: true },
  { id: 't1', image: './assets/statement_tshirt_relax.jpg', cat: 'TOP', name: 'The Relax Tee',
    story: "A statement that ends the conversation before it starts. 'relax, we all are crazy, it's not a competition' — hand-printed in bold lowercase on a clean white canvas. Wear it with gloves. Wear it with nothing. It speaks either way.", price: '$595', material: '100% Cotton', sold: true, badge: 'SOLD OUT', drop: 'DROP 002', isStatement: true },
  { id: 't2', image: './assets/statement_tshirt_delusional.jpg', cat: 'TOP', name: 'The Delusional Tee',
    story: "Delusion is a prerequisite. 'Delusional' embroidered in script across the chest — the word that every founder, artist, and builder has been called before they were called successful. This one's for those who kept going anyway.", price: '$595', material: '100% Cotton', sold: true, badge: 'SOLD OUT', drop: 'DROP 002', isStatement: true },
  { id: 't3', image: './assets/statement_tshirt_art.jpg', cat: 'TOP', name: 'The Art Tee',
    story: "Art should comfort the disturbed and disturb the comfortable — printed in clean serif across the chest of a crisp white tee. For the person who has never once chosen comfortable.", price: '$595', material: '100% Cotton', sold: true, badge: 'SOLD OUT', drop: 'DROP 002', isStatement: true },
  { id: 't4', image: './assets/black_sleeves.jpg', cat: 'JACKET', name: 'The Void Cape',
    story: "Architecture, not clothing. Voluminous pleated silk that moves like theater and commands a room like silence. The raw hem is intentional — this piece is unfinished on purpose, because so is everything worth making.", price: '$1299', material: 'Silk Blend, Raw Hem', sold: false, badge: '1 OF 1', drop: 'DROP 002' },
  { id: 't5', image: './assets/black_hoodie.jpg', cat: 'TOP', name: 'The Builder Hoodie',
    story: "build. ship. repeat. — mono text on the chest, crystal fringe cascade off one shoulder. The tension between the grind and the glamour, worn at the same time, on the same body.", price: '$595', material: 'Heavyweight Cotton, Crystal Fringe', sold: true, badge: 'SOLD OUT', drop: 'DROP 002' },
  { id: 't6', image: './assets/black_dress.jpg', cat: 'TOP', name: 'The Midnight Train',
    story: "A long-sleeve top that doesn't know when to stop. Floor-length side panels trail behind like an afterthought that became the whole look. Day silhouette. Night consequence.", price: '$595', material: 'Satin Duchess, Extended Panel', sold: true, badge: 'SOLD OUT', drop: 'DROP 002', containImage: true },
  { id: 't7', image: './assets/feather_skirt.jpg', cat: 'BOTTOM', name: 'The Ombre Feather Skirt',
    story: "Charcoal at the waist. White at the hem. A gradient that takes three tiers to complete and a room to appreciate. Precision where it's invisible, theater where it counts.", price: '$595', material: 'Ostrich Feather, Wool Waistband', sold: true, badge: 'SOLD OUT', drop: 'DROP 002' },
  { id: 't8', image: './assets/feather_skirt_gray.jpg', cat: 'BOTTOM', name: 'The Feathered Hem Skirt',
    story: "A sophisticated gray pencil skirt grounded by an unexpected cascade of soft marabou feathers. A study in contrasts.", price: '$595', material: 'Wool Blend, Marabou Feathers', sold: false, badge: '1 OF 1', drop: 'DROP 002' },
  { id: 't9', image: './assets/heart_cutout_tee.jpg', cat: 'TOP', name: 'The Heart Cutout Tee',
    story: "A classic white tee disrupted by a dramatic sheer heart cutout trailing a red tulle ribbon. Romance with a raw edge.", price: '$595', material: '100% Cotton, Tulle', sold: false, badge: '1 OF 1', drop: 'DROP 002' }
];

const workshopsData = {
  'Current Season': [
    { id: '01', name: "HEARTS of Love", desc: "Embroider heart motifs and add red ribbon details to your chosen garment.", duration: '2 hrs', capacity: '12 SPOTS REMAINING', price: '$100', type: 'SEASONAL', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' },
    { id: '02', name: 'Florals to Bloom', desc: 'Learn floral embroidery and fabric painting techniques for warm-weather pieces.', duration: '2.5 hrs', capacity: '10 SPOTS REMAINING', price: '$100', type: 'SEASONAL', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' },
    { id: '03', name: 'Holiday Sparkle', desc: 'Crystal application and gold hardware work to elevate pieces for the festive season.', duration: '3 hrs', capacity: '8 SPOTS REMAINING', price: '$100', type: 'SEASONAL', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' }
  ],
  'By Craft': [
    { id: '04', name: 'Crystal Application Masterclass', desc: 'Learn professional-grade crystal placement: scatter, cluster, and architectural techniques.', duration: '2 hrs', capacity: '8 SPOTS REMAINING', price: '$100', type: 'TECHNIQUE', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' },
    { id: '05', name: 'Stud Mastery', desc: "From pyramid to domed, flat to spike: master every stud application technique.", duration: '1.5 hrs', capacity: '10 SPOTS REMAINING', price: '$100', type: 'TECHNIQUE', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' },
    { id: '06', name: 'Ribbon & Bow Artistry', desc: 'Grosgrain, satin, velvet: the full vocabulary of ribbon embellishment.', duration: '2 hrs', capacity: '12 SPOTS REMAINING', price: '$100', type: 'TECHNIQUE', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' }
  ],
  'Private Events': [
    { id: '07', name: 'Bachelorette Party', desc: "Customize jackets or accessories for the whole crew. We handle materials, you bring the energy.", duration: '2.5 hrs', capacity: 'CUSTOM', price: '$100', type: 'PRIVATE', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' },
    { id: '08', name: 'Corporate Team Offsite', desc: 'Science-backed team creative reset. Cortisol down, connection up.', duration: '2 hrs', capacity: 'CUSTOM', price: '$100', type: 'PRIVATE', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' }
  ],
  'Open Studio': [
    { id: '09', name: 'Tuesday Drop-In', desc: 'Show up. Make something. No booking required, just pay at the door.', duration: '2 hrs', capacity: 'WALK-IN', price: '$100', type: 'OPEN STUDIO', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' },
    { id: '10', name: 'Saturday Morning Studio', desc: "The best way to start a weekend. Coffee, crafts, community.", duration: '2 hrs', capacity: 'WALK-IN', price: '$100', type: 'OPEN STUDIO', stripeLink: 'https://book.stripe.com/28E5kCgMd7lq6i68qNfYY03' }
  ]
};

const techniques = [
  { id: '12', image: './assets/inspiration/flower_ribbon.jpg', cat: 'Bows & Ribbons', name: 'Flower Ribbon Choker', desc: 'Transform any piece instantly by adding a large silk flower ribbon as a choker or hair accessory.', garment: 'ALL', skill: 'BEGINNER (20 MIN)' },
  { id: '13', image: './assets/inspiration/red_jacket_hearts.png', cat: 'Elevate Your Jacket', name: 'Heart Button Swap', desc: 'Replace standard jacket buttons with metallic heart-shaped buttons for an instant pop.', garment: 'JACKET', skill: 'BEGINNER (20 MIN)' },
  { id: '14', image: './assets/inspiration/white_blazer_flowers.png', cat: 'Bows & Ribbons', name: '3D Floral Applique', desc: 'Attach 3D fabric flowers in various sizes across a blazer for a runway-ready statement piece.', garment: 'JACKET', skill: 'BEGINNER (20 MIN)' },
  { id: '15', image: './assets/inspiration/scarf_on_cap.png', cat: 'Bows & Ribbons', name: 'Scarf Baseball Cap', desc: 'Elevate a simple hat by threading a silk scarf through the back for a flowing, elegant tail.', garment: 'ACCESSORIES', skill: 'BEGINNER (20 MIN)' },
  { id: '16', image: './assets/inspiration/vintage_jewelry_sweatshirt.png', cat: 'Hardware Obsession', name: 'Layered Charm Necklace', desc: 'Drape heavy crystal collars and vintage charms over a basic sweatshirt.', garment: 'ACCESSORIES', skill: 'BEGINNER (20 MIN)' },
  { id: '17', image: './assets/inspiration/grey_knee_socks.png', cat: 'Two-Piece Magic', name: 'Layered Knee Socks', desc: 'Contrast smooth knee-high socks layered over chunky knit socks and loafers.', garment: 'ACCESSORIES', skill: 'BEGINNER (20 MIN)' },
  { id: '18', image: './assets/inspiration/studded_belt.jpg', cat: 'Hardware Obsession', name: 'Oversized Stud Belt', desc: 'Transform a plain black leather belt with oversized metallic discs or dome studs.', garment: 'ACCESSORIES', skill: 'BEGINNER (20 MIN)' },
  { id: '19', image: './assets/inspiration/pink_trim_birds.jpg', cat: 'Paint & Transform', name: 'Neon Binding & Art', desc: 'Add neon structural lines to lapels and hand-drawn bird motifs to an oversized blazer.', garment: 'JACKET', skill: 'BEGINNER (20 MIN)' },
  { id: '20', image: './assets/inspiration/white_oversized_bow.jpg', cat: 'Bows & Ribbons', name: 'Structural Collar Bow', desc: 'Style a crisp white shirt with an exaggerated, oversized soft bow at the collar.', garment: 'TOP', skill: 'BEGINNER (20 MIN)' },
  { id: '21', image: './assets/inspiration/red_organza_sash.jpg', cat: 'Bows & Ribbons', name: 'Organza Shoulder Sash', desc: 'Drape dramatic semi-sheer red organza over one shoulder of a tailored blazer.', garment: 'JACKET', skill: 'BEGINNER (20 MIN)' },
  { id: '22', image: './assets/inspiration/crystal_scatter_denim.jpg', cat: 'Hardware Obsession', name: 'Scattered Crystal Denim', desc: 'Apply mixed-size flatback crystals randomly across light-wash denim seams and pockets.', garment: 'PANTS', skill: 'BEGINNER (20 MIN)' },
  { id: '1', image: '', cat: 'Elevate Your Jacket', name: 'Crystal-Studded Denim', desc: 'Transform a basic denim jacket with Swarovski-style crystal clusters.', garment: 'JACKET', skill: 'INTERMEDIATE (1 HR)' },
  { id: '2', image: '', cat: 'Bows & Ribbons', name: 'Silk Bow Collar', desc: 'Add oversized silk ribbon bows for an instant feminine upgrade.', garment: 'JACKET', skill: 'BEGINNER (20 MIN)' },
  { id: '3', image: '', cat: 'Hardware Obsession', name: 'Chain Strap Upgrade', desc: 'Replace any bag strap with gold or silver chain hardware.', garment: 'ACCESSORIES', skill: 'BEGINNER (20 MIN)' },
  { id: '4', image: '', cat: 'Paint & Transform', name: 'Abstract Art Jacket', desc: 'Hand-paint abstract expressionist art directly onto canvas jacket.', garment: 'JACKET', skill: 'ADVANCED (3+ HR)' },
  { id: '5', image: '', cat: 'Elevate Your Jacket', name: 'Pearl Button Replacement', desc: 'Swap standard buttons for pearl or crystal versions on a blazer or dress.', garment: 'DRESS', skill: 'INTERMEDIATE (1 HR)' },
  { id: '6', image: '', cat: 'Hardware Obsession', name: 'Studded Leather Belt', desc: 'Create a statement belt with custom stud patterns and metal hardware.', garment: 'ACCESSORIES', skill: 'ADVANCED (3+ HR)' },
  { id: '7', image: '', cat: 'Bows & Ribbons', name: 'Ribbon Waist Tie', desc: 'Thread satin ribbon through belt loops for an instant waist definition.', garment: 'TOP', skill: 'BEGINNER (20 MIN)' },
  { id: '8', image: '', cat: 'Elevate Your Jacket', name: 'Pin Collection Display', desc: 'Curate a meaningful collection of enamel pins on a lapel.', garment: 'JACKET', skill: 'BEGINNER (20 MIN)' },
  { id: '9', image: '', cat: 'Paint & Transform', name: 'Hand-Painted Stripes', desc: 'Add precise hand-painted racing stripes or abstract marks to denim.', garment: 'PANTS', skill: 'ADVANCED (3+ HR)' },
  { id: '10', image: '', cat: 'Hardware Obsession', name: 'Shoulder Stud Work', desc: 'Apply pyramid studs in geometric patterns along jacket shoulders.', garment: 'JACKET', skill: 'INTERMEDIATE (1 HR)' },
  { id: '11', image: '', cat: 'Two-Piece Magic', name: 'Linen Co-ord Set', desc: 'Style linen separates as a modern minimalist co-ordinate.', garment: 'DRESS', skill: 'INTERMEDIATE (1 HR)' }
];


// ==========================================
// 2. Navigation & SPA Section Router
// ==========================================

const sections = ['home', 'shop', 'studio', 'method', 'inspiration'];

function showSection(activeId) {
  // Collapse mobile menu if open
  closeMobileMenu();
  
  // Toggle visibility of views
  sections.forEach(id => {
    const el = document.getElementById(`${id}-view`);
    if (el) {
      el.style.display = (id === activeId) ? 'block' : 'none';
    }
  });

  // Sync active classes on desktop navigation links
  document.querySelectorAll('header.sticky-header nav ul li a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === `#${activeId}`) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  // Reset scroll to top
  window.scrollTo(0, 0);

  // Trigger animations in the newly opened view
  setTimeout(initScrollAnimations, 100);
}

function handleHashChange() {
  const hash = window.location.hash.slice(1);
  if (sections.includes(hash)) {
    showSection(hash);
  } else {
    // Default to home and update hash if empty
    showSection('home');
    window.location.hash = '#home';
  }
}

// Mobile Menu toggles
function openMobileMenu() {
  document.getElementById('mobile-menu').classList.add('open');
}

function closeMobileMenu() {
  const el = document.getElementById('mobile-menu');
  if (el) el.classList.remove('open');
}

// Scrolled state on header
function handleScroll() {
  const header = document.querySelector('header.sticky-header');
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}


// ==========================================
// 3. Scroll-fade-in Animation Controller
// ==========================================

let animationObserver;

function initScrollAnimations() {
  if (animationObserver) {
    animationObserver.disconnect();
  }

  animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        animationObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  // Track all items that should fade up on scroll
  document.querySelectorAll('.fade-up-element').forEach(el => {
    el.classList.remove('animate'); // reset
    animationObserver.observe(el);
  });
}


// ==========================================
// 4. Shop Page Logic & Detail Drawer
// ==========================================

let activeShopFilter = 'ALL';

function renderShopGrid() {
  const productGrid = document.getElementById('shop-product-grid');
  if (!productGrid) return;
  
  productGrid.innerHTML = '';
  
  // Filter products: exclude statements, sort by sold state, match category
  const filtered = products
    .filter(p => !p.isStatement)
    .sort((a, b) => Number(a.sold) - Number(b.sold))
    .filter(p => {
      if (activeShopFilter === 'ALL') return true;
      // Map filters: JACKETS -> JACKET, TOPS -> TOP, BOTTOMS -> BOTTOM
      const mappedCat = activeShopFilter.slice(0, -1);
      return p.cat === mappedCat;
    });

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card fade-up-element';
    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-image ${p.containImage ? 'contain-fit' : ''}">
        <div class="product-tag ${p.sold ? 'sold-out-tag' : ''}">
          ${p.sold ? 'SOLD OUT' : (p.badge || 'STYLEMAKER')}
        </div>
      </div>
      <span class="product-cat">${p.cat}</span>
      <span class="product-name">${p.name}</span>
    `;
    card.addEventListener('click', () => openProductDrawer(p));
    productGrid.appendChild(card);
  });

  initScrollAnimations();
}

function renderStatementGrid() {
  const statementGrid = document.getElementById('shop-statement-grid');
  if (!statementGrid) return;

  statementGrid.innerHTML = '';

  // Filter statements, sort sold state
  const filtered = products
    .filter(p => p.isStatement)
    .sort((a, b) => Number(a.sold) - Number(b.sold));

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card fade-up-element';
    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-image ${p.containImage ? 'contain-fit' : ''}">
        <div class="product-tag ${p.sold ? 'sold-out-tag' : ''}">
          ${p.sold ? 'WAITLIST ONLY' : (p.badge || 'STYLEMAKER')}
        </div>
      </div>
      <span class="product-cat">${p.cat}</span>
      <span class="product-name">${p.name}</span>
    `;
    card.addEventListener('click', () => openProductDrawer(p));
    statementGrid.appendChild(card);
  });
}

function openProductDrawer(product) {
  const backdrop = document.getElementById('product-drawer-backdrop');
  const content = document.getElementById('product-drawer');
  
  if (!backdrop || !content) return;

  // Populate drawer elements
  document.getElementById('drawer-img').src = product.image;
  if (product.containImage) {
    document.getElementById('drawer-img').classList.add('contain-fit');
  } else {
    document.getElementById('drawer-img').classList.remove('contain-fit');
  }

  document.getElementById('drawer-meta').innerText = `${product.cat} — ${product.price}`;
  document.getElementById('drawer-title').innerText = product.name;
  document.getElementById('drawer-material').innerText = product.material;
  document.getElementById('drawer-story').innerText = product.story;

  const actionBtn = document.getElementById('drawer-action-btn');
  
  // Reset event listeners on CTA button
  const newBtn = actionBtn.cloneNode(true);
  actionBtn.parentNode.replaceChild(newBtn, actionBtn);

  if (product.sold) {
    newBtn.innerText = product.isStatement ? 'JOIN WAITLIST' : 'SOLD OUT';
    newBtn.className = 'btn btn-solid drawer-action-btn';
    newBtn.disabled = true;
    newBtn.style.opacity = '0.5';
    newBtn.style.cursor = 'not-allowed';
  } else {
    newBtn.innerText = 'ACQUIRE THIS PIECE';
    newBtn.className = 'btn btn-solid drawer-action-btn';
    newBtn.disabled = false;
    newBtn.style.opacity = '1';
    newBtn.style.cursor = 'pointer';
    newBtn.addEventListener('click', () => {
      const checkoutLink = (product.price === '$1299') 
        ? 'https://buy.stripe.com/6oU14mfI9cFK7magXjfYY04' 
        : 'https://buy.stripe.com/6oUbJ0eE50X249YgXjfYY02';
      window.open(checkoutLink, '_blank');
    });
  }

  // Open transitions
  backdrop.classList.add('open');
  content.classList.add('open');
}

function closeProductDrawer() {
  const backdrop = document.getElementById('product-drawer-backdrop');
  const content = document.getElementById('product-drawer');
  if (backdrop && content) {
    backdrop.classList.remove('open');
    content.classList.remove('open');
  }
}

function initShopFilters() {
  document.querySelectorAll('#shop-view .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#shop-view .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeShopFilter = e.target.getAttribute('data-filter');
      renderShopGrid();
    });
  });
}


// ==========================================
// 5. Studio Page Logic
// ==========================================

let activeStudioTab = 'Current Season';

function renderWorkshops() {
  const grid = document.getElementById('studio-workshop-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const data = workshopsData[activeStudioTab] || [];

  data.forEach(ws => {
    const card = document.createElement('div');
    card.className = 'workshop-card fade-up-element';
    card.innerHTML = `
      <div class="workshop-header">
        <div class="workshop-id">${ws.id}</div>
        <div class="workshop-header-content">
          <span class="workshop-type">${ws.type}</span>
          <h3 class="workshop-name">${ws.name}</h3>
          <p class="workshop-desc">${ws.desc}</p>
          <div class="workshop-details">
            <div class="workshop-capacity">${ws.capacity}</div>
            <div class="workshop-duration">${ws.duration} · MATERIALS INCLUDED</div>
          </div>
        </div>
      </div>
      <div class="workshop-footer">
        <div class="workshop-price">${ws.price}</div>
        <button class="btn btn-accent reserve-btn" data-link="${ws.stripeLink}" ${ws.capacity === 'SOLD OUT' ? 'disabled' : ''}>
          ${ws.capacity === 'SOLD OUT' ? 'WAITLIST ONLY' : 'RESERVE MY SEAT'}
        </button>
      </div>
    `;

    const btn = card.querySelector('.reserve-btn');
    btn.addEventListener('click', () => {
      const link = btn.getAttribute('data-link');
      if (link) {
        window.open(link, link.includes('mailto:') ? '_self' : '_blank');
      }
    });

    grid.appendChild(card);
  });

  initScrollAnimations();
}

function initStudioTabs() {
  document.querySelectorAll('#studio-view .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#studio-view .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeStudioTab = e.target.getAttribute('data-tab');
      renderWorkshops();
    });
  });
}


// ==========================================
// 6. Method Page Logic (DIY Techniques)
// ==========================================

let activeMethodGarment = 'ALL';
let activeMethodSkill = 'ALL LEVELS';

function renderTechniques() {
  const grid = document.getElementById('method-technique-grid');
  if (!grid) return;

  grid.innerHTML = '';
  
  const filtered = techniques
    .filter(t => activeMethodGarment === 'ALL' || t.garment === activeMethodGarment)
    .filter(t => activeMethodSkill === 'ALL LEVELS' || t.skill === activeMethodSkill);

  filtered.forEach(tech => {
    const card = document.createElement('div');
    card.className = 'technique-card fade-up-element';
    
    let imageHtml = '';
    if (tech.image) {
      imageHtml = `
        <div class="technique-image-wrap">
          <img src="${tech.image}" alt="${tech.name}" class="technique-image">
        </div>
      `;
    } else {
      // Placeholder structure for items without image to maintain alignment
      imageHtml = `
        <div class="technique-image-wrap" style="display:flex; align-items:center; justify-content:center; background-color:#151515;">
          <span style="font-family:var(--font-serif); font-size:4rem; color:#222;">${tech.id}</span>
        </div>
      `;
    }

    card.innerHTML = `
      ${imageHtml}
      <div class="technique-content">
        <span class="technique-cat">${tech.cat}</span>
        <h3 class="technique-name">${tech.name}</h3>
        <p class="technique-desc">${tech.desc}</p>
        <div class="technique-meta">
          ${tech.garment} &middot; ${tech.skill}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  initScrollAnimations();
}

function initMethodFilters() {
  // Garment Filters
  document.querySelectorAll('#method-garment-filters .method-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#method-garment-filters .method-filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeMethodGarment = e.target.getAttribute('data-filter');
      renderTechniques();
    });
  });

  // Skill Filters
  document.querySelectorAll('#method-skill-filters .method-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#method-skill-filters .method-filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeMethodSkill = e.target.getAttribute('data-filter');
      renderTechniques();
    });
  });
}


// ==========================================
// 7. Initialization & Event Wiring
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Bind router hash listeners
  window.addEventListener('hashchange', handleHashChange);
  
  // Initial page load check
  handleHashChange();

  // Scroll listener for sticky header styling
  window.addEventListener('scroll', handleScroll);

  // Mobile navigation buttons wiring
  const openMenuBtn = document.getElementById('open-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  
  if (openMenuBtn) openMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);

  // Shop drawer closing events
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerBackdrop = document.getElementById('product-drawer-backdrop');
  
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeProductDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeProductDrawer);

  // Initialize page-specific scripts & render grids
  initShopFilters();
  renderShopGrid();
  renderStatementGrid();

  initStudioTabs();
  renderWorkshops();

  initMethodFilters();
  renderTechniques();
  
  // Initial scroll animations setup
  setTimeout(initScrollAnimations, 200);
});
