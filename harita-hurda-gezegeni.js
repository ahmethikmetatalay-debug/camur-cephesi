/* ==========================================================================
   HARİTA: Hurda Gezegeni (Photoshop katmanlarından)
   Atık PCB dağları, kablolar, gömülü cihazlar; elle çizilmiş 6 katman.

   Bu dosya kendi başına çalışır. Plastik Evrim Gezegeni haritasının yerine
   geçmez; oyuna ikinci bir harita seçeneği olarak eklenir (ENTEGRASYON.md).

   Katmanlar (assets/maps/hurda-gezegeni/):
     gok.png    ekrana sabit gökyüzü
     uzak.png   uzak hurda siluetleri (yavaş paralaks)
     yakin.png  yakın hurda siluetleri (biraz daha hızlı paralaks)
     magara.png mağaraların koyu arka duvarı (süs, çarpışmaya katılmaz)
     arazi.png  oynanan arazi (patlamalarla oyulur)
     (su kodla çizilir: dalgalı bataklık + yüzen PET şişe ve cihazlar)

   Çarpışma maskesi aşağıda sayı olarak gömülüdür; resimden okunmaz. Böylece
   her telefonda (Safari'nin tuval gürültüsü dahil) piksel piksel aynı çıkar.
   Dünya: 1900 × 800, su çizgisi 760.
   ========================================================================== */
const HARITA_HURDA_PNG = (() => {
  const W = 1900, H = 800;
  const OY = 36;                  // arazi/mağara resminin dünyadaki üst kenarı (px)
  const OLCEK = 0.599747;                // kaynak resim pikseli → dünya pikseli
  const UZAK_KIRP = 326, YAKIN_KIRP = 341, KAYNAK_Y = 1344;   // paralaks şeritlerinin kırpılmış üst kısmı
  const SU_ALT = '#123331';
  const RLE = ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;41b,8;415,f;40f,15;409,1b;404,21;3ff,2a;3fb,31;3f5,3d;3a3,ab;35c,114;356,11d;355,11f;353,123;352,125;351,127;350,129;34f,12b;34f,12c;34f,12c;34e,12e;34e,12e;34e,12e;11d,11,34e,12e;116,1d,34e,12e;111,25,34e,12e;10a,2f,34e,12e;103,3b,34e,12e;f5,4f,34e,12e;d2,af,34e,12e;a0,e3,34f,12d;9d,e7,34f,12d;9c,e9,34f,12d;9b,eb,34f,12d;9a,ec,34f,12d;9a,ed,34f,12d;9a,ed,34f,12d;99,ee,34f,12d;99,ee,34f,12d;99,ee,350,12c;99,ee,350,12c;99,ef,350,12c;99,ef,350,12c;99,ef,350,12c;99,ef,350,12c;9a,ee,350,12c;9a,ee,351,12a;9a,ee,351,12a;9a,ed,351,12a;9a,ed,351,12a;9a,ed,351,129;9a,ed,352,120,473,7;9a,ed,352,7,35b,116,474,6;9b,ec,352,6,35b,116,475,4;9b,ec,352,5,35b,116,476,3;9b,ec,353,3,35c,115;9b,eb,353,2,35c,115;9b,eb,35c,114;9b,eb,35d,113;9b,eb,35d,113;9b,eb,35d,112;9c,ea,35e,111;9c,ea,35e,111;9c,e9,35f,10f;9c,e9,35f,10f;9c,e9,360,10e,62d,d;9c,e9,360,10d,626,1c;9c,e9,360,10d,623,24;9d,e7,361,10c,61f,2f;9d,e7,361,10b,61b,3f;9d,e7,362,10a,5f8,7d;9d,e6,362,10a,5d8,c0;9d,df,17e,5,362,109,5d6,e3;9d,df,180,1,362,109,5d5,e6;9d,df,363,108,5d4,e8;9d,df,363,108,5d4,e9;9e,dd,363,107,5d3,ea;9e,8,a8,d3,364,106,5d3,eb;9f,6,a8,d3,364,106,5d3,eb;a0,3,a8,d3,365,105,5d3,eb;a8,d3,365,105,5d2,ec;a8,d3,365,105,5d2,ec;a9,d1,366,103,5d2,ec;a9,d1,366,103,5d2,ec;a9,d1,366,103,5d2,ec;a9,d1,366,103,5d2,ec;a9,d0,367,101,5d2,ec;a9,d0,367,101,5d2,ec;a9,d0,367,101,5d2,ec;aa,ce,367,100,5d2,ec;aa,ce,368,ff,5d2,ec;aa,ce,368,fe,5d2,ec;aa,ce,368,fe,5d2,ec;aa,cd,368,fe,5d3,ea;aa,cd,368,fd,5d3,ea;aa,cd,369,fc,5d3,ea;ab,cc,369,fb,5d3,ea;ab,cb,369,fb,5d3,ea;ab,cb,369,fb,5d3,ea;ab,cb,369,fa,5d3,ea;ac,c9,36a,f9,5d4,e9;ac,c8,36a,f8,5d4,e9;ad,c6,36a,f8,5d4,e8;ad,c5,36b,ea,456,c,5d4,e8;ae,c3,36b,e9,458,9,5d4,e8;af,c0,36c,e8,45a,7,5d4,e8;af,bf,36d,e7,5d4,e8;b0,bc,36e,e6,5d4,e7;b0,bb,372,e2,5d5,e6;b0,ba,376,dd,5d5,e6;b0,b9,379,da,5d5,e6;b0,b8,379,da,5d5,e6;b0,b7,37a,d9,5d6,e5;b0,b6,37a,d9,5d6,e5;b0,b5,37a,b,386,cd,5d7,4,5dc,df;b0,b5,37b,a,387,cc,5dd,de;b0,b4,37b,a,388,cb,5dd,dd;b0,b4,37b,a,389,ca,5dd,d3,6b1,9;b0,b4,37b,b,389,ca,5dd,d2,6b2,8;b0,b3,37b,b,38a,c8,5de,d1,6b3,7;b0,b3,37c,a,38a,c8,5de,d1,6b5,3;b0,b3,37c,a,38b,c5,5de,d0;b0,b3,37c,a,38b,bf,5de,d0;b0,b3,37c,a,38c,ba,5df,cf;b0,b3,37c,a,38c,ba,5df,cf;b0,b3,37c,a,38d,b9,5df,ce;b0,b3,37c,a,38d,b9,5e0,cd;b0,b3,37c,a,38e,b8,5e0,cd;b0,b2,37c,a,38f,b7,5e0,cc;b0,b,bf,a3,37c,a,38f,b7,5e1,cb;b0,b,c4,9e,37c,b,390,b6,5e1,cb;af,c,c7,9b,37c,b,391,a8,43a,c,5e1,cb;af,c,c8,9a,37d,a,391,a8,43b,b,5e2,c9;af,c,c8,9a,37d,a,391,a7,43b,b,5e2,c9;af,c,c9,99,37d,a,392,a5,43a,c,5e2,c9;af,c,ca,98,37d,a,392,a5,43a,c,5e3,c8;af,c,ca,98,37d,a,393,a3,43a,d,5e3,c7;af,c,cb,97,37d,a,394,a1,43a,d,5e3,c7;af,c,cb,97,37d,b,394,a0,43a,d,5e4,c5;b0,a,cb,97,37e,a,395,9f,43a,d,5e4,c5;b0,a,cc,96,37e,a,396,9d,43a,d,5e4,c5;b1,9,cc,96,37e,b,397,9c,43a,d,5e4,c4;b1,8,cd,95,37e,b,398,9a,43a,c,5e4,c4;b2,7,cd,95,37f,b,399,98,439,d,5e5,c3;b3,6,cd,95,37f,c,39a,97,439,d,5e5,c2;b3,6,ce,94,380,c,39b,95,439,d,5e5,c2;b4,4,ce,94,380,c,39c,94,438,e,5e5,c2;cf,92,380,e,39d,92,438,d,5e5,c1;cf,92,381,e,39c,93,438,d,5e5,c1;d0,90,382,f,39b,93,437,e,5e5,c0;d0,8a,15c,3,383,ab,437,d,5e5,c0;d1,88,384,a9,436,e,5e5,bf;d1,88,385,a8,436,d,5e5,be;d2,7f,152,7,386,a6,436,c,5e5,bd;d4,6,e0,70,153,5,387,a5,436,b,5e6,bb;e1,6f,154,4,388,a5,436,a,5e6,b9;e2,6e,38a,a3,436,a,5e6,b7;e2,6d,38b,a2,436,a,5e6,b6;e3,6c,38c,a1,437,9,5e6,b5;e4,6b,38f,f,3a1,8c,438,7,5e6,b4;e5,6a,392,7,3a1,8c,43a,4,5e6,b2;e6,69,3a1,8c,5e6,b1;e6,68,3a2,8b,5e6,b1;e7,67,3a2,8b,5e6,b3;e8,66,3a2,8b,5e6,b4;e8,54,13e,f,3a2,8b,5e6,b5;e9,52,13f,e,3a2,8b,5e6,b6;ea,50,141,c,3a3,8a,5e6,b6;eb,4e,142,a,3a3,8a,5e6,b7;eb,4d,143,9,3a3,8a,5e6,b7;ec,4c,144,7,3a3,8a,5e6,b7;ed,4a,144,7,3a3,8a,5e6,b8;ed,4a,145,5,3a4,89,5e6,1d,605,99;ee,48,3a4,89,5e6,1d,606,98;ee,47,3a4,89,5e6,1d,606,98;ef,46,3a4,89,5e6,1d,607,97;ef,45,3a4,89,5e7,1c,607,97;f0,44,3a4,88,5e7,1c,608,96;f0,43,3a5,87,5e7,1d,609,95;f1,42,3a5,87,5e7,1a,603,1,609,95;f1,42,3a5,86,5e7,19,60a,94;f2,40,3a5,86,5e7,19,60a,8a,697,6;f2,40,3a6,84,5e7,19,60b,87,698,4;f2,3f,223,1c,3a6,83,5e7,19,60b,85;f3,3e,220,2b,3a6,82,5e7,18,60b,82;f3,3d,21e,36,3a7,80,5e7,18,60b,80;f4,3c,21d,3f,3a7,7e,5e7,18,60b,7f;f4,3b,21c,47,3a7,7d,5e7,18,60a,7f;f5,3a,21b,4d,3a7,7c,5e7,17,60a,7e;f5,10,108,26,219,56,3a8,14,3c0,62,5e7,17,609,7f;f5,f,109,24,218,5f,3a8,13,3c3,5f,5e7,17,609,7e;f6,d,109,23,216,6c,3a8,12,3c4,5e,5e7,17,608,7e;f6,c,10a,20,215,79,2b2,b,3a9,10,3c4,5e,5e7,17,608,7e;f7,b,10a,1f,213,88,2ac,14,3a9,f,3c5,5d,5e8,16,607,7e;f7,a,10a,1e,212,b0,3a9,e,3c5,5d,5e8,16,607,7e;f7,a,10b,1c,210,b4,3aa,c,3c5,5c,5e8,a,5f4,a,607,7d;f8,8,10b,1c,20e,b8,3aa,a,3c6,5b,5e8,a,5f5,a,607,7d;f9,7,10c,1b,20c,bc,3aa,9,3c6,5b,5e8,9,5f5,a,607,7d;f9,6,10c,1a,20b,bf,3ab,7,3c7,5a,5e9,8,5f5,b,608,7b;fa,4,10d,19,209,c4,3ab,6,3c7,5a,5ea,6,5f6,a,608,7b;10d,19,207,c9,3ac,4,3c8,58,5ea,5,5f6,b,609,7a;10e,17,205,d3,3c8,58,5f6,b,60a,78;10e,17,203,de,3c9,57,5f7,b,60c,76;10f,16,200,e5,3c9,56,5f7,b,60d,75;10f,15,1fe,e9,3ca,54,5f8,b,60f,73;110,14,1fb,ee,3ca,54,5f8,b,610,72;110,13,1f9,f1,3cb,52,5f9,b,612,70;111,12,1f7,f5,3cb,51,5f9,c,613,6f;111,12,1f4,f9,3cb,50,5fa,c,614,6e;112,10,1f0,ff,3cc,4f,5fa,d,616,6c;112,10,1ed,103,3cd,4d,5fb,d,616,6b;113,f,1eb,106,3cd,4d,5fb,f,617,6a;118,9,1e9,109,3ce,4b,5fc,f,616,6b;11b,6,1e6,10d,3ce,4b,5fd,10,614,6c;11c,3,1e3,111,3cf,49,5fd,82;1df,116,3d0,48,5fe,81;1dc,11a,3d0,48,5ff,7f;1da,11d,3d1,46,600,7e;1d8,120,3d2,45,601,7c;1d5,124,3d3,44,602,7b;1d2,128,3d3,44,604,19,61f,5e;1cf,12c,3d4,37,40c,b,606,15,620,5c;1cc,130,3d5,35,40d,9,608,11,621,5b;1c9,134,3d6,34,40e,8,60b,b,622,59;1c7,137,3d6,33,40f,7,623,57;1c3,13c,3d7,32,40f,7,624,55;1c0,141,3d8,30,410,5,625,52;1bc,146,3d9,2f,411,3,625,51;1b9,14b,3d9,2f,626,4f;1b5,150,3da,2d,626,4f;1b3,153,3da,2d,627,4d;1af,158,3db,17,3f6,10,627,4c;1aa,15f,3dc,16,3f8,e,628,4b;1a2,169,3dc,15,3f9,c,628,4a;19a,172,3dd,14,3fb,9,629,49;197,176,3dd,14,3fc,7,629,48;196,179,3de,13,3fe,4,62a,47;194,17c,3df,11,62a,46;193,17f,3df,11,62b,45;191,182,3e0,10,62b,44;17d,3,18f,186,3e0,f,62c,43;178,19e,3e1,e,62d,42;176,1a1,3e1,e,62d,41;172,1a7,3e2,c,62d,41;170,1aa,3e2,c,62e,3f;16f,1ad,3e3,b,62e,3f;16e,1b0,3e3,a,62f,3e;16d,1b2,3e4,9,62f,3d;16c,1b4,3e4,9,630,3c;16b,1b7,3e5,7,630,28,65b,10;16a,1b9,3e5,7,631,26,65c,f;169,1bc,3e6,5,631,26,65d,e;168,1be,3e8,2,632,24,65d,d;167,1c0,632,23,65e,c;166,1c3,633,22,65e,b;165,1c5,633,22,65e,b;163,1c9,634,20,65f,9;161,1cc,634,20,660,8;160,1cf,635,1e,660,7;15e,1d2,635,1e,661,5;15c,1d5,635,1e,663,2;158,1db,636,1c;148,1ec,636,1c;146,1f0,637,1a;145,1f3,637,1a;143,1f6,638,19;142,1f8,638,18;13e,1fe,639,17;139,205,639,16;133,20c,63a,15;e5,4,12c,215,63a,14;e4,9,126,21d,63a,13;d7,3,e3,d,121,223,63b,12;d6,6,e3,13,117,22f,63b,11;d6,8,e2,266,63c,f;d6,274,63c,f;d7,275,63d,d;d7,277,63d,c;d8,278,63e,a;d9,279,63e,a;c8,4,da,27b,63f,8;a3,4,c4,295,640,6;9f,d,c3,299,641,3;9d,13,c1,29e;9b,18,bc,2a5;99,2c9;97,2cc;95,2cf;93,2d2;90,2d6;8e,2d9,36e,14;8b,2dd,369,1a;87,2fc;81,303,39e,1;7a,30a,39d,4;74,311,39c,5;6f,316,39b,7;66,31f,39a,8;55,333,39a,8;4f,33e,399,9;4b,344,398,a;49,347,398,b;48,348,397,c,3a5,5;46,34d,395,16;44,367;43,368;42,369;41,36a;40,36b;3f,36d;3f,36d;3e,36f;3d,376;3d,379;3c,37b;3c,37c;3c,37e;3c,380;3b,382;3b,384;3b,385;3b,386;3b,388;3a,38b;3a,38f;3a,393;3a,398;3a,3a0,4e5,18;3a,3a7,4d9,2e;3b,3ac,468,3,478,6,4ce,51;3b,3b1,465,8,475,c,4c4,62;3b,3b4,462,c,473,10,4bb,6f;3b,3b7,460,f,471,14,4b5,77;3b,3bc,45d,2c,4a9,86,55a,4;3b,3c1,45a,d9,556,b;3c,3cc,457,e1,553,10;3c,3e9,453,ec,54f,16;3c,1f,5c,3d7,44f,118;3c,1d,5c,3e2,44a,11e;3c,10,4e,6,5b,50f;3c,f,4e,4,5b,511;3c,f,4e,4,5b,513;3c,e,4e,4,5a,516;3c,e,4e,4,5a,518;3c,e,4e,4,59,51a;3c,e,4e,4,59,51d;3d,c,4f,3,59,520;3d,c,4f,3,58,52d;3d,c,4f,3,58,544;3d,b,4f,4,58,54a;3d,b,4f,4,57,54d;3d,b,4f,4,57,54f;3d,a,4f,4,57,551;3e,9,4f,4,56,554;3e,9,4f,4,56,240,298,314;3e,8,50,3,55,240,29a,313;3e,8,50,3,55,23e,29b,313;3f,7,50,4,55,23d,29b,314;40,5,50,240,29c,315;41,3,50,23f,29d,315;50,23e,29d,316;50,19b,1ec,a0,29e,316;50,198,1ed,9e,29e,317;51,15e,1b3,2c,1ed,9c,29f,317;51,15b,1b4,20,1ee,99,29f,318;51,159,1b4,1d,1ee,97,2a0,317;51,157,1b4,1b,1ef,72,262,21,2a0,318;52,155,1b4,a,1ef,71,264,1d,2a1,317;52,153,1b3,a,1f0,6f,266,17,2a2,316;52,151,1b3,a,1f1,6e,26c,b,2a3,315;53,14e,1b2,a,1f2,6c,2a4,314;55,14a,1b1,b,1f3,6b,2a5,2b,2d9,2df;57,146,1b1,a,1f4,69,2a6,28,2d9,2df;57,144,1b1,a,1f6,67,2a7,25,2da,2de;57,a,62,137,1b0,a,1f8,64,2a9,21,2da,2de;57,a,66,131,1af,b,1f9,62,2ac,1c,2db,2dd;57,a,69,12b,1ae,b,1fb,60,2ae,17,2db,2dd;57,a,6d,123,1ad,b,1fc,5e,2b1,12,2db,2dd;57,a,6e,122,1ac,c,1fd,5d,2db,2dd;57,a,6e,121,1ac,b,1fe,5b,2db,2dd;57,a,6e,121,1ab,c,1ff,5a,2db,48,325,293;57,a,6e,121,1ab,b,1ff,59,2db,49,326,292;57,b,6e,120,1a9,d,1ff,59,2db,4e,32a,28e;57,b,6e,120,1a5,10,1ff,59,2db,38,31e,29a;57,b,6e,120,1a4,10,200,57,2db,37,321,297;57,b,6e,120,1a4,f,200,57,2db,36,322,296;57,c,6e,121,1a3,e,200,56,2dc,34,323,295;57,c,6e,124,19d,13,201,55,2dc,33,325,293;57,c,6d,142,201,55,2dc,32,325,293;57,c,6d,140,202,53,2dd,30,326,292;58,c,6c,140,202,53,2de,2e,326,292;58,c,6c,13f,202,53,2df,2c,327,291;58,c,6c,13f,203,43,24a,a,2e0,2a,327,291;58,c,6b,13e,203,41,24c,7,2e1,1a,2fc,d,327,291;58,d,6a,13e,203,40,24f,3,2e2,16,2ff,a,328,290;59,c,6a,f,7e,109,18c,1a,204,3e,2e3,14,300,8,328,290;59,c,69,10,7e,a,8a,fc,18f,9,19c,7,205,3d,2e3,13,302,5,329,28f;59,d,68,11,7f,9,8f,f6,193,c,206,3b,2e3,12,303,3,329,28f;59,20,7f,9,90,f4,207,39,2e3,12,329,28f;5a,1f,7f,9,91,f2,208,38,2e4,10,32a,28d;5a,1f,7f,a,91,f1,209,36,2e4,10,32b,28c;5b,1f,80,9,91,ef,20e,31,2e4,f,32c,28b;5b,1f,80,9,91,a,9d,e2,1be,2,20f,2f,2e4,f,32d,28a;5c,1e,80,a,91,a,9e,df,1bd,4,20f,2f,2e5,d,330,287;5c,1e,81,9,91,a,9f,dd,1bd,5,210,2d,2e5,c,335,281;5d,1d,81,9,91,a,a0,da,1bc,7,210,2c,2e5,c,337,27f;5e,1c,81,a,91,a,a1,d3,1bc,8,211,2b,2e6,b,33a,27c;5f,c,6d,d,82,9,91,a,a1,bb,15d,1,160,13,1bc,8,211,2a,2e6,a,33e,278;61,8,6d,d,82,9,91,a,a1,ba,167,9,1bc,9,212,28,2e6,a,340,275;6d,d,82,a,91,a,a1,ba,1bc,9,212,27,2e7,8,343,272;6d,d,82,a,91,a,a2,b9,1bc,a,212,26,2e7,7,344,271;6d,d,83,a,91,a,a2,b9,1bc,b,213,24,2e7,6,345,270;6d,d,83,a,91,a,a3,ba,1bc,c,213,23,2e8,4,345,26f;6d,d,83,b,91,a,a4,bc,1bc,d,214,21,2e9,2,346,26e;6d,d,84,a,91,a,a6,bd,1bb,11,214,20,346,26e;6d,d,84,b,91,a,aa,bb,1b5,25,215,1c,347,26c;6d,d,85,b,91,a,ae,b8,181,5f,216,1a,347,26c;6d,d,85,16,b1,b6,177,70,216,19,347,266,5af,3;6d,d,85,16,b3,b5,173,77,216,19,347,266;6d,d,86,15,b3,b6,16e,7f,217,18,347,265;6d,d,86,15,b2,13d,217,18,347,14,35c,250;6d,d,87,14,b2,13f,217,18,348,13,35d,24f;6d,d,87,14,b2,140,218,17,348,7,350,b,35d,24e;6d,d,88,13,b2,142,218,17,348,7,350,b,35e,24d;6d,d,88,13,b1,145,219,16,348,6,350,b,35f,24b;6e,c,89,12,b0,149,219,16,348,6,350,b,360,249;6e,c,8a,11,ae,14c,219,15,349,5,351,a,361,246;6e,c,8a,13,ad,14e,21a,14,34a,3,351,9,361,245;6f,b,8b,13,ab,151,21a,14,351,9,362,243;6f,b,8b,17,a9,154,21b,12,352,7,362,243;6f,b,8c,171,21b,12,353,5,363,242;6f,b,8d,16f,21c,11,354,3,364,241;6f,5,76,3,8e,16e,21c,11,365,240;6f,5,77,1,8f,2a,bb,141,21d,f,366,23f;70,2,90,28,bb,140,21d,f,366,23f;91,26,bb,140,21d,f,367,23e,642,7;91,25,bb,140,21e,e,368,23c,63d,78,705,6;91,24,bb,140,21e,d,369,23b,63a,8d,700,1a;91,23,bb,140,21f,c,36a,23a,639,e4;91,20,bc,13f,21f,c,36b,239,638,e7;91,1f,bc,13f,220,b,36c,237,637,e9;91,a,9f,e,bc,13f,221,a,36d,237,637,ea;91,a,bc,13f,221,9,36f,234,636,ec;91,a,bc,13f,222,8,370,233,636,ed;91,a,bd,13e,223,7,371,232,635,ef;91,a,bd,13e,223,6,372,231,635,f0;91,a,bd,13e,225,3,373,1e4,558,b,565,3d,635,f0;91,a,be,13c,374,1d5,566,3c,635,f1;91,a,be,13b,374,1d2,566,3c,634,f2;91,b,be,12c,1f7,1,374,1cf,567,3a,634,f3;91,b,be,12a,374,1cc,568,39,634,f3;92,a,bf,128,375,1c8,578,28,635,f2;92,a,bf,128,375,1c5,579,27,635,f3;92,a,bf,126,376,1c1,57b,24,635,f3;92,a,c0,10e,1d1,13,376,1bf,57c,22,635,f3;92,a,c0,10c,1d4,10,377,1bc,57d,20,635,f3;92,a,c0,109,1d7,c,377,1ba,57e,1d,635,f3;92,a,c0,108,378,19a,518,16,57e,1c,636,f3;92,a,c0,107,378,195,524,8,57e,a,58c,1,591,8,636,f3;92,b,c0,105,378,191,57f,8,636,f3;92,b,c1,103,379,49,3c7,24,3f4,b0,4ac,36,4e4,1,4e9,1e,57f,7,636,f3;93,a,c1,102,379,25,3a3,1b,3cb,1e,3f3,ae,4b4,11,4ce,f,4eb,1a,581,1,636,f3;93,a,c1,100,379,24,3ac,f,3d8,8,3f2,aa,4b9,8,4ee,14,636,f3;93,a,c1,ff,37a,20,3ad,a,3f1,a9,4f0,10,636,f3;93,b,c1,fe,37a,1e,3ae,9,3ef,11,402,69,470,28,636,f3;93,b,c1,fc,37a,1d,3ae,a,3ed,11,403,68,473,23,635,f3;94,a,c1,f8,37a,1c,3ae,a,3ea,13,406,64,476,1e,636,f2;94,a,c2,f0,37a,1b,3ae,c,3e8,14,409,60,479,19,636,f2;94,b,c2,ee,37a,1b,3af,c,3e5,16,409,5f,47c,14,637,f1;94,b,c2,ec,37a,1a,3af,12,3c3,3,3cf,2b,409,5d,47e,e,638,ef;94,b,c2,eb,37a,1a,3b0,48,40a,5b,485,2,639,ee;95,a,c2,e9,37a,19,3b0,47,40a,57,63b,ec;95,b,c2,e7,37a,19,3b1,44,40b,50,63c,ea;95,b,c3,e5,37a,19,3b2,42,40c,47,63d,e9;96,a,c3,e3,37a,19,3b3,3f,40d,32,445,b,63d,e9;96,9,c3,e2,37b,17,3b5,3c,40d,31,63d,d6,716,10;96,8,c4,df,37b,17,3b6,38,40e,30,63d,d6,717,f;96,8,c4,de,37b,16,3b9,30,40e,2f,63d,d6,718,e;96,8,c4,dd,37c,15,3bb,2a,40e,2f,63d,d5,719,c;96,8,c4,dc,37c,15,3c0,1e,40f,2d,63c,d6,719,c;96,8,c5,da,37c,15,40f,2d,63c,d5,71a,b;96,8,c5,da,37c,14,40f,2d,63c,d5,71a,b;96,8,c5,da,37c,14,410,2c,63c,d5,71b,a;97,7,c6,d8,37c,14,410,2b,63c,d4,71b,a;97,4,c6,d8,37c,13,410,2b,63c,11,64f,c1,71c,9;97,3,c6,d8,37c,13,410,2b,63c,e,650,c0,71c,9;c7,d7,37c,13,411,2a,63c,e,650,bf,71c,9;c7,d7,37c,13,411,29,63c,d,650,bf,71d,7;c7,d7,37c,12,411,29,63c,d,650,bf,71d,7;c5,d9,37c,12,412,28,63c,c,650,bf,71e,6;c2,dc,37c,12,412,27,63c,c,650,bf,71e,6;c1,dc,37c,12,413,26,63d,b,650,bf,720,2;c0,dd,37c,12,413,26,63d,a,650,c0;c0,dc,37c,12,413,26,63d,a,64f,c1;c0,dc,37b,12,413,26,63d,9,64f,c1;c0,dc,37b,12,413,26,63d,9,64f,c1;c0,db,37b,12,414,25,63d,8,64f,c1;c0,db,37a,13,414,25,63d,8,64f,c2;c0,da,37a,13,414,25,63d,7,64f,c2;c1,d8,37a,13,414,24,63e,6,64f,c2;c2,d5,37a,13,414,24,63e,5,64f,c2;c4,d1,37a,13,414,24,640,1,660,b2;c5,cf,379,14,414,24,662,b0;c7,cb,379,14,414,24,668,aa;c8,c7,379,14,414,24,66a,a8;c9,c1,379,14,414,24,66c,a6;c9,bd,379,14,414,24,66d,a5;ca,b8,378,15,414,25,670,a3;cb,b3,378,16,415,24,673,94,708,b;cc,ad,376,18,415,24,674,93,709,a;cc,ad,375,19,415,24,675,92,709,a;cd,ab,375,19,415,24,678,8e,709,a;cd,a8,375,1a,415,24,67b,8b,709,b;ce,a5,374,1b,415,24,67e,88,709,b;ce,a2,374,1b,416,24,680,85,70a,a;ce,9f,373,1c,416,24,682,83,70a,a;ce,9c,373,1d,416,24,682,82,70a,a;cf,9a,372,1e,416,24,683,80,70a,a;cf,99,372,1e,416,25,684,7f,70a,b;cf,99,371,1f,416,25,685,7d,70a,b;d0,98,371,1f,416,25,686,7b,70a,b;d0,98,328,11,371,20,416,25,687,7a,70a,b;d1,96,31a,2d,370,27,416,26,688,79,70b,a;d1,96,307,9a,416,26,68a,77,70b,a;d2,95,2fc,ab,416,27,442,25,68a,77,70b,a;d2,94,2fa,b1,416,5e,68b,77,70b,a;d3,93,2f7,ba,416,64,68b,78,70b,a;d4,92,2f6,c0,416,69,68a,7a,70b,b;d4,92,2f4,c6,416,75,68a,7a,70b,b;d5,91,2f3,110,416,78,689,7b,70b,b;d6,90,2f2,117,416,7a,688,7c,70b,b;d6,91,2f0,1a1,688,7c,70b,b;d6,91,2ef,1a3,687,7d,70b,b;d5,93,2ee,1a5,686,7d,70b,b;d3,95,2ec,1a8,686,7d,70b,b;d1,97,2eb,1aa,686,7c,70b,b;d0,99,2e9,1ad,686,7c,70b,b;cf,9a,2e8,1ae,686,7b,70a,c;cd,9d,2e6,1b0,687,7a,70a,c;cc,9e,2e4,1b3,687,79,70a,c;cb,a0,2e1,1b6,687,79,70a,c;ca,a4,2e0,1b7,688,77,70a,c;c9,a8,2df,1b9,688,77,70a,c;c8,ab,2de,1ba,688,76,70a,c;c7,ad,2dd,1bc,689,75,709,d;c6,af,2dd,1bc,689,74,709,d;c6,b0,2dd,1bc,689,74,709,c;c5,b2,2de,1bc,68a,73,709,c;c5,b3,2de,1bc,68a,73,708,d;c4,b5,2df,1bb,68b,72,708,d;c4,b7,2df,1bc,68b,72,708,d;c3,b9,2df,1bc,68b,72,708,c;c2,bb,2df,1bc,68b,72,707,d;c2,bc,2df,1bc,68b,72,707,d;c2,bd,2df,1bc,68b,72,706,e;c1,bf,2df,1bc,68b,72,706,d;c1,c0,2df,1bc,68b,72,705,e;c0,c1,2df,1bc,68b,72,704,f;c0,c1,2df,1bc,68b,71,703,f;c0,c2,1f9,6,2df,1bc,68b,71,703,f;bf,c3,1f6,9,2df,1bc,68b,71,702,f;bf,c3,1f3,d,2de,1bd,68b,71,700,11;bf,c3,1f1,f,2df,1bc,68b,71,6ff,11;bf,c3,1f0,11,2df,1bc,68b,84;bf,c3,1f0,11,2df,1bc,68b,84;bf,c4,1f0,11,2e0,1bb,68b,83;bf,c4,1f0,11,2e0,1bb,68b,82;bf,c4,1f0,11,2e0,1bb,68b,81;bf,c4,1f1,10,2e0,1bb,68b,80;c0,c3,1f1,11,2e0,1ba,68b,7f;c0,c4,1f1,13,23e,5,2e0,1ba,68b,7d;c0,c4,1f2,15,23e,7,2e0,1b9,68b,7b;c0,c4,1f3,16,23d,a,2e0,1b5,68b,7a;c0,c5,1f4,17,23c,d,2e0,1b6,68b,78;c0,c5,1f4,19,23c,f,2e0,1b6,68b,75;bd,c8,1f4,19,23b,12,2e1,1b6,68b,72;bb,cb,1f4,1a,23b,14,2e1,1b6,68b,71;b9,cd,1f3,1c,23a,17,2e2,1b5,68a,72;b8,d3,1f3,1d,239,1a,2e2,1b5,68a,72;b6,d8,1f3,1d,239,1c,2e2,1b5,68a,73;b5,e4,1d9,4,1f3,1e,238,1f,2e3,1b4,68a,73;b4,ea,1d8,7,1f2,1f,238,21,2e2,1b5,689,74;b3,ee,1d8,7,1f2,20,237,24,2e1,1b6,689,74;b2,f1,1d7,8,1f2,20,236,27,2df,1b8,687,76;b1,f3,1d7,8,1f2,21,236,29,2c8,6,2de,1b9,683,7a;b0,f5,1d6,9,1f2,21,235,2c,2c6,b,2dc,1bb,682,7b;ae,f8,1d6,9,1f2,21,235,2e,2c5,e,2db,1bd,681,7c;ab,fc,1d5,a,1f2,22,234,31,2c0,1d8,680,7d;a7,101,1d5,9,1f1,23,233,35,2bb,1de,680,7e;a3,105,1d5,9,1f1,23,233,37,2ba,1e0,67f,80;a0,109,1d4,9,1f1,23,232,3a,28e,4,2b9,1e3,67e,81;9e,10b,1d4,8,1f1,24,232,3c,28d,8,2b6,1e7,58b,1,58d,1,67d,83;9c,10d,1d3,8,1f2,23,231,3f,28b,c,2b4,1ea,58a,5,590,17,67a,86;9a,110,1d3,7,1f2,23,230,42,28a,10,2b0,1ee,588,27,600,16,678,89;99,111,1d2,7,1f2,24,230,44,289,14,2aa,1ec,499,10,587,30,5fa,1f,674,8d;99,112,1d2,7,1f2,24,22f,47,287,19,2a7,f,2b9,1f5,585,39,5f5,26,672,8f;98,113,1d1,8,1f3,23,22f,49,286,2f,2b7,1f9,57f,45,5f0,2e,671,8f;98,113,1d1,7,1f4,23,22e,4c,285,22d,534,1a,57b,4e,5eb,37,66d,93;98,12a,1d1,7,1f4,23,22e,4f,284,231,51b,42,575,b1,66b,95;97,138,1d0,8,1f5,23,22d,28a,4dc,d,505,12f,648,b7;97,141,1f5,23,22c,28e,4d6,229;97,141,1f6,23,22c,291,4d3,22b;97,141,1f0,29,22b,4d3;97,142,1ee,2c,22b,4d3;98,143,1ec,511;98,145,1eb,513;98,149,1e7,517;99,666;99,666;9a,665;9b,665;9b,665;9c,665;9d,664;9d,664;9e,664;9e,664;9a,669;9a,669;9b,669;9b,669;9a,66b;9a,66b;99,66c;99,66d;98,66e;97,670;96,671;96,671;95,673;94,674;93,676;93,676;92,678;91,679;90,67a;90,67b;8f,67c;8f,67d;8e,67e;8e,67e;8d,680;8d,680;8c,682;8c,682;8b,683;8b,684;8b,684;8a,686;8a,686;8a,686;89,688;89,688;89,688;88,68a;88,68a;87,68b;87,68c;86,68d;86,68d;85,68f;85,68f;85,690;84,691;84,692;83,693;83,694;83,694;83,694;83,695;83,695;83,694;83,694;84,692;;;;;;;;;;;;;;;;;;;;;;';

  const img = {}, ADLAR = ['gok', 'uzak', 'yakin', 'magara', 'arazi'];
  const SURUM = 2;   // resim değişince artır (tarayıcı önbelleği eskisini göstermesin)
  let yukleniyor = null, hazir = false;

  // Resimleri önceden yükler. Oyunu başlatmadan önce bitmiş olmalı.
  function yukle(klasor = 'assets/maps/hurda-gezegeni/') {
    if (yukleniyor) return yukleniyor;
    yukleniyor = Promise.all(ADLAR.map(ad => new Promise((ok, hata) => {
      const i = new Image(); i.decoding = 'async';
      i.onload = () => { img[ad] = i; ok(); };
      i.onerror = () => hata(new Error('Harita resmi yüklenemedi: ' + ad));
      i.src = klasor + ad + '.png?v=' + SURUM;
    }))).then(() => { hazir = true; });
    return yukleniyor;
  }

  // Çarpışma maskesi: solid[y*W+x] = 1 toprak
  function uret(solid) {
    solid.fill(0);
    const rows = RLE.split(';');
    for (let y = 0; y < H; y++) {
      if (!rows[y]) continue;
      const v = rows[y].split(',').map(s => parseInt(s, 16));
      for (let i = 0; i < v.length; i += 2) solid.fill(1, y * W + v[i], y * W + v[i] + v[i + 1]);
    }
  }

  // Arazi tuvali: kaynak çözünürlüğünde tutulur (yakınlaşınca keskin kalsın).
  // Döndürülen tctx'e dünya koordinatlarında çizilebilir (patlama oyukları için).
  function tuval(ad) {
    const k = 1 / OLCEK, cv = document.createElement('canvas');
    cv.width = Math.round(W * k); cv.height = Math.round(H * k);
    const c = cv.getContext('2d');
    c.drawImage(img[ad], 0, Math.round(OY * k));
    c.setTransform(k, 0, 0, k, 0, 0);
    return { cv, c };
  }
  function arazi() { const t = tuval('arazi'); return { terr: t.cv, tctx: t.c }; }

  // Mağara arka duvarı: arazinin ARKASINA, dünya koordinatlarında (0,0,W,H) çizilir.
  // Ayrı tuvaldedir; patlamalar araziyle birlikte bunu da oyar (arkada gökyüzü görünür)
  function magara() { const t = tuval('magara'); return { mterr: t.cv, mtctx: t.c }; }

  // Paralaks şeridi: yatayda aynalanarak döşenir (kenarları birleşmese bile dikiş görünmez)
  function serit(ctx, im, kirp, vw, vh, kam, f, ust) {
    const h = vh * 1.12, sc = h / KAYNAK_Y, w = im.width * sc;
    const y = vh * ust - (kam.y - H / 2) * kam.z * f * 0.4 + kirp * sc;
    const off = ((kam.x * kam.z * f) % (2 * w) + 2 * w) % (2 * w);
    for (let i = -1, x = -off; x < vw; i++, x += w) {
      const ayna = ((Math.round((x + off) / w)) & 1) === 1;
      ctx.save(); ctx.translate(x + (ayna ? w : 0), y); ctx.scale(ayna ? -1 : 1, 1);
      ctx.drawImage(im, 0, 0, w, im.height * sc); ctx.restore();
    }
    const alt = y + im.height * sc;
    if (alt < vh) { ctx.fillStyle = f > 0.2 ? '#29333a' : '#5f6377'; ctx.fillRect(0, alt - 1, vw, vh - alt + 1); }
  }

  // Ekran koordinatlarında arka plan (kam: oyunun cam nesnesi { x, y, z })
  function arkaPlan(ctx, vw, vh, kam) {
    const g = img.gok, sc = Math.max(vw / g.width, vh / g.height);
    const gx = (vw - g.width * sc) / 2 - (kam.x - W / 2) * kam.z * 0.02, gy = (vh - g.height * sc) / 2 - (kam.y - H / 2) * kam.z * 0.02;
    ctx.drawImage(g, gx - 20, gy - 10, g.width * sc + 40, g.height * sc + 20);
    serit(ctx, img.uzak, UZAK_KIRP, vw, vh, kam, 0.12, 0.02);
    serit(ctx, img.yakin, YAKIN_KIRP, vw, vh, kam, 0.28, 0.12);
  }

  // Bataklık: dünya koordinatlarında, su çizgisinden aşağısı. Kodla çizilir:
  // dalgalı yüzey, kabarcıklar, yosun lekeleri ve dalgayla sallanan hurdalar (yarısı suyun içinde).
  const CIZGI = '#17140f';
  const hs = (a, b) => { const v = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return v - Math.floor(v); };
  const HURDA = [
    function pet(c, h) {   // yan yatmış plastik şişe
      c.fillStyle = 'rgba(196,228,236,.92)';
      c.beginPath(); c.roundRect(-14, -5.5, 21, 11, 4); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(7, -4); c.quadraticCurveTo(11, -2.5, 11, -2.2); c.lineTo(11, 2.2); c.quadraticCurveTo(11, 2.5, 7, 4); c.fill(); c.stroke();
      c.fillStyle = ['#d8423a', '#3c7fd0', '#3aa35a', '#f1efe6'][Math.floor(h * 4)];
      c.beginPath(); c.roundRect(11, -3, 4, 6, 1); c.fill(); c.stroke();
      c.fillStyle = ['#e8533f', '#2f9ad8', '#f0c23b'][Math.floor(h * 7) % 3];
      c.fillRect(-8, -5.5, 8, 11); c.strokeRect(-8, -5.5, 8, 11);
      c.strokeStyle = 'rgba(255,255,255,.75)'; c.beginPath(); c.moveTo(-12, -3); c.lineTo(5, -3); c.stroke();
    },
    function telefon(c, h) {
      c.fillStyle = '#2a2d33'; c.beginPath(); c.roundRect(-11, -6, 22, 12, 3); c.fill(); c.stroke();
      c.fillStyle = h > 0.5 ? '#5f8fb4' : '#4a6f8c'; c.fillRect(-8.5, -4, 17, 8);
      c.strokeStyle = 'rgba(230,240,255,.8)'; c.lineWidth = 1; c.beginPath(); c.moveTo(-3, -4); c.lineTo(0, -0.5); c.lineTo(-2, 4); c.moveTo(0, -0.5); c.lineTo(5, 1); c.stroke();
    },
    function klavye(c) {
      c.fillStyle = '#d3cdbd'; c.beginPath(); c.roundRect(-18, -5, 36, 10, 2); c.fill(); c.stroke();
      c.fillStyle = '#8f8a7c';
      for (let r = 0; r < 2; r++) for (let k = 0; k < 8; k++) c.fillRect(-15.5 + k * 4, -3 + r * 3.4, 2.6, 2.2);
    },
    function monitor(c, h) {
      c.fillStyle = '#c7bc9f'; c.beginPath(); c.roundRect(-12, -10, 24, 19, 3); c.fill(); c.stroke();
      c.fillStyle = '#34444c'; c.beginPath(); c.roundRect(-8.5, -7, 17, 12, 2); c.fill(); c.stroke();
      c.strokeStyle = 'rgba(160,210,220,.55)'; c.beginPath(); c.moveTo(-6, -5); c.lineTo(-2, -5); c.stroke();
      if (h > 0.5) { c.strokeStyle = 'rgba(230,240,255,.8)'; c.lineWidth = 1; c.beginPath(); c.moveTo(2, -7); c.lineTo(-1, -1); c.lineTo(3, 5); c.stroke(); }
    },
    function kart(c) {   // yeşil devre kartı
      c.fillStyle = '#2f7a43'; c.beginPath(); c.rect(-15, -4.5, 30, 9); c.fill(); c.stroke();
      c.strokeStyle = '#d9b54a'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(-13, -1.5); c.lineTo(-4, -1.5); c.lineTo(-2, 1.5); c.lineTo(12, 1.5); c.moveTo(-13, 2); c.lineTo(-7, 2); c.stroke();
      c.fillStyle = '#1d1f22'; c.fillRect(1, -3.5, 7, 4.5);
    },
  ];
  function su(ctx, t, x0, x1, suY) {
    const dalga = x => suY + Math.sin(x * 0.021 + t * 1.5) * 2.6 + Math.sin(x * 0.053 - t * 1.05) * 1.4;
    const a = Math.floor(x0 / 10) * 10 - 10, b = x1 + 10;
    const yuzey = (alt) => { ctx.beginPath(); ctx.moveTo(a, alt); for (let x = a; x <= b; x += 10) ctx.lineTo(x, dalga(x)); ctx.lineTo(b, alt); ctx.closePath(); };
    const govde = ctx.createLinearGradient(0, suY - 4, 0, suY + 70);
    govde.addColorStop(0, '#4f9a86'); govde.addColorStop(0.3, '#2c6b62'); govde.addColorStop(1, SU_ALT);
    ctx.fillStyle = govde; yuzey(suY + 1200); ctx.fill();
    // Yavaşça sürüklenen yosun lekeleri
    ctx.fillStyle = 'rgba(160,214,120,.30)';
    for (let i = Math.floor((x0 - 200) / 160); i * 160 < x1 + 200; i++) {
      const lx = i * 160 + hs(i, 3) * 90 + ((t * 5 + hs(i, 4) * 160) % 160), ly = suY + 10 + hs(i, 5) * 22;
      ctx.beginPath(); ctx.ellipse(lx, ly, 16 + hs(i, 6) * 18, 2.2 + hs(i, 7) * 2, 0, 0, Math.PI * 2); ctx.fill();
    }
    // Yükselip yüzeyde patlayan kabarcıklar
    ctx.strokeStyle = 'rgba(200,240,170,.75)'; ctx.lineWidth = 1.2;
    for (let i = Math.floor(x0 / 70) - 1; i * 70 < x1 + 70; i++) {
      const f = (t * (0.35 + hs(i, 8) * 0.3) + hs(i, 9)) % 1, bx = i * 70 + hs(i, 10) * 60;
      if (f < 0.85) { ctx.beginPath(); ctx.arc(bx + Math.sin(f * 9) * 1.5, dalga(bx) + 4 + (1 - f / 0.85) * 34, 1.3 + f * 1.6, 0, Math.PI * 2); ctx.stroke(); }
      else { const r = 3 + (f - 0.85) * 40; ctx.beginPath(); ctx.ellipse(bx, dalga(bx) + 1, r, r * 0.3, 0, 0, Math.PI * 2); ctx.stroke(); }
    }
    // Yüzen hurdalar: dalgayla iner kalkar, eğimine göre yatar
    ctx.lineJoin = 'round';
    for (let i = Math.floor(x0 / 115) - 1; i * 115 < x1 + 115; i++) {
      if (i < 0 || i * 115 > W || hs(i, 11) < 0.35) continue;
      const h = hs(i, 12), tur = Math.floor(hs(i, 13) * 100) % HURDA.length;
      const hx = i * 115 + 20 + h * 70 + Math.sin(t * 0.4 + i) * 5;
      const egim = Math.atan2(dalga(hx + 10) - dalga(hx - 10), 20) + (hs(i, 14) - 0.5) * 0.5;
      ctx.save(); ctx.translate(hx, dalga(hx) + 2 + Math.sin(t * 2.1 + i * 1.7) * 0.8); ctx.rotate(egim); ctx.scale(1.35, 1.35);
      if (hs(i, 15) > 0.5) ctx.scale(-1, 1);
      ctx.strokeStyle = CIZGI; ctx.lineWidth = 1.3;
      HURDA[tur](ctx, h); ctx.restore();
    }
    // Hurdaların alt yarısı suyun içinde kalsın: bulanık su katmanı yeniden
    ctx.save(); ctx.globalAlpha = 0.6; ctx.translate(0, 2.5); yuzey(suY + 1200); ctx.fillStyle = govde; ctx.fill(); ctx.restore();
    // Kalın çizgi film dış hattı + parlak kenar
    ctx.beginPath(); for (let x = a; x <= b; x += 10) x === a ? ctx.moveTo(x, dalga(x)) : ctx.lineTo(x, dalga(x));
    ctx.strokeStyle = CIZGI; ctx.lineWidth = 3; ctx.stroke();
    ctx.beginPath(); for (let x = a; x <= b; x += 10) x === a ? ctx.moveTo(x, dalga(x) + 3) : ctx.lineTo(x, dalga(x) + 3);
    ctx.strokeStyle = 'rgba(176,232,190,.8)'; ctx.lineWidth = 1.6; ctx.stroke();
  }

  return {
    ad: 'Hurda Gezegeni', W, H,
    get hazir() { return hazir; },
    yukle, uret, arazi, magara, arkaPlan, su,
    tema: { oyuk: 'rgba(22,16,14,.78)', toz: ['#2f6b3e', '#7fd3b0', '#c98a3a', '#d9d2c0', '#5b5148', '#9aa0a8'] },
  };
})();
