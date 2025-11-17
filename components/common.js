// 共通ヘッダーHTML
const headerHTML = `
<header>
    <div class="header-content">
        <a href="index.html" class="logo">
            <img src="ロゴ.png" alt="IG Corporation Logo" class="logo-image">
            <span class="logo-text">株式会社IG Corporation</span>
        </a>

        <button class="hamburger" id="hamburger" aria-label="メニュー">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav id="nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li class="dropdown-parent">
                    <span class="dropdown-label">事業案内</span>
                    <ul class="dropdown-menu">
                        <li><a href="realestate.html">不動産事業</a></li>
                        <li><a href="construction.html">建設事業</a></li>
                        <li><a href="automotive.html">車両事業</a></li>
                        <li><a href="restaurant.html">飲食事業</a></li>
                    </ul>
                </li>
                <li><a href="company.html">会社案内</a></li>
                <li><a href="recruit.html">採用情報</a></li>
                <li><a href="contact.html">お問い合わせ</a></li>
            </ul>
        </nav>
    </div>
</header>
`;

// 共通フッターHTML
const footerHTML = `
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h4>株式会社IG Corporation</h4>
            <p class="footer-description">
                創業10年、群馬県高崎市を拠点に<br>
                安全第一の足場工事・解体工事を提供<br>
                <br>
                建設業許可：群馬県知事許可<br>
                （般-31）第○○○○号
            </p>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2024 株式会社IG Corporation. All rights reserved.</p>
    </div>
</footer>
`;

// ページ読み込み時に共通コンポーネントを挿入
document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーとフッターを挿入
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');

    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }

    // ハンバーガーメニューの初期化
    initHamburgerMenu();

    // ヒーロースライドショーの初期化
    initHeroSlider();
});

// ハンバーガーメニューの初期化
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // メニューリンクをクリックしたらメニューを閉じる
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // モバイルでのドロップダウンメニュー制御（ヘッダー）
        const dropdownLabel = nav.querySelector('.dropdown-label');
        if (dropdownLabel) {
            dropdownLabel.addEventListener('click', function() {
                const parent = this.parentElement;
                parent.classList.toggle('active');
            });
        }
    }
}

// ヒーロースライドショーの初期化
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dots .dot');

    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000; // 5秒ごとに切り替え

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // ドットクリックイベント
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, slideInterval);
        });
    });

    // 自動スライド
    let autoSlide = setInterval(nextSlide, slideInterval);
}
