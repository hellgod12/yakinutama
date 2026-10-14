// Smooth scroll untuk navigasi
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

// Animasi fade-in saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua produk card
document.querySelectorAll('.produk-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Sticky header shadow
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle (untuk responsivitas tambahan)
function createMobileMenu() {
    const header = document.querySelector('.header .container');
    const nav = document.querySelector('.nav');
    
    // Cek jika sudah ada tombol menu
    if (document.querySelector('.menu-toggle')) return;
    
    // Buat tombol menu mobile
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 10px;
    `;
    
    header.insertBefore(menuToggle, nav);
    
    // Tampilkan tombol hanya di mobile
    const checkMobile = () => {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            nav.style.display = 'none';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        } else {
            menuToggle.style.display = 'none';
            nav.style.display = 'flex';
            nav.style.position = 'static';
            nav.style.padding = '0';
            nav.style.boxShadow = 'none';
        }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Toggle menu
    menuToggle.addEventListener('click', () => {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
}

// Initialize mobile menu
createMobileMenu();

// Tambahkan efek hover pada tombol
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Validasi nomor WhatsApp (opsional - untuk customisasi)
function validateWhatsAppNumber(number) {
    // Hapus karakter non-digit
    const cleanNumber = number.replace(/\D/g, '');
    
    // Pastikan dimulai dengan 62 atau 0
    if (cleanNumber.startsWith('0')) {
        return '62' + cleanNumber.substring(1);
    }
    
    return cleanNumber;
}

// Console log untuk debugging
console.log('Website YAKINUTAMA berhasil dimuat!');
console.log('Untuk mengubah nomor WhatsApp, edit file index.html dan ganti 6281234567890 dengan nomor Anda');
