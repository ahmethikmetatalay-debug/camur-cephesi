# Gaşmerler – Görsel yenileme notları

Bu klasör oyunun tam ve güncel hâlidir. Orijinal projenin üstüne aşağıdaki değişiklikler uygulandı; git geçmişi korunuyor, yeni değişiklikler henüz commit edilmedi (`git status` ile görülebilir).

## Ne değişti

- **Karakter:** Pançolu, kapüşonlu, buff maskeli "hayatta kalan". Tamamen kodla çizilir (`index.html` içinde `GASMER` modülü). Takım rengi panço + kapüşon. Yüz hâlleri: normal, HAİN, acı (hasar), panik (hızlı düşüş); havadayken panço eteği uçuşur. Gözler nişan yönüne bakar.
- **Silahlar (elde ve mermi):** `SILAH_CIZ` (PVC boru bazuka, ters pet şişe roket) ve `HURDA` (konserve el bombası, kapak dolu kavanoz + kapak parçaları, kurmalı banyo ördeği "Deli Ördek", saç kurutma makinesi portal tabancası, bulaşık eldiveni yumruk, plastik kum küreği). Silah gövde hizasında, karakterin önünde havada durur (`AIM_Y`). Roketin arkasından duman çıkar (`rocketSmoke`).
- **Nesneler:** `OBJE` modülü: kapalı karton sürpriz kutu (sprey "?"), atlet poşet paraşüt, tek elipsli ışık halkası portal, ışık saçan yeşil kara delik + yörüngede taşlar (patlayınca 7 taş saçılır, çarptığı askere hasar verir; `stepBlackHole`), altıgen çizgili kalkan küresi, koli bandı HAİN rozeti.
- **Harita teması:** Plastik Evrim Gezegeni. Arazi şekli eskisi gibi tohumla rastgele üretilir; görünüm `TEMA` nesnesinden gelir (plastik katmanlar, nane yeşili kabuk, gömülü kapaklar, puslu gökyüzü, çöp dağları ve dev şişe siluetleri, yağlı yeşil su). Yeni haritalar için yeni bir `TEMA` seti eklemek yeterli.
- **Arayüz:** Kapüşonlu yüz uygulama ikonu (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, kaynak `assets/ui/app-icon.png`), karton harfli + yara bantlı logo (menüde satır içi SVG, kaynak `assets/ui/logo.svg`), tek mermi ikonlu kırmızı kapak ATEŞ düğmesi, ikonlu ve açıklamasız kompakt silah menüsü.
- **Türkçe harfler:** Lilita One'da İ Ş Ğ ş ğ yok. Ş ş Ğ ğ, Baloo 2 yedek yazı tipinden gelir; İ için noktası elle eklenir (`trText` canvas için, `.itr` CSS sınıfı afiş için).

## Dosyalar

- `index.html`: oyunun tamamı (tüm çizimler kodda).
- `assets/worm`, `assets/weapons`, `assets/projectiles`, `assets/ui`: rehberdeki adlarla PNG/SVG çıktılar. Oyun şu an bunları yüklemiyor, çizimler koddan geliyor; dosyalar arşiv ve ileride gerekirse diye duruyor.
- `assets/_kaynak`: şablonlu SVG kaynakları. `assets/_sablonlar`: orijinal boş şablonlar.

## Kalan işler

- Diğer üç harita teması: Aşırı İşlenmiş Mutfak, Oyuncak Kutusu, Elektronik Çöplüğü (+ lobide harita seçimi ve küçük resimler).
- Sesler (13 efekt + lobi müziği; şu an kodla üretiliyor).
- Kürek, sadece sandıktan çıktığı için maç içinde canlı test edilmedi.

## 2026-10-22 eklemeleri

- **Gömülü altın sandık:** Her haritada toprağın 120-180 px altında, etrafı tamamen toprak iki oyuk (`buryGoldCrates`, tohumdan üretilir). İçindeki altın sandık (`k: 1`) "Hele İki Gözüm" verir. Kementle alınamaz; kazarak ya da patlatarak ulaşılır.
- **Hele İki Gözüm (`airstrike`):** Haritaya dokunarak hedef seçilir, BOMBALA ile `assets/sounds/hele-iki-gozum.mp3` çalar; F-16 (`HAVA.f16`) ~2,6 sn'de hedefin üstünden geçip 5 bomba bırakır, tam isabette 99 hasar.
- **Kement (`lasso`):** Sürpriz sandıktan çıkar, tek kullanımlık. İp yerçekimsiz ve dümdüz gider, değdiği sandığı alır; turu bitirmez.
- **Kamera:** Atış yapılan turda tur sonunda kamera son vuruş yerinde 3 sn bekler (`SETTLE_SHOT`).

## 2026-10-23: Hurda Gezegeni haritası

- Elle çizilmiş 6 katmanlı **Hurda Gezegeni** (`harita-hurda-gezegeni.js`, `assets/maps/hurda-gezegeni/`) ikinci harita olarak eklendi. Yerel kurulumda ve lobide "Harita" seçimi var; varsayılan Plastik Evrim. Lobide host seçer, misafirlere yayınlanır.
- Çarpışma maskesi dosyanın içinde sayı olarak gömülü; her telefonda birebir aynı (testte iki tarayıcıda maske özeti aynı çıktı).
- Gömülü altın sandıklar bu haritada da oluşur; sabit haritalarda uygun yer az olabildiği için son bir esnek arama eklendi (Hurda'da 20, Plastik'te 30 tohumda hep 2 sandık).
- Oda öneki `gasmerler-v10-` (lobi ve init mesajı harita bilgisi taşıyor).
