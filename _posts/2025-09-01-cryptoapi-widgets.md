---
title: 'Тестирую виджеты для текущего проекта'
description: "CryptoAPI.ai — приложение с LLM-ассистентом для трейдинга на крипторынках. "
image: img/blog/2025/2025-09-01-cryptoapi.png
categories: Разработка
date: 2025-09-01
---

<!-- Сигналы -->
<iframe src="https://cryptoapi.ai/ru/widgets/signals?theme=dark&PageSpeed=Off&rows=8&widget_bypass=PROD_STUB" title="Crypto signals widget" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-same-origin"
  style="border:0;border-radius:12px;overflow:hidden;width:100%" width="100%"></iframe>
<script>
(function() {
  if (window.cryptoApiWidgetListener) {
    return;
  }
  window.cryptoApiWidgetListener = true;
  window.addEventListener('message', function(e) {
    if (e.origin !== "https://cryptoapi.ai") {
      return;
    }
    if (e.data && e.data.type === 'cryptoapi:height' && e.source) {
      var iframes = document.querySelectorAll('iframe[src*="https://cryptoapi.ai"]');
      for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow === e.source) {
          iframes[i].style.height = (e.data.height || 120) + 'px';
          break;
        }
      }
    }
  });
})();
</script>

<!-- Страх и жадность -->
<iframe src="https://cryptoapi.ai/ru/widgets/fgi?theme=light&PageSpeed=Off&widget_bypass=PROD_STUB" title="Crypto fgi widget" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-same-origin"
  style="border:0;border-radius:12px;overflow:hidden;width:100%" width="100%"></iframe>
<script>
(function() {
  if (window.cryptoApiWidgetListener) {
    return;
  }
  window.cryptoApiWidgetListener = true;
  window.addEventListener('message', function(e) {
    if (e.origin !== "https://cryptoapi.ai") {
      return;
    }
    if (e.data && e.data.type === 'cryptoapi:height' && e.source) {
      var iframes = document.querySelectorAll('iframe[src*="https://cryptoapi.ai"]');
      for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow === e.source) {
          iframes[i].style.height = (e.data.height || 120) + 'px';
          break;
        }
      }
    }
  });
})();
</script>

<!-- Биткоин -->
<iframe src="https://cryptoapi.ai/ru/widgets/btc?theme=dark&PageSpeed=Off&widget_bypass=PROD_STUB" title="Crypto btc widget" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-same-origin"
  style="border:0;border-radius:12px;overflow:hidden;width:100%" width="100%"></iframe>
<script>
(function() {
  if (window.cryptoApiWidgetListener) {
    return;
  }
  window.cryptoApiWidgetListener = true;
  window.addEventListener('message', function(e) {
    if (e.origin !== "https://cryptoapi.ai") {
      return;
    }
    if (e.data && e.data.type === 'cryptoapi:height' && e.source) {
      var iframes = document.querySelectorAll('iframe[src*="https://cryptoapi.ai"]');
      for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow === e.source) {
          iframes[i].style.height = (e.data.height || 120) + 'px';
          break;
        }
      }
    }
  });
})();
</script>

<!-- TRIndex -->
<iframe src="https://cryptoapi.ai/ru/widgets/trindex?theme=light&PageSpeed=Off&widget_bypass=PROD_STUB" title="Crypto trindex widget" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-same-origin"
  style="border:0;border-radius:12px;overflow:hidden;width:100%" width="100%"></iframe>
<script>
(function() {
  if (window.cryptoApiWidgetListener) {
    return;
  }
  window.cryptoApiWidgetListener = true;
  window.addEventListener('message', function(e) {
    if (e.origin !== "https://cryptoapi.ai") {
      return;
    }
    if (e.data && e.data.type === 'cryptoapi:height' && e.source) {
      var iframes = document.querySelectorAll('iframe[src*="https://cryptoapi.ai"]');
      for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow === e.source) {
          iframes[i].style.height = (e.data.height || 120) + 'px';
          break;
        }
      }
    }
  });
})();
</script>
