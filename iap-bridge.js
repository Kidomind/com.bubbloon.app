/* Capacitor yerel satın alma köprüsü: oyunun beklediği window.AksuIAP arayüzünü sağlar.
   Eklenti: @capgo/native-purchases (Google Play Billing). Web'de hiçbir şey yapmaz. */
(function () {
  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;
  var NP = C.Plugins && C.Plugins.NativePurchases;
  if (!NP) return;
  window.AksuIAP = {
    buy: async function (id) {
      try {
        await NP.purchaseProduct({ productIdentifier: id, productType: 'inapp' });
        return true;
      } catch (e) { return false; }
    },
    restore: async function (id) {
      try {
        await NP.restorePurchases();
        var r = await NP.getPurchases({ productType: 'inapp' });
        var list = (r && r.purchases) || [];
        return list.some(function (p) { return p.productIdentifier === id; });
      } catch (e) { return false; }
    }
  };
})();
