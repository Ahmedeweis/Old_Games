<template>
  <!-- Footer -->
  <footer class="main-footer" id="footer">
    <div class="container">
      <div class="footer-section">
        <h4>تابعنا</h4>
        <div class="social-icons">
          <a :href="SOCIAL_LINKS.tiktok" target="_blank" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
          <a :href="SOCIAL_LINKS.telegram" target="_blank" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
          <a :href="SOCIAL_LINKS.instagram" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a :href="SOCIAL_LINKS.whatsapp" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
        <router-link to="/Support" class="fun-facts-btn" style="text-decoration: none;">أدعمنا</router-link>
      </div>
      <div class="footer-section">
        <h4>عن الموقع</h4>
<p>موقعنا متخصص في توفير أجمل الألعاب القديمة والكلاسيكية للكمبيوتر، بنسخ آمنة ومجانية تماماً. هدفنا هو إحياء ذكريات الطفولة وتوفير تجربة لعب ممتعة وسهلة للجميع.</p>
      </div>
      <div class="footer-section">
        <h4>روابط سريعة</h4>
        <ul>
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="#services">الخدمات</a></li>
          <li><a href="#portfolio">معرض الأعمال</a></li>
          <li><router-link to="/contact">اتصل بنا</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>تواصل معنا</h4>
        <p>البريد الإلكتروني: {{ CONTACT_INFO.email }}</p>
        <p>الهاتف:  {{ CONTACT_INFO.phone }}</p>
        <p>الموقع: {{ CONTACT_INFO.address }}</p>
      </div>
    </div>
    <div class="copyright">
      © 2025 ألعاب زمان - Old Games. جميع الحقوق محفوظة.
    </div>
  </footer>
</template>
<script setup>
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants/socialLinks';
</script>
<style scoped>
/* 0 Footer */
.main-footer {
  background: linear-gradient(to bottom, #0f172a, #020617);
  padding: 80px 20px 40px 20px;
  color: #94a3b8;
  position: relative;
  overflow: hidden;
  direction: rtl;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.main-footer .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.footer-section h4 {
  font-size: 20px;
  color: #009089;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: -8px;
  right: 0;
  width: 40px;
  height: 3px;
  background: #009089;
  border-radius: 2px;
}

.footer-section p {
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section ul li a {
  text-decoration: none;
  color: #cbd5e1;
  font-size: 15px;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-section ul li a:hover {
  color: #009089;
  transform: translateX(-5px);
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  color: #cbd5e1;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icons a:hover {
  background: #009089;
  color: #0f172a;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 144, 137, 0.3);
}

.fun-facts-btn {
  background: transparent;
  border: 2px solid #009089;
  color: #009089;
  padding: 10px 25px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 20px;
  display: inline-block;
}

.fun-facts-btn:hover {
  background: #009089;
  color: #0f172a;
  box-shadow: 0 0 20px rgba(0, 144, 137, 0.4);
  transform: translateY(-2px);
}

.copyright {
  text-align: center;
  font-size: 14px;
  color: #64748b;
  padding-top: 30px;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .main-footer .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }

  .footer-section h4::after {
    right: 50%;
    transform: translateX(50%);
  }

  .social-icons {
    justify-content: center;
  }

  .footer-section ul li a:hover {
    transform: translateX(0) scale(1.05);
  }
}
</style>