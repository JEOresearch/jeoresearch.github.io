/**
 * Tracks Amazon affiliate-link clicks with Google Analytics 4.
 * Uses event delegation so current and future Amazon links are covered.
 */
(function () {
  "use strict";

  function isAmazonAffiliateLink(link) {
    try {
      const hostname = new URL(link.href, window.location.href).hostname.toLowerCase();
      return hostname === "amazon.com" ||
        hostname.endsWith(".amazon.com") ||
        hostname === "amzn.to" ||
        hostname.endsWith(".amzn.to");
    } catch (error) {
      return false;
    }
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a[href]");

    if (!link || !isAmazonAffiliateLink(link)) {
      return;
    }

    const product = link.dataset.product || "Unknown";
    const category = link.dataset.category || "Unknown";

    if (typeof window.gtag === "function") {
      window.gtag("event", "amazon_affiliate_click", {
        product: product,
        category: category,
        page: window.location.pathname
      });
    }
  }, true);
})();
