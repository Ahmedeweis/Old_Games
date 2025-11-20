<template>
  <!-- Footer -->
  <footer class="main-footer" id="footer">
    <div class="container">
      <div class="footer-section">
        <h4>تابعنا</h4>
        <div class="social-icons">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <button class="fun-facts-btn">أدعمنا</button>
      </div>
      <div class="footer-section">
        <h4>معلومات عنا</h4>
<p>نحن نصمم أنظمة وبرمجيات مبتكرة بشغف ودقة، محولين أفكارك ورؤيتك إلى واقع منذ عام 2019.
يمكننا أيضًا تصميم حلول مخصصة تناسب احتياجات شركتك.</p>
      </div>
      <div class="footer-section">
        <h4>روابط سريعة</h4>
        <ul>
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="#services">الخدمات</a></li>
          <li><a href="#portfolio">معرض الأعمال</a></li>
          <li><a href="#contact">اتصل بنا</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>تواصل معنا</h4>
        <p>البريد الإلكتروني: Ahmed.eweiis@gmail.com</p>
        <p>الهاتف:  01093075107</p>
        <p>الموقع: 14/1200 , القاهرة 02 , مصر</p>
      </div>
    </div>
    <div class="copyright">
      © 2025 Falcone Core. جميع الحقوق محفوظة.
    </div>
  </footer>
</template>
<script setup>
</script>
<style scoped>
/* 0 Footer */
.main-footer {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url('/imgs/footer-bg.jpg') no-repeat center center;
  background-size: cover;
  padding: 80px 20px 40px 20px;
  color: #fff;
  position: relative;
  overflow: hidden;
  direction: rtl;
}
.main-footer .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.footer-section h4 {
  font-size: 22px;
  color: #6E11B0;
  margin-bottom: 15px;
}
.footer-section p,
.footer-section ul li a {
  color: #fff;
  font-size: 14px;
  line-height: 1.6;
}
.footer-section p {
    font-weight: bold;
    font-size: 18px;
    padding: 5px 0;
}
.footer-section ul {
  list-style: none;
  padding: 0;
}
.footer-section ul li {
  margin-bottom: 10px;
}
.footer-section ul li a {
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: bold;
  font-size: 16px;
}
.footer-section ul li a:hover {
  color: #00cec9;
}
.social-icons a {
  margin-left: 15px;
  color: #6E11B0;
  font-size: 24px;
  transition: all 0.3s ease;
}
.social-icons a:hover {
  transform: scale(1.2) rotate(15deg);
  color: #00cec9;
  text-shadow: 0 0 10px #00cec9;
}
.fun-facts-btn {
  background: none;
  border: 2px solid #6E11B0;
  color: #6E11B0;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  margin-top: 20px;
}
.fun-facts-btn:hover {
  background-color: #6E11B0;
  color: white;
  transform: scale(1.05);
}
.fun-facts-panel {
  display: none;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  position: fixed;
  bottom: -300px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: bottom 0.5s ease;
}
.fun-facts-panel.active {
  display: block;
  bottom: 20px;
}
.fun-facts-panel p {
  margin: 0;
  font-size: 14px;
  text-align: center;
}
.copyright {
  text-align: center;
  font-size: 16px;
  color: #fff;
  padding-top: 30px;
  margin-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.2);
}
/* Responsive */
@media (max-width: 768px) {
  .main-footer .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .social-icons a {
    margin: 0 10px;
  }
  .footer-section h4 {
    font-size: 18px;
  }
}
</style>