// --- Глобальные функции модальных окон ---
function openModal(modalId) {
  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById(modalId).classList.add('active');
  document.getElementById('modalOverlay').style.display = '';
  document.getElementById(modalId).style.display = '';
  setTimeout(() => {
    const input = document.querySelector(`#${modalId} .modal-input`);
    if (input) input.focus();
  }, 100);
}

function closeModal() {
  document.querySelectorAll('.modal-window').forEach(m => {
    m.classList.remove('active');
    setTimeout(() => { m.style.display = 'none'; }, 300);
  });
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.style.display = 'none'; }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.slider-card');
  const prevBtns = document.querySelectorAll('.slider-card__nav--prev');
  const nextBtns = document.querySelectorAll('.slider-card__nav--next');
  let current = 0;

  function showCard(idx) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === idx);
      // dots внутри каждой карточки
      const dots = card.querySelectorAll('.slider-card__dot');
      dots.forEach((dot, j) => {
        dot.classList.toggle('active', i === idx && j === idx);
      });
    });
    current = idx;
  }

  prevBtns.forEach(btn => btn.addEventListener('click', function() {
    let idx = (current - 1 + cards.length) % cards.length;
    showCard(idx);
  }));
  nextBtns.forEach(btn => btn.addEventListener('click', function() {
    let idx = (current + 1) % cards.length;
    showCard(idx);
  }));

  // Клик по точкам внутри активной карточки
  cards.forEach((card, i) => {
    const dots = card.querySelectorAll('.slider-card__dot');
    dots.forEach((dot, j) => {
      dot.addEventListener('click', function() {
        showCard(j);
      });
    });
  });

  showCard(0);

  // ===== UNIFIED PRODUCT CARD CREATOR =====
  function createProductCard({ name, price, articul, icon }) {
    const card = document.createElement('div');
    card.className = 'catalog__card popular-card';
    card.innerHTML = `
      <div class="catalog__icon-wrap">
        <img src="${icon}" alt="logo" class="catalog__icon">
      </div>
      <div class="catalog__card-content">
        <div class="catalog__name">${name}</div>
        <div class="catalog__articul">${articul || ''}</div>
        <div class="catalog__price">${price}</div>
      </div>
    `;
    return card;
  }

  // --- Catalog cards ---
  const catalogGrid = document.getElementById('catalogGrid');
  const catalogSliderTrack = document.querySelector('.catalog__slider-track');
  const catalogData = [
    { name: 'Товар 1', price: '100 ₽', articul: 'ART-101', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 2', price: '200 ₽', articul: 'ART-102', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 3', price: '300 ₽', articul: 'ART-103', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 4', price: '400 ₽', articul: 'ART-104', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 5', price: '500 ₽', articul: 'ART-105', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 6', price: '600 ₽', articul: 'ART-106', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 7', price: '700 ₽', articul: 'ART-107', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 8', price: '800 ₽', articul: 'ART-108', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 9', price: '900 ₽', articul: 'ART-109', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 10', price: '1000 ₽', articul: 'ART-110', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 11', price: '1100 ₽', articul: 'ART-111', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 12', price: '1200 ₽', articul: 'ART-112', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 13', price: '1300 ₽', articul: 'ART-113', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 14', price: '1400 ₽', articul: 'ART-114', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Товар 15', price: '1500 ₽', articul: 'ART-115', icon: 'image/image_top_tab/logo.svg' },
  ];
  if (catalogGrid) {
    catalogGrid.innerHTML = '';
    catalogData.forEach(data => catalogGrid.appendChild(createProductCard(data)));
  }
  if (catalogSliderTrack) {
    catalogSliderTrack.innerHTML = '';
    catalogData.forEach(data => catalogSliderTrack.appendChild(createProductCard(data)));
  }

  // --- Popular cards ---
  const popularSlider = document.getElementById('popularSlider');
  const popularData = [
    { name: 'Скотч упаковочный', price: '120 ₽', articul: 'ART-001', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Стрейч-пленка', price: '350 ₽', articul: 'ART-002', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Пакеты с логотипом', price: 'от 2,5 ₽', articul: 'ART-003', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Картонные коробки', price: 'от 15 ₽', articul: 'ART-004', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Пленка пузырчатая', price: 'от 80 ₽', articul: 'ART-005', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Клейкая лента', price: 'от 60 ₽', articul: 'ART-006', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Пакеты майка', price: 'от 1,8 ₽', articul: 'ART-007', icon: 'image/image_top_tab/logo.svg' },
    { name: 'Пакеты с замком', price: 'от 3 ₽', articul: 'ART-008', icon: 'image/image_top_tab/logo.svg' },
  ];
  if (popularSlider) {
    popularSlider.innerHTML = '';
    popularData.forEach(data => popularSlider.appendChild(createProductCard(data)));
  }

  // --- Popular Items Slider ---
  let popularCurrent = 0;
  const popularPerView = 1;

  function renderPopularSlider() {
    const slider = document.getElementById('popularSlider');
    slider.innerHTML = '';
    popularData.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'popular-card';
      card.innerHTML = `
        <div class=\"popular-card__img-wrap\">
          <img class=\"popular-card__img\" src=\"./image/image_top_tab/logo.svg\" alt=\"logo\" />
        </div>
        ${item.label ? `<div class='popular-card__label'>${item.label}</div>` : ''}
        <div class=\"popular-card__content\">
          <div class=\"popular-card__name\">${item.name}</div>
          <div class=\"popular-card__articul\">${item.articul}</div>
          <div class=\"popular-card__price\">${item.price}</div>
        </div>
      `;
      slider.appendChild(card);
    });
    slider.style.transform = `translateX(-${popularCurrent * (352)}px)`;
    renderPopularDots();
    slider.style.width = `${popularData.length * 352}px`;
  }

  function renderPopularDots() {
    const dotsWrap = document.getElementById('popularSliderDots');
    dotsWrap.innerHTML = '';
    for (let i = 0; i < popularData.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'slider-dot' + (i === popularCurrent ? ' active' : '');
      dot.addEventListener('click', () => {
        popularCurrent = i;
        renderPopularSlider();
      });
      dotsWrap.appendChild(dot);
    }
  }

  document.querySelector('.popular-slider__nav-prev').onclick = () => {
    popularCurrent--;
    if (popularCurrent < 0) popularCurrent = popularData.length - 1;
    renderPopularSlider();
  };
  document.querySelector('.popular-slider__nav-next').onclick = () => {
    popularCurrent++;
    if (popularCurrent >= popularData.length) popularCurrent = 0;
    renderPopularSlider();
  };

  renderPopularSlider();

  // --- Видео о нас (rickroll) ---
  document.getElementById('bcVideoBtn')?.addEventListener('click', function() {
    document.getElementById('bcVideoBtn').style.display = 'none';
    document.getElementById('bcVideoFrame').style.display = 'flex';
  });

  // --- Reviews Slider ---
  const reviewsData = [
    {
      name: 'Илья Маркин',
      date: '1 февраля',
      text: 'Являясь всего лишь частью общей картины, тщательные исследования конкурентов являются только методом политического участия и рассмотрены',
      stars: 5
    },
    {
      name: 'Иван Макаров',
      date: '1 февраля',
      text: 'В рамках спецификации современных стандартов, базовый вектор развития требует определения и уточнения новых предложений',
      stars: 5
    },
    {
      name: 'Валентин Петров',
      date: '1 февраля',
      text: 'С другой стороны, постоянный количественный рост и сфера нашей активности способствует подготовке и реализации новых принципов',
      stars: 5
    },
    {
      name: 'Мария Котова',
      date: '2 февраля',
      text: 'Практический опыт показывает, что укрепление и развитие структуры требует анализа системы обучения кадров',
      stars: 5
    },
    {
      name: 'Алексей Смирнов',
      date: '3 февраля',
      text: 'Таким образом, новая модель организационной деятельности способствует повышению качества новых предложений',
      stars: 5
    }
  ];
  const reviewsSlider = document.getElementById('reviewsSlider');
  const reviewsDots = document.getElementById('reviewsDots');
  const reviewsPerView = 3;
  let reviewsCurrent = 0;

  function renderReviewsSlider() {
    reviewsSlider.innerHTML = '';
    reviewsData.forEach((review, idx) => {
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <div class="review-header">
          <div class="review-avatar"><img src="image/image_top_tab/logo.svg" alt="logo"></div>
          <div class="review-info">
            <div class="review-name">${review.name}</div>
            <div class="review-date">${review.date}</div>
          </div>
        </div>
        <div class="review-stars">${'★'.repeat(review.stars)}</div>
        <div class="review-text">${review.text}</div>
      `;
      reviewsSlider.appendChild(card);
    });
    const card = reviewsSlider.children[0];
    const gap = parseInt(getComputedStyle(reviewsSlider).gap) || 32;
    const cardWidth = card ? card.offsetWidth : 582;
    const total = reviewsData.length;
    const pages = Math.max(1, total - reviewsPerView + 1);
    if (reviewsCurrent >= pages) reviewsCurrent = pages - 1;
    let offset = Math.min(reviewsCurrent, total - reviewsPerView) * (cardWidth + gap);
    reviewsSlider.style.transform = `translateX(-${offset}px)`;
    renderReviewsDots(pages);
  }

  function renderReviewsDots(pages) {
    reviewsDots.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('span');
      dot.className = 'slider-dot' + (i === reviewsCurrent ? ' active' : '');
      dot.addEventListener('click', () => {
        reviewsCurrent = i;
        renderReviewsSlider();
      });
      reviewsDots.appendChild(dot);
    }
  }

  document.querySelector('.reviews-nav-prev').onclick = () => {
    reviewsCurrent--;
    const total = reviewsData.length;
    const pages = Math.max(1, total - reviewsPerView + 1);
    if (reviewsCurrent < 0) reviewsCurrent = pages - 1;
    renderReviewsSlider();
  };
  document.querySelector('.reviews-nav-next').onclick = () => {
    reviewsCurrent++;
    const total = reviewsData.length;
    const pages = Math.max(1, total - reviewsPerView + 1);
    if (reviewsCurrent >= pages) reviewsCurrent = 0;
    renderReviewsSlider();
  };

  renderReviewsSlider();
  // Открытие callModal по всем кнопкам 'Перезвоните мне'/'Заказать звонок'
  document.querySelectorAll('.footer-callback-btn, .contact-block__btn, .modal-btn[data-call]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal('callModal');
    });
  });
  // Открытие orderModal по клику на карточку товара
  document.querySelectorAll('.catalog__card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      openModal('orderModal');
    });
  });
  // Крестики
  ['callModalClose','orderModalClose','thankModalClose'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.onclick = closeModal;
  });
  // Overlay
  const overlay = document.getElementById('modalOverlay');
  overlay.onclick = closeModal;
  // Esc
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
  // Отправка форм — показываем спасибо
  ['callForm','orderForm','missionForm'].forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
      form.onsubmit = function(e) {
        e.preventDefault();
        
        // Добавляем анимацию отправки
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          btn.style.transform = 'scale(0.95)';
          btn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
          btn.innerHTML = '✓ Отправлено!';
          
          setTimeout(() => {
            btn.style.transform = '';
            btn.style.background = '';
            btn.innerHTML = btn.getAttribute('data-original-text') || 'Отправить';
          }, 2000);
        }
        
        closeModal();
        setTimeout(() => {
          openModal('thankModal');
        }, 350);
      };
    }
  });

  // --- Mobile burger menu ---
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  if (burgerBtn && mobileMenuOverlay && mobileMenuClose) {
    burgerBtn.onclick = () => {
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    mobileMenuClose.onclick = closeMenu;
    mobileMenuOverlay.onclick = (e) => {
      if (e.target === mobileMenuOverlay) closeMenu();
    };
    function closeMenu() {
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    // Touch swipe to close
    let startX = null;
    mobileMenuOverlay.addEventListener('touchstart', e => {
      if (e.touches.length === 1) startX = e.touches[0].clientX;
    });
    mobileMenuOverlay.addEventListener('touchmove', e => {
      if (!startX) return;
      let dx = e.touches[0].clientX - startX;
      if (dx > 80) closeMenu();
    });
    mobileMenuOverlay.addEventListener('touchend', () => { startX = null; });
  }

  // --- MobileTab show/hide on scroll ---
  const mobileTab = document.querySelector('.mobileTab');
  let lastScrollY = window.scrollY;
  let ticking = false;
  function onScroll() {
    if (!mobileTab) return;
    const currentY = window.scrollY;
    if (currentY < 10) {
      mobileTab.classList.add('show');
      mobileTab.classList.remove('hide');
    } else if (currentY > lastScrollY) {
      mobileTab.classList.remove('show');
      mobileTab.classList.add('hide');
    } else {
      mobileTab.classList.add('show');
      mobileTab.classList.remove('hide');
    }
    lastScrollY = currentY;
    ticking = false;
  }
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
  // Показываем mobileTab при загрузке
  if (mobileTab) mobileTab.classList.add('show');

  // ===== WHY-US MOBILE SLIDER =====
  (function() {
    function isMobile() { return window.innerWidth <= 700; }
    const slider = document.querySelector('.why-us__slider');
    if (!slider) return;
    const track = slider.querySelector('.why-us__slider-track');
    const cards = Array.from(track.children);
    const dotsContainer = slider.querySelector('.why-us__slider-dots');
    const prevBtn = slider.querySelector('.why-us__slider-prev');
    const nextBtn = slider.querySelector('.why-us__slider-next');
    let current = 0;
    let startX = 0, currentX = 0, isDragging = false;

    function getSlideWidth() {
      if (!cards[0]) return 0;
      const card = cards[0];
      const style = window.getComputedStyle(card);
      const width = card.getBoundingClientRect().width;
      const marginRight = parseFloat(style.marginRight) || 0;
      return width + marginRight;
    }

    function update() {
      const slideW = getSlideWidth();
      track.style.transform = `translateX(-${current * slideW}px)`;
      dotsContainer.innerHTML = '';
      for (let i = 0; i < cards.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot' + (i === current ? ' active' : '');
        dot.addEventListener('click', () => { current = i; update(); });
        dotsContainer.appendChild(dot);
      }
      prevBtn.style.opacity = current === 0 ? 0.4 : 1;
      nextBtn.style.opacity = current === cards.length - 1 ? 0.4 : 1;
    }

    function goTo(idx) {
      current = Math.max(0, Math.min(cards.length - 1, idx));
      update();
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Touch events
    track.addEventListener('touchstart', e => {
      if (!isMobile()) return;
      isDragging = true;
      startX = e.touches[0].clientX;
      currentX = startX;
      track.style.transition = 'none';
    });
    track.addEventListener('touchmove', e => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const dx = currentX - startX;
      const slideW = getSlideWidth();
      track.style.transform = `translateX(calc(-${current * slideW}px + ${dx}px))`;
    });
    track.addEventListener('touchend', e => {
      if (!isDragging) return;
      isDragging = false;
      const dx = currentX - startX;
      const slideW = getSlideWidth();
      track.style.transition = '';
      if (Math.abs(dx) > 50) {
        if (dx < 0 && current < cards.length - 1) current++;
        if (dx > 0 && current > 0) current--;
      }
      track.style.transform = `translateX(-${current * slideW}px)`;
      update();
    });

    window.addEventListener('resize', () => {
      if (!isMobile()) {
        slider.style.display = 'none';
      } else {
        slider.style.display = '';
        update();
      }
    });

    update();
  })();

  // ===== POPULAR MOBILE SLIDER (scroll-snap, unified) =====
  function initPopularMobileSlider() {
    if (window.innerWidth > 700) return;
    const track = document.querySelector('.popular-slider-mobile-track');
    if (!track) return;
    // Не дублируем карточки при повторной инициализации
    if (track.children.length > 0 && track.firstChild.classList.contains('popular-card')) return;
    const data = [
      { name: 'Скотч упаковочный', price: '120 ₽', articul: 'ART-001', icon: 'image/image_top_tab/logo.svg' },
      { name: 'Стрейч-пленка', price: '350 ₽', articul: 'ART-002', icon: 'image/image_top_tab/logo.svg' },
      { name: 'Пакеты с логотипом', price: 'от 2,5 ₽', articul: 'ART-003', icon: 'image/image_top_tab/logo.svg' },
      { name: 'Картонные коробки', price: 'от 15 ₽', articul: 'ART-004', icon: 'image/image_top_tab/logo.svg' },
      { name: 'Пленка пузырчатая', price: 'от 80 ₽', articul: 'ART-005', icon: 'image/image_top_tab/logo.svg' },
      { name: 'Клейкая лента', price: 'от 60 ₽', articul: 'ART-006', icon: 'image/image_top_tab/logo.svg' },
      { name: 'Пакеты майка', price: 'от 1,8 ₽', articul: 'ART-007', icon: 'image/image_top_tab/logo.svg' },
      { name: 'Пакеты с замком', price: 'от 3 ₽', articul: 'ART-008', icon: 'image/image_top_tab/logo.svg' },
    ];
    track.innerHTML = '';
    data.forEach(d => track.appendChild(createProductCard(d)));

    const dotsContainer = document.querySelector('.popular-slider-mobile-dots');
    const prevBtn = document.querySelector('.popular-slider-mobile-prev');
    const nextBtn = document.querySelector('.popular-slider-mobile-next');
    const cards = Array.from(track.children);
    let current = 0;
    function getMaxCurrent() {
      if (cards.length <= 3) return 0;
      return cards.length - 3;
    }
    function scrollToCard(idx) {
      if (!cards[idx]) return;
      const left = cards[idx].offsetLeft - track.offsetLeft;
      track.scrollTo({ left, behavior: 'smooth' });
      current = idx;
      updateDots();
    }
    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= getMaxCurrent(); i++) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot' + (i === current ? ' active' : '');
        dot.addEventListener('click', () => scrollToCard(i));
        dotsContainer.appendChild(dot);
      }
      if (prevBtn) prevBtn.style.opacity = current === 0 ? 0.4 : 1;
      if (nextBtn) nextBtn.style.opacity = current === getMaxCurrent() ? 0.4 : 1;
    }
    if (prevBtn) prevBtn.onclick = () => {
      if (current > 0) scrollToCard(current - 1);
    };
    if (nextBtn) nextBtn.onclick = () => {
      if (current < getMaxCurrent()) scrollToCard(current + 1);
    };
    track.onscroll = () => {
      let minDiff = Infinity, idx = 0;
      for (let i = 0; i <= getMaxCurrent(); i++) {
        const left = cards[i].offsetLeft - track.offsetLeft;
        const diff = Math.abs(track.scrollLeft - left);
        if (diff < minDiff) { minDiff = diff; idx = i; }
      }
      if (current !== idx) {
        current = idx;
        updateDots();
      }
    };
    window.addEventListener('resize', updateDots);
    updateDots();
  }

  // Инициализация при загрузке
  initPopularMobileSlider();
  // Инициализация при ресайзе (только при переходе на мобилку)
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 700) {
      initPopularMobileSlider();
    }
  });

  // ===== CATALOG MOBILE SLIDER (scroll-snap) =====
  (function() {
    function isMobile() { return window.innerWidth <= 700; }
    const slider = document.querySelector('.catalog__slider');
    if (!slider) return;
    const track = slider.querySelector('.catalog__slider-track');
    const cards = Array.from(track.children);
    const dotsContainer = slider.querySelector('.catalog__slider-dots');
    const prevBtn = slider.querySelector('.catalog__slider-prev');
    const nextBtn = slider.querySelector('.catalog__slider-next');
    let current = 0;

    function getMaxCurrent() {
      return Math.max(0, cards.length - 3);
    }

    function scrollToCard(idx) {
      if (!cards[idx]) return;
      const left = cards[idx].offsetLeft - track.offsetLeft;
      track.scrollTo({ left, behavior: 'smooth' });
      current = idx;
      updateDots();
    }

    function updateDots() {
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= getMaxCurrent(); i++) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot' + (i === current ? ' active' : '');
        dot.addEventListener('click', () => scrollToCard(i));
        dotsContainer.appendChild(dot);
      }
      prevBtn.style.opacity = current === 0 ? 0.4 : 1;
      nextBtn.style.opacity = current === getMaxCurrent() ? 0.4 : 1;
    }

    prevBtn.addEventListener('click', () => {
      if (current > 0) scrollToCard(current - 1);
    });
    nextBtn.addEventListener('click', () => {
      if (current < getMaxCurrent()) scrollToCard(current + 1);
    });

    // Обновлять активный dot при ручном скролле
    track.addEventListener('scroll', () => {
      let minDiff = Infinity, idx = 0;
      for (let i = 0; i <= getMaxCurrent(); i++) {
        const left = cards[i].offsetLeft - track.offsetLeft;
        const diff = Math.abs(track.scrollLeft - left);
        if (diff < minDiff) { minDiff = diff; idx = i; }
      }
      if (current !== idx) {
        current = idx;
        updateDots();
      }
    });

    window.addEventListener('resize', updateDots);
    updateDots();
  })();

  // ===== ABOUT IMAGES MOBILE SLIDER (scroll-snap, mobile only) =====
  (function() {
    function isMobile() { return window.innerWidth <= 700; }
    const slider = document.querySelector('.about-images-slider-mobile');
    if (!slider) return;
    const track = slider.querySelector('.about-images-slider-mobile-track');
    const cards = Array.from(track.children);
    const dotsContainer = slider.querySelector('.about-images-slider-mobile-dots');
    const prevBtn = slider.querySelector('.about-images-slider-mobile-prev');
    const nextBtn = slider.querySelector('.about-images-slider-mobile-next');
    let current = 0;

    function getMaxCurrent() {
      return Math.max(0, cards.length - 1);
    }

    function scrollToCard(idx) {
      if (!cards[idx]) return;
      const left = cards[idx].offsetLeft - track.offsetLeft;
      track.scrollTo({ left, behavior: 'smooth' });
      current = idx;
      updateDots();
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= getMaxCurrent(); i++) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot' + (i === current ? ' active' : '');
        dot.addEventListener('click', () => scrollToCard(i));
        dotsContainer.appendChild(dot);
      }
      if (prevBtn) prevBtn.style.opacity = current === 0 ? 0.4 : 1;
      if (nextBtn) nextBtn.style.opacity = current === getMaxCurrent() ? 0.4 : 1;
    }

    if (prevBtn) prevBtn.onclick = () => {
      if (current > 0) scrollToCard(current - 1);
    };
    if (nextBtn) nextBtn.onclick = () => {
      if (current < getMaxCurrent()) scrollToCard(current + 1);
    };

    // Touch/scroll events
    track.onscroll = () => {
      let minDiff = Infinity, idx = 0;
      for (let i = 0; i <= getMaxCurrent(); i++) {
        const left = cards[i].offsetLeft - track.offsetLeft;
        const diff = Math.abs(track.scrollLeft - left);
        if (diff < minDiff) { minDiff = diff; idx = i; }
      }
      if (current !== idx) {
        current = idx;
        updateDots();
      }
    };

    window.addEventListener('resize', () => {
      if (isMobile()) updateDots();
    });

    if (isMobile()) updateDots();
  })();

  // ===== UNIVERSAL MOBILE SLIDER STEP LOGIC =====
  function getMobileSliderStep(cardsLength) {
    if (cardsLength > 20) return 3;
    if (cardsLength > 10) return 2;
    return 1;
  }

  // ===== ABOUT BENEFITS SLIDER (scroll-snap, unified, adaptive step, mobile scroll fix) =====
  (function() {
    function isMobile() { return window.innerWidth <= 700; }
    const slider = document.querySelector('.about-benefits-slider');
    if (!slider) return;
    const track = slider.querySelector('.about-benefits-slider-track');
    const cards = Array.from(track.children);
    const dotsContainer = slider.querySelector('.about-benefits-slider-dots');
    const prevBtn = slider.querySelector('.about-benefits-slider-prev');
    const nextBtn = slider.querySelector('.about-benefits-slider-next');
    let current = 0;
    let step = getMobileSliderStep(cards.length);

    function getMaxCurrent() {
      if (isMobile()) {
        return Math.max(0, cards.length - step);
      } else {
        return 0;
      }
    }

    function scrollToCard(idx) {
      if (!cards[idx]) return;
      const left = cards[idx].offsetLeft - track.offsetLeft;
      track.scrollTo({ left, behavior: 'smooth' });
      current = idx;
      updateDots();
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= getMaxCurrent(); i += step) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot' + (i === current ? ' active' : '');
        dot.addEventListener('click', () => scrollToCard(i));
        dotsContainer.appendChild(dot);
      }
      if (prevBtn) prevBtn.style.opacity = current === 0 ? 0.4 : 1;
      if (nextBtn) nextBtn.style.opacity = current >= getMaxCurrent() ? 0.4 : 1;
    }

    if (prevBtn) prevBtn.onclick = () => {
      if (current > 0) scrollToCard(Math.max(0, current - step));
    };
    if (nextBtn) nextBtn.onclick = () => {
      if (current < getMaxCurrent()) scrollToCard(Math.min(getMaxCurrent(), current + step));
    };

    // Touch/scroll events: обновлять dots при ручном скролле
    track.onscroll = () => {
      if (!isMobile()) return;
      let minDiff = Infinity, idx = 0;
      for (let i = 0; i <= getMaxCurrent(); i++) {
        const left = cards[i].offsetLeft - track.offsetLeft;
        const diff = Math.abs(track.scrollLeft - left);
        if (diff < minDiff) { minDiff = diff; idx = i; }
      }
      if (current !== idx) {
        current = idx;
        updateDots();
      }
    };

    window.addEventListener('resize', () => {
      step = getMobileSliderStep(cards.length);
      updateDots();
    });

    step = getMobileSliderStep(cards.length);
    updateDots();
  })();

  // ===== HOW ORDER MOBILE SLIDER (scroll-snap, adaptive step) =====
  (function() {
    function isMobile() { return window.innerWidth <= 700; }
    const slider = document.querySelector('.how-order-slider-mobile');
    if (!slider) return;
    const track = slider.querySelector('.how-order-slider-mobile-track');
    const dotsContainer = slider.querySelector('.how-order-slider-mobile-dots');
    const prevBtn = slider.querySelector('.how-order-slider-mobile-prev');
    const nextBtn = slider.querySelector('.how-order-slider-mobile-next');

    // Данные для карточек (можно вынести из .how-order-grid или задать вручную)
    const data = [
      { icon: './image/why_buy/box.svg', title: 'Заказ', desc: 'Сформируйте заказ на сайте и ожидайте звонка менеджера' },
      { icon: './image/why_buy/odobrenie.svg', title: 'Согласование', desc: 'Дождитесь звонка менеджера для подтверждения заказа, обсуждения условий, оплаты и доставки' },
      { icon: './image/why_buy/ruble.svg', title: 'Счет', desc: 'Получите счет для оплаты и направленный в электронном виде договор' },
      { icon: './image/why_buy/terminal.svg', title: 'Оплата', desc: 'Оплатите заказ (если договор не предусматривает отсрочку платежа)' },
      { icon: './image/why_buy/car.svg', title: 'Отгрузка', desc: 'Получите товар любым удобным способом' },
    ];

    // Генерация карточек
    track.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'how-order-card';
      card.innerHTML = `
        <img src="${item.icon}" class="how-order-icon" alt="${item.title}" />
        <div class="how-order-card-content">
          <div class="how-order-card-title">${item.title}</div>
          <div class="how-order-card-desc">${item.desc}</div>
        </div>
      `;
      track.appendChild(card);
    });
    const cards = Array.from(track.children);
    let current = 0;
    let step = getMobileSliderStep(cards.length);

    function getMaxCurrent() {
      if (isMobile()) {
        return Math.max(0, cards.length - step);
      } else {
        return 0;
      }
    }

    function scrollToCard(idx) {
      if (!cards[idx]) return;
      const left = cards[idx].offsetLeft - track.offsetLeft;
      track.scrollTo({ left, behavior: 'smooth' });
      current = idx;
      updateDots();
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= getMaxCurrent(); i += step) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot' + (i === current ? ' active' : '');
        dot.addEventListener('click', () => scrollToCard(i));
        dotsContainer.appendChild(dot);
      }
      if (prevBtn) prevBtn.style.opacity = current === 0 ? 0.4 : 1;
      if (nextBtn) nextBtn.style.opacity = current >= getMaxCurrent() ? 0.4 : 1;
    }

    if (prevBtn) prevBtn.onclick = () => {
      if (current > 0) scrollToCard(Math.max(0, current - step));
    };
    if (nextBtn) nextBtn.onclick = () => {
      if (current < getMaxCurrent()) scrollToCard(Math.min(getMaxCurrent(), current + step));
    };

    // Touch/scroll events: обновлять dots при ручном скролле
    track.onscroll = () => {
      if (!isMobile()) return;
      let minDiff = Infinity, idx = 0;
      for (let i = 0; i <= getMaxCurrent(); i++) {
        const left = cards[i].offsetLeft - track.offsetLeft;
        const diff = Math.abs(track.scrollLeft - left);
        if (diff < minDiff) { minDiff = diff; idx = i; }
      }
      if (current !== idx) {
        current = idx;
        updateDots();
      }
    };

    window.addEventListener('resize', () => {
      step = getMobileSliderStep(cards.length);
      updateDots();
    });

    step = getMobileSliderStep(cards.length);
    updateDots();
  })();

  // Закрытие инфо-модалки по клику на overlay и Esc
  const infoOverlay = document.getElementById('infoModalOverlay');
  if (infoOverlay) {
    infoOverlay.onclick = function(e) {
      if (e.target === this) {
        closeInfoModal();
      }
    };
  }

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeInfoModal();
    }
  });

  // Show/hide map button based on screen size
  function updateMapButtonVisibility() {
    const mapBtn = document.querySelector('.footer-map-btn');
    if (mapBtn) {
      if (window.innerWidth <= 700) {
        mapBtn.style.display = 'block';
      } else {
        mapBtn.style.display = 'none';
      }
    }
  }

  // Initialize map button visibility
  updateMapButtonVisibility();
  window.addEventListener('resize', updateMapButtonVisibility);
  
  // Close map modal on overlay click and Esc
  const mapOverlay = document.getElementById('mapModalOverlay');
  if (mapOverlay) {
    mapOverlay.onclick = function(e) {
      if (e.target === this) {
        closeMapModal();
      }
    };
  }

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMapModal();
    }
  });

  // Анимации при появлении элементов
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Добавляем задержку для карточек
        const cards = entry.target.querySelectorAll('.why-us__card, .catalog__card, .popular-card, .review-card, .how-order-card, .about-benefit-card');
        cards.forEach((card, index) => {
          card.style.setProperty('--index', index);
          card.style.animationDelay = `${index * 0.1}s`;
        });
      }
    });
  }, observerOptions);

  // Наблюдаем за секциями
  document.querySelectorAll('section, .mission-form').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });

  // Сохраняем оригинальный текст кнопок
  document.querySelectorAll('button[type="submit"]').forEach(btn => {
    btn.setAttribute('data-original-text', btn.innerHTML);
  });
});

// --- Map Modal (Global Functions) ---
function openMapModal() {
  const overlay = document.getElementById('mapModalOverlay');
  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.classList.add('active');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeMapModal() {
  const overlay = document.getElementById('mapModalOverlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

// --- Info Modal (Global Functions) ---
function openInfoModal() {
  const overlay = document.getElementById('infoModalOverlay');
  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.classList.add('active');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
  const overlay = document.getElementById('infoModalOverlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}
