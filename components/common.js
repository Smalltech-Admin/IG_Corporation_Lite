// 共通コンポーネント読み込み関数
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Failed to load ${componentPath}:`, error);
    }
}

// ページ読み込み時に共通コンポーネントを読み込む
document.addEventListener('DOMContentLoaded', async function() {
    // ヘッダーとフッターを読み込む
    await loadComponent('header', 'components/header.html');
    await loadComponent('footer', 'components/footer.html');

    // ハンバーガーメニューの初期化
    initHamburgerMenu();
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
    }
}
