/* ==========================================================================
   HARİTA: Hurda Gezegeni (Photoshop katmanlarından)
   Atık PCB dağları, kablolar, gömülü cihazlar; elle çizilmiş 6 katman.

   Bu dosya kendi başına çalışır. Plastik Evrim Gezegeni haritasının yerine
   geçmez; oyuna ikinci bir harita seçeneği olarak eklenir (ENTEGRASYON.md).

   Katmanlar (assets/maps/hurda-gezegeni/):
     gok.png    ekrana sabit gökyüzü
     uzak.png   uzak hurda siluetleri (yavaş paralaks)
     yakin.png  yakın hurda siluetleri (biraz daha hızlı paralaks)
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
  const RLE = ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;616,3;610,12;60c,1c;607,2c;603,3b;5e3,74;5cb,b8;5ca,c0;5c9,c2;5c9,c3;5c8,c5;5c8,c5;5c8,c5;5c8,c5;5c8,c5;5c7,c6;5c7,c6;5c7,c6;5c7,c6;5c7,c6;5c7,c6;5c7,c6;5c8,c4;5c8,c4;5c8,c4;5c8,c4;5c8,c4;5c8,c4;5c8,c4;5c9,c3;5c9,c3;5c9,c3;5c9,c2;5c9,c2;5c9,c2;5c9,c2;5ca,c1;5ca,c0;5ca,c0;5ca,c0;5cb,bf;5cb,bf;5d0,ba;5d1,b9;5d1,b0,682,8;5d1,af,683,6;5d1,af,684,5;5d1,af,686,1;5d2,ae;5d2,ad;5d2,ad;5d3,ac;5d3,ab;5d3,ab;5d4,aa;5d4,aa;5d4,a9;5d5,a8;5d5,a8;5d5,a7;5d6,a6;5d6,a6;5d6,a5;5d6,a5;5d7,a4;5d7,a3;5d7,a3;5d7,a3;5d7,a2;5d7,a2;5d7,a2;5d7,a1;5d8,9f;5d8,9e;5d8,9d;5d8,9c;5d8,9a;5d8,99;5d8,98;5d8,96;5d8,94;5d8,94;5d8,95;5d8,96;5d8,97;5d8,98;5d8,99;5d8,99;5d8,9a;5d8,9a;5d8,18,5f2,80;5d8,18,5f3,7f;5d9,17,5f3,7f;5d9,17,5f4,7e;5d9,18,5f5,7d;5d9,18,5f5,7d;5d9,15,5f6,7c;5d9,15,5f6,7c;5d9,15,5f7,71,66d,4;5d9,15,5f7,6f;5d9,14,5f7,6d;5d9,14,5f7,6b;5d9,14,5f7,6a;5d9,14,5f6,6a;5d9,13,5f6,69;223,1c,5d9,13,5f5,6a;220,2b,5d9,13,5f5,69;21f,35,5d9,13,5f4,6a;21d,3f,5da,12,5f4,69;21c,47,5da,9,5e4,9,5f3,6a;21b,4d,5da,8,5e4,9,5f3,69;219,56,5da,7,5e5,8,5f4,68;218,5f,5db,6,5e5,9,5f5,67;216,6c,5dc,4,5e5,9,5f5,66;215,7a,2b2,b,5e6,9,5f7,64;213,88,2ac,14,5e6,9,5f8,63;212,af,5e7,9,5f9,62;210,b4,5e7,9,5fb,60;20e,b8,5e8,9,5fc,5f;20c,bc,5e8,a,5fe,5d;20a,c0,5e9,a,5ff,5c;209,c4,5e9,b,600,5a;207,c9,5ea,b,601,59;205,d3,5ea,d,601,58;203,de,5eb,e,5ff,5a;200,e5,5ec,6c;1fe,e9,5ed,6b;1fb,ee,5ed,6a;1fa,f0,5ee,69;1f7,f5,5f0,67;1f4,f9,5f1,15,608,4e;1f1,fe,5f3,11,609,4d;1ed,103,5f5,d,60a,4b;1eb,106,5fa,4,60b,49;1e9,109,60c,47;1e6,10d,60d,45;1e2,112,60d,44;1df,116,60e,42;1dc,11a,60e,41;1da,11d,60f,40;1d8,11f,60f,3f;1d5,124,610,3d;1d2,128,610,3d;1cf,12c,611,3b;1cc,130,611,3b;1c9,134,612,39;1c7,137,612,39;1c3,13d,613,38;1c0,141,613,37;1bc,146,614,36;1b9,14b,614,35;1b5,150,615,34;1b3,153,615,34;1af,158,616,32;1aa,15f,616,22,63a,e;1a3,168,617,20,63b,c;19a,172,617,1f,63b,c;197,177,618,1e,63c,b;196,179,618,1d,63c,a;194,17c,619,1c,63d,9;193,17f,619,1b,63d,8;191,182,61a,1a,63e,7;17d,3,18f,186,61a,1a,63f,5;178,19e,61a,19,640,3;176,1a1,61b,18;171,1a8,61b,17;170,1ab,61c,16;16f,1ad,61c,16;16e,1b0,61d,14;16d,1b2,61d,14;16c,1b4,61e,12;16b,1b7,61e,12;16a,1b9,61f,10;16a,1bb,61f,f;168,1be,620,e;167,1c0,620,d;166,1c3,620,c;165,1c5,621,b;163,1c9,621,a;161,1cc,622,8;160,1cf,622,7;15e,1d2,623,5;15c,1d5,624,3;158,1db;148,1ed;146,1f0;145,1f3;143,1f6;142,1f8;13e,1fe;139,205;133,20c;e5,4,12c,215;e4,9,125,21e;d7,3,e3,d,121,223;d7,5,e3,13,117,22f;d6,8,e2,266;d6,b,e2,268;d7,275;d7,277;d8,278;d9,279;c8,4,d9,27c;a3,3,c4,294;9f,d,c3,299;9d,13,c1,29e;9b,18,bc,2a5;99,2c9;97,2cc;95,2cf;93,2d2;90,2d6;8f,2d7,36e,14;8b,2dd,369,1a;86,2fe;81,303;7a,30a,39d,4;73,312,39c,5;6f,316,39b,7;66,31f,39a,8;55,333,39a,8;4f,33e,399,9;4b,344,398,a;49,347,398,b;48,348,397,c,3a5,5;46,34d,395,16;44,367;43,368;42,369;41,36a;40,36b;3f,36d;3f,36d;3e,36f;3d,376;3d,379;3d,37a;3c,37c;3c,37e;3c,37f;3b,382;3b,384;3b,385;3b,386;3b,388;3b,38a;3a,38f;3a,393;3a,398;3a,3a0,4e5,18;3a,3a7,4d9,2e;3b,3ac,468,3,478,6,4ce,50;3b,3b1,465,8,475,c,4c4,62;3b,3b5,462,c,472,12,4bb,6f;3b,3b7,460,f,471,14,4b6,76;3b,3bc,45d,2c,4a9,86,55a,4;3b,3c2,45a,d9,556,b;3b,3cb,457,e1,553,10;3c,3e9,453,ec,54f,16;3c,1f,5c,3d8,44f,118;3c,1d,5c,3e1,44b,11d;3c,10,4e,6,5b,50f;3c,f,4e,4,5b,511;3c,f,4e,4,5b,513;3c,e,4e,4,5a,516;3c,e,4e,4,5a,518;3c,e,4e,4,59,51a;3d,d,4e,4,59,51d;3d,c,4f,3,59,521;3d,c,4f,3,58,52c;3d,c,4f,3,58,544;3d,b,4f,4,58,54a;3d,b,4f,4,57,54d;3d,a,4f,4,57,54f;3d,a,4f,4,57,551;3e,9,4f,4,56,554;3e,9,4f,4,56,240,298,314;3e,8,50,3,55,23f,29a,313;3e,8,50,3,55,23e,29a,314;3f,7,50,4,55,23d,29b,315;40,5,50,240,29c,315;41,3,50,23f,29d,315;50,23e,29d,316;50,19b,1ec,a0,29e,316;50,198,1ed,9e,29e,317;51,15e,1b3,2c,1ee,9b,29f,317;51,15b,1b4,20,1ee,99,29f,318;51,159,1b4,1d,1ee,97,2a0,317;51,157,1b4,1b,1ef,72,262,21,2a0,317;52,154,1b4,a,1ef,71,264,1d,2a1,317;52,153,1b3,a,1f0,70,266,17,2a2,316;52,151,1b3,9,1f1,6e,26c,b,2a3,315;53,14e,1b2,a,1f2,6c,2a4,314;55,14a,1b1,b,1f3,6b,2a5,2b,2d9,2df;57,146,1b1,a,1f4,69,2a6,28,2d9,2df;57,144,1b0,b,1f6,67,2a7,25,2da,2de;57,a,62,137,1b0,a,1f8,64,2a9,21,2da,2de;57,a,65,132,1af,b,1fa,61,2ac,1c,2db,2dd;57,a,6a,12a,1ae,b,1fb,60,2af,16,2db,2dd;57,a,6c,124,1ad,b,1fc,5e,2b1,12,2db,2dd;57,a,6e,122,1ad,b,1fd,5d,2db,2dd;57,a,6e,121,1ac,b,1fe,5b,2db,2dd;57,a,6e,121,1ab,c,1ff,5a,2db,48,325,293;57,a,6e,121,1aa,c,1ff,59,2db,49,326,292;57,b,6e,120,1a9,c,1ff,59,2db,4e,32a,28e;57,b,6e,120,1a6,f,1ff,59,2db,38,31e,29a;57,b,6e,120,1a4,10,200,57,2db,37,321,297;57,b,6e,120,1a4,e,200,57,2db,36,322,296;57,c,6e,121,1a3,e,200,57,2dc,34,323,295;57,c,6e,124,19d,13,201,55,2dc,33,325,293;57,c,6d,142,201,55,2dc,32,325,293;58,b,6d,140,201,54,2dd,30,326,292;58,c,6d,13f,202,53,2de,2e,326,292;58,c,6c,13f,202,53,2df,2c,327,291;58,c,6c,13f,203,43,249,b,2e0,2a,327,291;58,c,6b,13e,203,41,24c,7,2e1,1a,2fc,d,327,291;58,d,6a,10,7b,12d,203,40,24f,3,2e2,16,2ff,a,328,290;59,c,6a,f,7e,109,18c,1a,204,3e,2e3,14,300,8,328,290;59,c,69,10,7e,a,89,fd,18f,9,19c,7,205,3d,2e3,13,302,5,329,28f;59,d,67,12,7f,9,8f,f6,193,c,206,3b,2e3,12,303,3,329,28f;59,20,7f,9,90,f4,207,39,2e3,12,329,28e;5a,1f,7f,9,91,f2,208,38,2e4,10,32a,28d;5a,1f,7f,a,91,f1,209,36,2e4,10,32b,28c;5b,1f,80,9,91,ef,20e,31,2e4,10,32c,28b;5b,1f,80,9,91,a,9d,e2,1bf,1,20f,2f,2e4,f,32d,28a;5c,1e,80,a,91,a,9e,df,1bd,4,210,2e,2e5,d,331,286;5c,1e,81,9,91,a,9f,dd,1bd,5,210,2d,2e5,c,334,282;5d,1d,81,9,91,a,a0,da,1bc,7,210,2c,2e5,c,337,27f;5e,1c,81,a,91,a,a1,d3,1bc,8,210,2c,2e6,b,33a,27c;5f,c,6d,d,82,9,91,a,a1,bb,15d,1,160,13,1bc,8,211,2a,2e6,a,33e,278;61,9,6d,d,82,9,91,a,a1,ba,167,9,1bc,9,211,29,2e6,a,340,275;6d,d,82,a,91,a,a1,ba,1bc,9,212,27,2e7,8,343,272;6d,d,82,a,91,a,a2,b9,1bc,a,212,26,2e7,7,345,270;6d,d,83,a,91,a,a2,b9,1bc,b,212,25,2e7,6,345,270;6d,d,83,a,91,a,a3,ba,1bc,c,213,23,2e8,4,345,26f;6d,d,83,b,91,a,a4,bc,1bc,d,213,22,2e9,2,346,26e;6d,d,84,a,91,a,a6,bd,1bb,11,214,20,346,26e;6d,d,84,b,91,a,aa,bb,1b5,26,214,1e,347,26c;6d,d,85,b,91,a,ad,b9,181,5f,215,1d,347,26c;6d,d,85,16,b1,b6,177,70,215,1d,347,266,5af,3;6d,d,85,16,b3,b5,173,78,215,1d,347,266;6d,d,86,15,b3,b6,16e,7f,216,1b,347,265;6d,d,86,15,b2,13d,216,1b,348,13,35c,250;6d,d,87,14,b2,13f,217,1a,348,13,35d,24f;6d,d,87,14,b2,140,217,1a,348,7,350,b,35d,24e;6d,d,88,13,b2,142,217,19,348,6,350,b,35e,24d;6d,d,88,13,b1,146,217,19,348,6,350,b,35f,24b;6e,c,89,12,b0,149,217,19,348,6,351,a,360,249;6e,c,8a,11,ae,14c,217,19,349,5,351,a,360,247;6e,c,8a,13,ad,14e,217,19,34a,3,351,9,361,245;6e,c,8b,13,ab,151,218,17,351,9,362,243;6f,b,8c,16,a9,154,218,17,352,7,362,243;6f,b,8c,171,218,17,353,5,363,242;6f,b,8d,170,218,17,354,3,364,241;6f,5,76,3,8e,16e,218,18,365,240;6f,5,77,1,8f,2a,bb,141,218,19,366,23f;70,3,90,28,bb,140,218,1a,366,23f;91,26,bb,140,218,1a,367,23e,643,6;91,25,bb,140,218,1a,368,23c,63d,79,705,8;91,24,bb,140,218,1a,369,23b,63a,8d,700,19;91,23,bc,13f,219,19,36a,23a,639,e4;91,20,bc,13f,219,19,36b,239,638,e7;91,1f,bc,13f,219,19,36c,237,637,e9;91,a,9f,e,bc,13f,219,19,36d,237,637,ea;91,a,bc,13f,219,19,36f,234,636,ec;91,a,bc,13f,219,19,370,233,636,ed;91,a,bd,13e,219,19,371,232,635,ef;91,a,bd,13e,219,19,372,231,635,f0;91,a,bd,13e,219,1a,373,1f0,565,3d,635,f0;91,a,be,13c,219,1a,374,1d5,566,3c,635,f1;91,a,be,13b,219,1a,374,1d2,566,3c,635,f1;91,a,be,12b,1f7,1,219,1a,374,1cf,567,3a,635,f2;92,a,be,12b,219,1a,374,1cc,568,39,635,f2;92,a,bf,129,219,19,375,1c8,578,28,635,f2;92,a,bf,127,219,19,375,1c5,579,27,635,f3;92,a,bf,126,219,19,376,1c1,57b,24,635,f3;92,a,c0,10e,1d1,13,219,18,376,1bf,57c,22,635,f3;92,a,c0,10b,1d4,10,219,18,377,1bc,57d,20,635,f3;92,a,c0,10a,1d7,c,21a,17,378,1b9,57e,1e,635,f3;92,a,c0,108,21a,17,378,19a,518,16,57e,1c,636,f3;92,a,c0,107,21a,16,378,194,524,8,57e,b,58c,1,590,9,636,f3;92,b,c0,105,21a,16,378,191,57f,8,636,f3;92,b,c1,103,21a,16,379,48,3c8,23,3f4,b0,4ac,36,4e4,1,4ea,1d,580,6,636,f3;93,a,c1,102,21a,16,379,25,3a3,1b,3cb,1d,3f3,ae,4b4,11,4ce,f,4eb,1a,581,2,636,f3;93,a,c1,101,21a,16,379,24,3ac,f,3d8,9,3f2,aa,4b9,8,4ee,14,636,f3;93,a,c1,ff,21a,16,37a,20,3ad,a,3f1,a9,4f0,10,636,f3;93,b,c1,fe,21a,16,37a,1f,3ae,9,3ef,11,402,69,470,28,635,f4;93,b,c1,fc,21a,16,37a,1d,3ae,a,3ed,11,403,68,473,23,635,f3;94,a,c1,f8,21a,16,37a,1c,3ae,a,3ea,13,406,64,476,1e,636,f2;94,a,c2,f0,21a,16,37a,1b,3ae,c,3e8,14,409,60,479,19,636,f2;94,a,c2,ee,21a,16,37a,1b,3af,c,3e5,16,409,5f,47b,15,637,f1;94,b,c2,ec,21a,15,37a,1a,3af,18,3cf,2b,409,5d,47e,e,638,ef;95,a,c2,eb,21a,15,37a,1a,3af,4a,40a,5b,485,2,639,ee;95,a,c2,e9,21a,15,37a,19,3b0,47,40a,57,63b,ec;95,b,c2,e7,21a,15,37a,19,3b1,44,40b,50,63c,ea;95,b,c3,e5,21a,15,37a,19,3b2,42,40c,47,63d,e9;96,a,c3,e3,21a,15,37a,19,3b3,3f,40c,33,445,b,63d,e9;96,9,c3,e1,21a,15,37b,17,3b5,3c,40d,31,63d,d6,716,10;96,8,c4,df,21a,15,37b,17,3b6,38,40e,30,63d,d6,717,f;96,8,c4,de,21a,15,37b,16,3b8,31,40e,2f,63d,d6,718,e;96,8,c4,dd,21a,15,37c,15,3bc,29,40e,2f,63d,d5,719,c;96,8,c4,dc,21a,15,37c,15,3c0,1e,40f,2d,63c,d6,719,c;96,8,c5,da,21a,14,37c,15,40f,2d,63c,d5,71a,b;96,8,c5,da,21a,14,37c,14,40f,2d,63c,d5,71a,b;96,8,c5,da,21a,14,37c,14,410,2c,63c,d5,71b,a;97,7,c6,d8,21a,14,37c,14,410,2b,63c,d4,71b,a;97,4,c6,d8,21a,14,37c,13,410,2b,63c,10,64f,c1,71c,9;97,3,c6,d8,21a,14,37c,13,410,2b,63c,e,650,c0,71c,9;c7,d7,21a,14,37c,13,411,2a,63c,e,650,c0,71c,9;c7,d7,21a,14,37c,13,411,29,63c,d,650,bf,71d,8;c7,d7,21a,14,37c,12,411,29,63c,d,650,bf,71d,7;c5,d9,21a,14,37c,12,412,28,63c,c,650,bf,71e,6;c2,dc,21a,14,37c,12,412,27,63d,b,650,bf,71e,6;c1,dc,21a,14,37c,12,412,27,63d,b,650,bf,720,2;c0,dd,21a,14,37c,12,413,26,63d,a,650,c0;c0,dc,21a,14,37c,12,413,26,63d,a,64f,c1;c0,dc,21a,14,37b,13,413,26,63d,9,64f,c1;c0,db,21a,14,37b,12,413,26,63d,9,64f,c1;c0,db,21a,14,37b,12,414,25,63d,8,64f,c1;c0,db,21a,14,37b,12,414,25,63d,8,64f,c2;c0,da,21a,14,37a,13,414,25,63d,7,64f,c2;c1,d8,21a,13,37a,13,414,24,63e,6,64f,c2;c2,d5,21a,13,37a,13,414,24,63e,5,64f,c2;c4,d1,21a,13,37a,13,414,24,640,1,655,2,65f,b2;c5,cf,21a,13,379,14,414,24,662,b0;c7,cb,21a,13,379,14,414,24,668,aa;c8,c7,21a,13,379,14,414,24,66a,a8;c9,c1,21a,13,379,14,414,24,66c,a6;c9,bd,21a,13,379,14,414,25,66d,a6;ca,b8,21a,13,378,15,414,25,670,a3;cb,b2,21a,13,378,16,415,24,673,94,708,b;cc,ad,21a,13,376,18,415,24,674,93,708,b;cc,ad,21a,13,375,19,415,24,675,92,709,a;cd,ab,21a,13,375,19,415,24,678,8e,709,a;cd,a9,21a,13,375,1a,415,24,67b,8b,709,b;ce,a5,21a,13,374,1b,415,24,67d,89,709,b;ce,a2,21a,13,374,1b,416,24,680,85,70a,a;ce,9f,21a,13,373,1c,416,24,682,83,70a,a;ce,9d,219,14,373,1d,416,24,682,82,70a,a;cf,9a,219,14,372,1e,416,24,683,81,70a,a;cf,99,219,14,372,1e,416,25,684,7f,70a,a;cf,99,219,13,372,1e,416,25,685,7d,70a,b;d0,98,219,13,371,1f,416,25,686,7b,70a,b;d0,98,219,13,328,11,371,20,416,25,687,7a,70a,b;d1,96,219,13,31a,2d,370,27,416,26,688,79,70b,a;d1,96,219,13,306,9c,416,26,68a,77,70b,a;d2,95,219,13,2fc,aa,416,27,442,25,68a,77,70b,a;d2,94,219,13,2fa,b1,416,5d,68b,77,70b,a;d3,93,219,13,2f7,ba,416,64,68b,78,70b,b;d4,92,219,13,2f6,c0,416,69,68a,7a,70b,b;d4,92,219,13,2f4,c6,416,75,68a,7a,70b,b;d5,91,219,13,2f3,110,416,78,689,7b,70b,b;d6,90,219,13,2f2,117,416,7a,688,7c,70b,b;d6,91,219,13,2f0,1a1,688,7c,70b,b;d6,91,219,13,2ef,1a3,687,7d,70b,b;d5,93,219,13,2ee,1a5,686,7d,70b,b;d3,95,219,13,2ec,1a8,686,7d,70b,b;d1,97,219,13,2eb,1aa,686,7c,70b,b;d0,99,219,14,2e9,1ad,686,7c,70b,b;cf,9a,219,14,2e8,1ae,686,7b,70a,c;cd,9d,219,14,2e6,1b0,687,7a,70a,c;cc,9e,219,14,2e4,1b3,687,79,70a,c;cb,a0,219,14,2e2,1b5,687,79,70a,c;ca,a4,219,14,2e0,1b7,688,77,70a,c;c9,a8,219,14,2df,1b9,688,77,70a,c;c8,ab,219,14,2de,1ba,688,76,70a,c;c7,ad,218,15,2dd,1bc,689,75,709,d;c6,af,218,15,2dd,1bc,689,74,709,d;c6,b0,218,15,2dd,1bc,689,74,709,c;c5,b2,218,15,2de,1bc,68a,73,709,c;c5,b3,218,15,2de,1bc,68a,73,708,d;c4,b5,218,15,2df,1bb,68b,72,708,d;c3,b8,218,15,2df,1bc,68b,72,708,d;c3,b9,218,15,2df,1bc,68b,72,708,c;c2,bb,218,15,2df,1bc,68b,72,707,d;c2,bc,218,15,2df,1bc,68b,72,707,d;c2,bd,218,15,2df,1bc,68b,72,706,e;c1,bf,218,15,2df,1bc,68b,72,706,d;c1,c0,218,15,2df,1bc,68b,72,705,e;c0,c1,218,15,2df,1bc,68b,71,704,f;c0,c1,218,15,2df,1bc,68b,71,704,e;c0,c2,1f9,6,218,15,2df,1bc,68b,71,703,f;bf,c3,1f6,9,218,15,2df,1bc,68b,71,702,f;bf,c3,1f4,c,218,15,2de,1bd,68b,71,701,10;bf,c3,1f1,f,218,15,2df,1bc,68b,71,6ff,11;bf,c3,1f0,11,218,15,2df,1bc,68b,84;bf,c3,1f0,11,217,16,2df,1bc,68b,84;bf,c4,1f0,11,217,16,2e0,1bb,68b,83;bf,c4,1f0,11,217,16,2e0,1bb,68b,82;bf,c4,1f0,11,217,17,2e0,1bb,68b,81;bf,c4,1f1,10,217,17,2e0,1bb,68b,80;c0,c3,1f1,11,217,17,2e0,1ba,68b,7f;c0,c4,1f1,13,217,17,23e,5,2e0,1ba,68b,7d;c0,c4,1f2,15,217,17,23d,8,2e0,1b9,68b,7c;c0,c4,1f2,17,217,17,23d,a,2e0,1b6,68b,7a;c0,c5,1f4,17,217,17,23c,d,2e0,1b6,68b,78;bf,c6,1f4,19,217,17,23c,f,2e0,1b6,68b,75;bd,c8,1f4,19,217,17,23b,12,2e1,1b6,68b,72;bb,cb,1f4,1a,217,17,23b,14,2e1,1b6,68b,71;b9,cd,1f3,1c,216,18,23a,17,2e2,1b5,68a,72;b8,d3,1f3,1d,216,18,239,1a,2e2,1b5,68a,72;b6,d8,1f3,1d,216,18,239,1c,2e2,1b5,68a,72;b5,e4,1d9,4,1f2,1f,216,18,238,1f,2e2,1b5,68a,73;b4,ea,1d8,7,1f2,1f,216,18,238,21,2e2,1b5,689,74;b3,ee,1d8,7,1f2,20,216,18,237,24,2e1,1b6,689,74;b2,f1,1d7,8,1f2,20,216,18,236,27,2df,1b8,687,76;b1,f3,1d7,8,1f2,21,216,18,236,29,2c7,7,2de,1b9,683,7a;b0,f5,1d6,9,1f2,21,216,18,235,2c,2c6,b,2dc,1bb,682,7b;ae,f8,1d6,9,1f2,21,216,18,235,2f,2c5,e,2db,1bd,681,7c;ab,fc,1d5,a,1f2,21,216,18,234,32,2c0,1d9,680,7d;a7,101,1d5,9,1f2,22,216,18,234,33,2bb,1de,680,7e;a3,105,1d4,9,1f1,23,216,18,233,37,2ba,1e1,67f,80;a0,109,1d4,9,1f1,23,216,18,232,3a,28e,3,2b9,1e3,67e,81;9e,10b,1d4,8,1f1,3d,232,3c,28d,8,2b6,1e7,67d,83;9c,10d,1d3,8,1f2,3c,231,3f,28b,c,2b4,1ea,58a,1d,67a,86;9a,110,1d3,7,1f2,3c,230,42,28a,10,2b0,1ee,589,26,600,17,677,8a;99,111,1d2,7,1f2,3c,230,44,289,14,2aa,1ec,499,10,587,2f,5fa,1f,674,8d;99,112,1d2,7,1f2,84,287,19,2a7,f,2b8,1f6,585,39,5f5,26,672,8f;98,113,1d1,8,1f3,85,286,22a,57f,45,5f0,2e,670,90;98,113,1d1,8,1f4,86,285,22d,534,1a,57b,4e,5eb,37,66d,93;98,12a,1d1,7,1f4,89,284,231,51b,42,575,b1,66b,94;97,137,1d0,8,1f5,2c2,4dc,d,505,12f,648,b7;97,141,1f5,29,224,296,4d7,228;97,141,1f6,26,228,295,4d3,22b;97,141,1f0,2b,22a,4d4;97,142,1ee,2c,22b,4d3;98,143,1ec,512;98,145,1eb,513;98,149,1e7,517;99,666;99,666;9a,665;9b,665;9b,665;9c,665;9d,664;9d,664;9e,664;9e,664;9a,669;9a,669;9b,669;9b,669;9a,66a;9a,66b;99,66c;99,66d;98,66e;97,670;96,671;96,671;95,673;94,674;93,676;93,676;92,678;91,679;90,67a;90,67b;8f,67c;8f,67d;8e,67e;8e,67e;8d,680;8d,680;8c,682;8c,682;8c,682;8b,684;8b,684;8a,686;8a,686;8a,686;89,688;89,688;89,688;88,68a;88,68a;87,68b;87,68c;86,68d;86,68d;85,68f;85,68f;85,690;84,691;84,692;83,693;83,694;83,694;83,694;83,695;83,695;83,694;83,694;84,692;;;;;;;;;;;;;;;;;;;;;;';

  const img = {}, ADLAR = ['gok', 'uzak', 'yakin', 'arazi'];
  const SURUM = 3;   // resim değişince artır (tarayıcı önbelleği eskisini göstermesin)
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

  // Çarpışma maskesi: solid[y*W+x] = 1 toprak. ayna: harita yatayda ters çevrilir
  function uret(solid, ayna) {
    solid.fill(0);
    const rows = RLE.split(';');
    for (let y = 0; y < H; y++) {
      if (!rows[y]) continue;
      const v = rows[y].split(',').map(s => parseInt(s, 16));
      for (let i = 0; i < v.length; i += 2) {
        const x0 = ayna ? W - v[i] - v[i + 1] : v[i];
        solid.fill(1, y * W + x0, y * W + x0 + v[i + 1]);
      }
    }
  }

  // Arazi tuvali: kaynak çözünürlüğünde tutulur (yakınlaşınca keskin kalsın).
  // Döndürülen tctx'e dünya koordinatlarında çizilebilir (patlama oyukları için).
  function arazi(ayna) {
    const k = 1 / OLCEK, cv = document.createElement('canvas');
    cv.width = Math.round(W * k); cv.height = Math.round(H * k);
    const c = cv.getContext('2d');
    if (ayna) { c.translate(cv.width, 0); c.scale(-1, 1); }
    c.drawImage(img.arazi, 0, Math.round(OY * k));
    c.setTransform(k, 0, 0, k, 0, 0);
    return { terr: cv, tctx: c };
  }

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
    yukle, uret, arazi, arkaPlan, su,
    tema: { oyuk: 'rgba(22,16,14,.78)', toz: ['#2f6b3e', '#7fd3b0', '#c98a3a', '#d9d2c0', '#5b5148', '#9aa0a8'] },
  };
})();
