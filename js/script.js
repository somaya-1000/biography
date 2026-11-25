// =========================
// تحديث سنة حقوق النشر
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================
// تأثير ظهور الأقسام أثناء التمرير
// =========================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-shown");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            // هامش علوي كبير: يضمن ظهور الأقسام التي تم تجاوزها
            // عند القفز إلى رابط أو استعادة موضع التمرير بعد التحديث
            rootMargin: "100000px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
} else {
    // من أجل المتصفحات القديمة: إظهار كل المحتوى مباشرة
    revealElements.forEach((element) => {
        element.classList.add("is-shown");
    });
}


// =========================
// زر العودة إلى أعلى الصفحة
// =========================

const toTopButton = document.querySelector(".to-top");

if (toTopButton) {
    const toggleToTop = () => {
        toTopButton.classList.toggle(
            "is-visible",
            window.scrollY > 500
        );
    };

    window.addEventListener("scroll", toggleToTop, { passive: true });
    toggleToTop();

    toTopButton.addEventListener("click", () => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? "auto" : "smooth"
        });
    });
}


// =========================
// روابط واتساب
// =========================

const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
});
