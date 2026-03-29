// ========== Firebase ==========
firebase.initializeApp({
  apiKey:"AIzaSyC_P2HRD4JNW8CSryJD2JFixwM6j7vYVK4",
  authDomain:"teamselection.firebaseapp.com",
  databaseURL:"https://teamselection-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:"teamselection",
  storageBucket:"teamselection.firebasestorage.app",
  messagingSenderId:"435744817962",
  appId:"1:435744817962:web:74e5ee4c7b35d113c0d453"
});
const db=firebase.database();

// ========== Weapon Data (ver.11.1.0) ==========
const WEAPONS=[
// Shooter (Id順)
{name:"ボールドマーカー",range:8.2,cat:"Shooter"},
{name:"ボールドマーカーネオ",range:8.2,cat:"Shooter"},
{name:"わかばシューター",range:11.3,cat:"Shooter"},
{name:"もみじシューター",range:11.3,cat:"Shooter"},
{name:"シャープマーカー",range:12.1,cat:"Shooter"},
{name:"シャープマーカーネオ",range:12.1,cat:"Shooter"},
{name:"シャープマーカーGECK",range:12.1,cat:"Shooter"},
{name:"プロモデラーMG",range:11.3,cat:"Shooter"},
{name:"プロモデラーRG",range:11.3,cat:"Shooter"},
{name:"プロモデラー彩",range:11.3,cat:"Shooter"},
{name:"スプラシューター",range:12.9,cat:"Shooter"},
{name:"スプラシューターコラボ",range:12.9,cat:"Shooter"},
{name:"スプラシューター煌",range:12.9,cat:"Shooter"},
{name:"ヒーローシューター レプリカ",range:12.9,cat:"Shooter"},
{name:"オクタシューター レプリカ",range:12.9,cat:"Shooter"},
{name:"オーダーシューター レプリカ",range:12.9,cat:"Shooter"},
{name:".52ガロン",range:13.3,cat:"Shooter"},
{name:".52ガロンデコ",range:13.3,cat:"Shooter"},
{name:"N-ZAP85",range:12.5,cat:"Shooter"},
{name:"N-ZAP89",range:12.5,cat:"Shooter"},
{name:"プライムシューター",range:17.0,cat:"Shooter"},
{name:"プライムシューターコラボ",range:17.0,cat:"Shooter"},
{name:"プライムシューターFRZN",range:17.0,cat:"Shooter"},
{name:".96ガロン",range:18.0,cat:"Shooter"},
{name:".96ガロンデコ",range:18.0,cat:"Shooter"},
{name:".96ガロン爪",range:18.0,cat:"Shooter"},
{name:"ジェットスイーパー",range:22.5,cat:"Shooter"},
{name:"ジェットスイーパーカスタム",range:22.5,cat:"Shooter"},
{name:"ジェットスイーパーCOBR",range:22.5,cat:"Shooter"},
{name:"スペースシューター",range:16.0,cat:"Shooter"},
{name:"スペースシューターコラボ",range:16.0,cat:"Shooter"},
{name:"L3リールガン",range:13.5,cat:"Shooter"},
{name:"L3リールガンD",range:13.5,cat:"Shooter"},
{name:"L3リールガン箔",range:13.5,cat:"Shooter"},
{name:"H3リールガン",range:17.0,cat:"Shooter"},
{name:"H3リールガンD",range:17.0,cat:"Shooter"},
{name:"H3リールガンSNAK",range:17.0,cat:"Shooter"},
{name:"ボトルガイザー",range:20.0,cat:"Shooter"},
{name:"ボトルガイザーフォイル",range:20.0,cat:"Shooter"},
// Blaster (Id順)
{name:"ノヴァブラスター",range:11.2,cat:"Blaster"},
{name:"ノヴァブラスターネオ",range:11.2,cat:"Blaster"},
{name:"オーダーブラスター レプリカ",range:11.2,cat:"Blaster"},
{name:"ホットブラスター",range:13.3,cat:"Blaster"},
{name:"ホットブラスターカスタム",range:13.3,cat:"Blaster"},
{name:"ホットブラスター艶",range:13.3,cat:"Blaster"},
{name:"ロングブラスター",range:17.0,cat:"Blaster"},
{name:"ロングブラスターカスタム",range:17.0,cat:"Blaster"},
{name:"クラッシュブラスター",range:11.0,cat:"Blaster"},
{name:"クラッシュブラスターネオ",range:11.0,cat:"Blaster"},
{name:"ラピッドブラスター",range:16.7,cat:"Blaster"},
{name:"ラピッドブラスターデコ",range:16.7,cat:"Blaster"},
{name:"Rブラスターエリート",range:19.2,cat:"Blaster"},
{name:"Rブラスターエリートデコ",range:19.2,cat:"Blaster"},
{name:"RブラスターエリートWNTR",range:19.2,cat:"Blaster"},
{name:"S-BLAST92",range:16.5,cat:"Blaster"},
{name:"S-BLAST91",range:16.5,cat:"Blaster"},
// Roller (Id順)
{name:"カーボンローラー",range:9.5,cat:"Roller"},
{name:"カーボンローラーデコ",range:9.5,cat:"Roller"},
{name:"カーボンローラーANGL",range:9.5,cat:"Roller"},
{name:"スプラローラー",range:11.8,cat:"Roller"},
{name:"スプラローラーコラボ",range:11.8,cat:"Roller"},
{name:"オーダーローラー レプリカ",range:11.8,cat:"Roller"},
{name:"ダイナモローラー",range:18.5,cat:"Roller"},
{name:"ダイナモローラーテスラ",range:18.5,cat:"Roller"},
{name:"ダイナモローラー冥",range:18.5,cat:"Roller"},
{name:"ヴァリアブルローラー",range:14.0,cat:"Roller"},
{name:"ヴァリアブルローラーフォイル",range:14.0,cat:"Roller"},
{name:"ワイドローラー",range:12.5,cat:"Roller"},
{name:"ワイドローラーコラボ",range:12.5,cat:"Roller"},
{name:"ワイドローラー惑",range:12.5,cat:"Roller"},
// Brush (Id順)
{name:"パブロ",range:7.0,cat:"Brush"},
{name:"パブロ・ヒュー",range:7.0,cat:"Brush"},
{name:"ホクサイ",range:10.5,cat:"Brush"},
{name:"ホクサイ・ヒュー",range:10.5,cat:"Brush"},
{name:"ホクサイ彗",range:10.5,cat:"Brush"},
{name:"オーダーブラシ レプリカ",range:10.5,cat:"Brush"},
{name:"フィンセント",range:13.1,cat:"Brush"},
{name:"フィンセント・ヒュー",range:13.1,cat:"Brush"},
{name:"フィンセントBRNZ",range:13.1,cat:"Brush"},
// Charger (Id順)
{name:"スクイックリンα",range:18.5,cat:"Charger"},
{name:"スクイックリンβ",range:18.5,cat:"Charger"},
{name:"スプラチャージャー",range:26.0,cat:"Charger"},
{name:"スプラチャージャーコラボ",range:26.0,cat:"Charger"},
{name:"スプラチャージャーFRST",range:26.0,cat:"Charger"},
{name:"オーダーチャージャー レプリカ",range:26.0,cat:"Charger"},
{name:"スプラスコープ",range:26.5,cat:"Charger"},
{name:"スプラスコープコラボ",range:26.5,cat:"Charger"},
{name:"スプラスコープFRST",range:26.5,cat:"Charger"},
{name:"リッター4K",range:31.0,cat:"Charger"},
{name:"リッター4Kカスタム",range:31.0,cat:"Charger"},
{name:"4Kスコープ",range:33.0,cat:"Charger"},
{name:"4Kスコープカスタム",range:33.0,cat:"Charger"},
{name:"14式竹筒銃・甲",range:21.0,cat:"Charger"},
{name:"14式竹筒銃・乙",range:21.0,cat:"Charger"},
{name:"ソイチューバー",range:21.0,cat:"Charger"},
{name:"ソイチューバーカスタム",range:21.0,cat:"Charger"},
{name:"R-PEN/5H",range:26.0,cat:"Charger"},
{name:"R-PEN/5B",range:26.0,cat:"Charger"},
// Slosher (Id順)
{name:"バケットスロッシャー",range:14.5,cat:"Slosher"},
{name:"バケットスロッシャーデコ",range:14.5,cat:"Slosher"},
{name:"オーダースロッシャー レプリカ",range:14.5,cat:"Slosher"},
{name:"ヒッセン",range:11.0,cat:"Slosher"},
{name:"ヒッセン・ヒュー",range:11.0,cat:"Slosher"},
{name:"ヒッセンASH",range:11.0,cat:"Slosher"},
{name:"スクリュースロッシャー",range:14.7,cat:"Slosher"},
{name:"スクリュースロッシャーネオ",range:14.7,cat:"Slosher"},
{name:"オーバーフロッシャー",range:15.0,cat:"Slosher"},
{name:"オーバーフロッシャーデコ",range:15.0,cat:"Slosher"},
{name:"エクスプロッシャー",range:20.7,cat:"Slosher"},
{name:"エクスプロッシャーカスタム",range:20.7,cat:"Slosher"},
{name:"モップリン",range:15.5,cat:"Slosher"},
{name:"モップリンD",range:15.5,cat:"Slosher"},
{name:"モップリン角",range:15.5,cat:"Slosher"},
// Spinner (Id順)
{name:"スプラスピナー",range:15.0,cat:"Spinner"},
{name:"スプラスピナーコラボ",range:15.0,cat:"Spinner"},
{name:"スプラスピナーPYTN",range:15.0,cat:"Spinner"},
{name:"バレルスピナー",range:21.0,cat:"Spinner"},
{name:"バレルスピナーデコ",range:21.0,cat:"Spinner"},
{name:"オーダースピナー レプリカ",range:21.0,cat:"Spinner"},
{name:"ハイドラント",range:24.5,cat:"Spinner"},
{name:"ハイドラントカスタム",range:24.5,cat:"Spinner"},
{name:"ハイドラント圧",range:24.5,cat:"Spinner"},
{name:"クーゲルシュライバー",range:24.5,cat:"Spinner"},
{name:"クーゲルシュライバー・ヒュー",range:24.5,cat:"Spinner"},
{name:"ノーチラス47",range:18.0,cat:"Spinner"},
{name:"ノーチラス79",range:18.0,cat:"Spinner"},
{name:"イグザミナー",range:17.0,cat:"Spinner"},
{name:"イグザミナー・ヒュー",range:17.0,cat:"Spinner"},
// Maneuver (Id順)
{name:"スパッタリー",range:9.8,cat:"Maneuver"},
{name:"スパッタリー・ヒュー",range:9.8,cat:"Maneuver"},
{name:"スパッタリーOWL",range:9.8,cat:"Maneuver"},
{name:"スプラマニューバー",range:12.5,cat:"Maneuver"},
{name:"スプラマニューバーコラボ",range:12.5,cat:"Maneuver"},
{name:"スプラマニューバー耀",range:12.5,cat:"Maneuver"},
{name:"オーダーマニューバー レプリカ",range:12.5,cat:"Maneuver"},
{name:"ケルビン525",range:16.0,cat:"Maneuver"},
{name:"ケルビン525デコ",range:16.0,cat:"Maneuver"},
{name:"デュアルスイーパー",range:17.0,cat:"Maneuver"},
{name:"デュアルスイーパーカスタム",range:17.0,cat:"Maneuver"},
{name:"デュアルスイーパー蹄",range:17.0,cat:"Maneuver"},
{name:"クアッドホッパーブラック",range:14.0,cat:"Maneuver"},
{name:"クアッドホッパーホワイト",range:14.0,cat:"Maneuver"},
{name:"ガエンFF",range:19.1,cat:"Maneuver"},
{name:"ガエンFFカスタム",range:19.1,cat:"Maneuver"},
// Shelter (Id順)
{name:"パラシェルター",range:12.5,cat:"Shelter"},
{name:"パラシェルターソレーラ",range:12.5,cat:"Shelter"},
{name:"オーダーシェルター レプリカ",range:12.5,cat:"Shelter"},
{name:"キャンピングシェルター",range:15.0,cat:"Shelter"},
{name:"キャンピングシェルターソレーラ",range:15.0,cat:"Shelter"},
{name:"キャンピングシェルターCREM",range:15.0,cat:"Shelter"},
{name:"スパイガジェット",range:11.8,cat:"Shelter"},
{name:"スパイガジェットソレーラ",range:11.8,cat:"Shelter"},
{name:"スパイガジェット繚",range:11.8,cat:"Shelter"},
{name:"24式張替傘・甲",range:14.5,cat:"Shelter"},
{name:"24式張替傘・乙",range:14.5,cat:"Shelter"},
// Stringer (Id順)
{name:"トライストリンガー",range:25.0,cat:"Stringer"},
{name:"トライストリンガーコラボ",range:25.0,cat:"Stringer"},
{name:"トライストリンガー燈",range:25.0,cat:"Stringer"},
{name:"オーダーストリンガー レプリカ",range:25.0,cat:"Stringer"},
{name:"LACT-450",range:15.0,cat:"Stringer"},
{name:"LACT-450デコ",range:15.0,cat:"Stringer"},
{name:"LACT-450MILK",range:15.0,cat:"Stringer"},
{name:"フルイドV",range:23.0,cat:"Stringer"},
{name:"フルイドVカスタム",range:23.0,cat:"Stringer"},
// Saber (Id順)
{name:"ジムワイパー",range:16.5,cat:"Saber"},
{name:"ジムワイパー・ヒュー",range:16.5,cat:"Saber"},
{name:"ジムワイパー封",range:16.5,cat:"Saber"},
{name:"オーダーワイパー レプリカ",range:16.5,cat:"Saber"},
{name:"ドライブワイパー",range:13.0,cat:"Saber"},
{name:"ドライブワイパーデコ",range:13.0,cat:"Saber"},
{name:"ドライブワイパーRUST",range:13.0,cat:"Saber"},
{name:"デンタルワイパーミント",range:15.0,cat:"Saber"},
{name:"デンタルワイパースミ",range:15.0,cat:"Saber"}
];

const CAT_NAMES={Shooter:"シューター",Blaster:"ブラスター",Roller:"ローラー",Brush:"フデ",Charger:"チャージャー",Slosher:"スロッシャー",Spinner:"スピナー",Maneuver:"マニューバー",Shelter:"シェルター",Stringer:"ストリンガー",Saber:"ワイパー"};
const CAT_ORDER=["Shooter","Blaster","Roller","Brush","Charger","Slosher","Spinner","Maneuver","Shelter","Stringer","Saber"];

// ========== State ==========
let currentRoomId=null;
let roomRef=null;
let players=Array.from({length:10},()=>({name:"",weapon:null,xpower:"",_registered:false,_spectating:false}));

// ========== Helpers ==========
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}
function rangeBadgeClass(r){return r<=14?"range-short":r<=20?"range-mid":"range-long"}

const WEAPON_IMG={"ボールドマーカー":"w000.png","ボールドマーカーネオ":"w001.png","わかばシューター":"w002.png","もみじシューター":"w003.png","シャープマーカー":"w004.png","シャープマーカーネオ":"w005.png","シャープマーカーGECK":"w006.png","プロモデラーMG":"w007.png","プロモデラーRG":"w008.png","プロモデラー彩":"w009.png","スプラシューター":"w010.png","スプラシューターコラボ":"w011.png","スプラシューター煌":"w012.png","ヒーローシューター レプリカ":"w171.png","オクタシューター レプリカ":"w172.png","オーダーシューター レプリカ":"w013.png",".52ガロン":"w014.png",".52ガロンデコ":"w015.png","N-ZAP85":"w016.png","N-ZAP89":"w017.png","プライムシューター":"w018.png","プライムシューターコラボ":"w019.png","プライムシューターFRZN":"w020.png",".96ガロン":"w021.png",".96ガロンデコ":"w022.png",".96ガロン爪":"w023.png","ジェットスイーパー":"w024.png","ジェットスイーパーカスタム":"w025.png","ジェットスイーパーCOBR":"w026.png","スペースシューター":"w027.png","スペースシューターコラボ":"w028.png","L3リールガン":"w029.png","L3リールガンD":"w030.png","L3リールガン箔":"w031.png","H3リールガン":"w032.png","H3リールガンD":"w033.png","H3リールガンSNAK":"w034.png","ボトルガイザー":"w035.png","ボトルガイザーフォイル":"w036.png","ノヴァブラスター":"w037.png","ノヴァブラスターネオ":"w038.png","オーダーブラスター レプリカ":"w039.png","ホットブラスター":"w040.png","ホットブラスターカスタム":"w041.png","ホットブラスター艶":"w042.png","ロングブラスター":"w043.png","ロングブラスターカスタム":"w044.png","クラッシュブラスター":"w045.png","クラッシュブラスターネオ":"w046.png","ラピッドブラスター":"w047.png","ラピッドブラスターデコ":"w048.png","Rブラスターエリート":"w049.png","Rブラスターエリートデコ":"w050.png","RブラスターエリートWNTR":"w051.png","S-BLAST92":"w052.png","S-BLAST91":"w053.png","カーボンローラー":"w054.png","カーボンローラーデコ":"w055.png","カーボンローラーANGL":"w056.png","スプラローラー":"w057.png","スプラローラーコラボ":"w058.png","オーダーローラー レプリカ":"w059.png","ダイナモローラー":"w060.png","ダイナモローラーテスラ":"w061.png","ダイナモローラー冥":"w062.png","ヴァリアブルローラー":"w063.png","ヴァリアブルローラーフォイル":"w064.png","ワイドローラー":"w065.png","ワイドローラーコラボ":"w066.png","ワイドローラー惑":"w067.png","パブロ":"w068.png","パブロ・ヒュー":"w069.png","ホクサイ":"w070.png","ホクサイ・ヒュー":"w071.png","ホクサイ彗":"w072.png","オーダーブラシ レプリカ":"w073.png","フィンセント":"w074.png","フィンセント・ヒュー":"w075.png","フィンセントBRNZ":"w076.png","スクイックリンα":"w077.png","スクイックリンβ":"w078.png","スプラチャージャー":"w079.png","スプラチャージャーコラボ":"w080.png","スプラチャージャーFRST":"w081.png","オーダーチャージャー レプリカ":"w082.png","スプラスコープ":"w083.png","スプラスコープコラボ":"w084.png","スプラスコープFRST":"w085.png","リッター4K":"w086.png","リッター4Kカスタム":"w087.png","4Kスコープ":"w088.png","4Kスコープカスタム":"w089.png","14式竹筒銃・甲":"w090.png","14式竹筒銃・乙":"w091.png","ソイチューバー":"w092.png","ソイチューバーカスタム":"w093.png","R-PEN/5H":"w094.png","R-PEN/5B":"w095.png","バケットスロッシャー":"w096.png","バケットスロッシャーデコ":"w097.png","オーダースロッシャー レプリカ":"w098.png","ヒッセン":"w099.png","ヒッセン・ヒュー":"w100.png","ヒッセンASH":"w101.png","スクリュースロッシャー":"w102.png","スクリュースロッシャーネオ":"w103.png","オーバーフロッシャー":"w104.png","オーバーフロッシャーデコ":"w105.png","エクスプロッシャー":"w106.png","エクスプロッシャーカスタム":"w107.png","モップリン":"w108.png","モップリンD":"w109.png","モップリン角":"w110.png","スプラスピナー":"w111.png","スプラスピナーコラボ":"w112.png","スプラスピナーPYTN":"w113.png","バレルスピナー":"w114.png","バレルスピナーデコ":"w115.png","オーダースピナー レプリカ":"w116.png","ハイドラント":"w117.png","ハイドラントカスタム":"w118.png","ハイドラント圧":"w119.png","クーゲルシュライバー":"w120.png","クーゲルシュライバー・ヒュー":"w121.png","ノーチラス47":"w122.png","ノーチラス79":"w123.png","イグザミナー":"w124.png","イグザミナー・ヒュー":"w125.png","スパッタリー":"w126.png","スパッタリー・ヒュー":"w127.png","スパッタリーOWL":"w128.png","スプラマニューバー":"w129.png","スプラマニューバーコラボ":"w130.png","スプラマニューバー耀":"w131.png","オーダーマニューバー レプリカ":"w132.png","ケルビン525":"w133.png","ケルビン525デコ":"w134.png","デュアルスイーパー":"w135.png","デュアルスイーパーカスタム":"w136.png","デュアルスイーパー蹄":"w137.png","クアッドホッパーブラック":"w138.png","クアッドホッパーホワイト":"w139.png","ガエンFF":"w140.png","ガエンFFカスタム":"w141.png","パラシェルター":"w142.png","パラシェルターソレーラ":"w143.png","オーダーシェルター レプリカ":"w144.png","キャンピングシェルター":"w145.png","キャンピングシェルターソレーラ":"w146.png","キャンピングシェルターCREM":"w147.png","スパイガジェット":"w148.png","スパイガジェットソレーラ":"w149.png","スパイガジェット繚":"w150.png","24式張替傘・甲":"w151.png","24式張替傘・乙":"w152.png","トライストリンガー":"w153.png","トライストリンガーコラボ":"w154.png","トライストリンガー燈":"w155.png","オーダーストリンガー レプリカ":"w156.png","LACT-450":"w157.png","LACT-450デコ":"w158.png","LACT-450MILK":"w159.png","フルイドV":"w160.png","フルイドVカスタム":"w161.png","ジムワイパー":"w162.png","ジムワイパー・ヒュー":"w163.png","ジムワイパー封":"w164.png","オーダーワイパー レプリカ":"w165.png","ドライブワイパー":"w166.png","ドライブワイパーデコ":"w167.png","ドライブワイパーRUST":"w168.png","デンタルワイパーミント":"w169.png","デンタルワイパースミ":"w170.png"};
function weaponImgPath(name){
  return"weapon/"+(WEAPON_IMG[name]||"missing.png");
}
function weaponImgTag(name,size){
  size=size||24;
  return'<img src="'+weaponImgPath(name)+'" alt="'+esc(name)+'" width="'+size+'" height="'+size+'" style="object-fit:contain;vertical-align:middle" onerror="this.style.display=\'none\'">';
}

function genRoomId(){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id="";for(let i=0;i<5;i++)id+=chars[Math.floor(Math.random()*chars.length)];
  return id;
}

function weaponDropdownHtml(){
  let html="";
  for(const cat of CAT_ORDER){
    const items=WEAPONS.filter(w=>w.cat===cat);
    if(!items.length)continue;
    html+=`<div class="dropdown-group-label">${CAT_NAMES[cat]}</div>`;
    for(const w of items){
      html+=`<div class="dropdown-item" data-wname="${esc(w.name)}">${weaponImgTag(w.name,20)}<span>${esc(w.name)}</span></div>`;
    }
  }
  return html;
}

function buildTriggerHtml(weapon){
  if(!weapon)return'<span>-- ブキを選択 --</span>';
  return weaponImgTag(weapon.name,24)+'<span>'+esc(weapon.name)+'</span>';
}

// ========== Room Logic ==========
const SIX_HOURS=6*60*60*1000;

function enterRoom(roomId){
  currentRoomId=roomId;
  document.getElementById("lobby").style.display="none";
  document.getElementById("mainUi").classList.add("show");
  document.getElementById("roomIdText").textContent=roomId;
  history.replaceState(null,"","#room="+roomId);
  renderPlayers();
  roomRef=db.ref("rooms/"+roomId+"/players");
  roomRef.on("value",snap=>{
    const data=snap.val()||{};
    for(let i=0;i<10;i++){
      const d=data[i];
      const wasRegistered=players[i]._registered;
      const wasSpectating=players[i]._spectating;
      const isNowRegistered=!!d;
      const isNowSpectating=!!(d&&d.spectating);
      if(isNowRegistered){
        players[i]={name:d.name||"",weapon:WEAPONS.find(w=>w.name===d.weapon)||null,xpower:d.xpower||"",_registered:true,_spectating:isNowSpectating};
      }else if(wasRegistered||wasSpectating){
        players[i]={...players[i],_registered:false,_spectating:false};
      }
    }
    renderPlayers();
  });
}

function cleanupExpiredRooms(){
  db.ref("rooms").once("value",snap=>{
    const rooms=snap.val();
    if(!rooms)return;
    const now=Date.now();
    for(const [id,room] of Object.entries(rooms)){
      if(room.created&&(now-room.created)>SIX_HOURS){
        db.ref("rooms/"+id).remove();
      }
    }
  });
}

function leaveRoom(){
  if(roomRef)roomRef.off();
  currentRoomId=null;roomRef=null;
  players=Array.from({length:10},()=>({name:"",weapon:null,xpower:"",_registered:false,_spectating:false}));
  document.getElementById("mainUi").classList.remove("show");
  document.getElementById("lobby").style.display="";
  document.getElementById("result").classList.remove("show");
  history.replaceState(null,"",location.pathname);
}

// ========== Render ==========
function buildCardHtml(i,p,isFilled,isSpectating){
  const locked=isFilled||isSpectating;
  const triggerCls=locked?"dropdown-trigger disabled":(p.weapon?"dropdown-trigger":"dropdown-trigger placeholder");
  const weaponRow=`<div class="custom-dropdown" data-idx="${i}">
    <div class="${triggerCls}">${buildTriggerHtml(p.weapon)}</div>
    ${locked?"":'<div class="dropdown-list">'+weaponDropdownHtml()+'</div>'}
  </div>`;
  let footerHtml;
  if(isSpectating){
    footerHtml=`<span class="spectate-badge">観戦</span><button class="btn-cancel-spectate" data-idx="${i}" style="margin-left:auto">観戦取消</button>`;
  }else if(isFilled){
    footerHtml=`<span class="registered-badge">登録済み</span><span style="margin-left:auto;display:flex;gap:6px"><button class="btn-edit" data-idx="${i}">修正</button><button class="btn-spectate" data-idx="${i}">観戦</button><button class="btn-leave-registered" data-idx="${i}">退出</button></span>`;
  }else{
    footerHtml=`<button class="btn-register" data-idx="${i}">登録</button><button class="btn-leave-slot" data-idx="${i}">退出</button><span class="register-status" id="regStatus-${i}">保存しました</span>`;
  }
  return`
    <div class="player-header">
      <div class="player-num">${i+1}</div>
      <input class="player-name-input" placeholder="プレイヤー名" value="${esc(p.name)}" data-idx="${i}" ${locked?"disabled":""}>
    </div>
    <div class="player-row">
      <label>ブキ</label>
      ${weaponRow}
    </div>
    <div class="player-row">
      <label>XP</label>
      <input class="xpower-input" type="number" placeholder="例: 2200" value="${esc(p.xpower)}" data-idx="${i}" min="0" max="9999" step="0.1" ${locked?"disabled":""}>
      <span class="range-display">${p.weapon?"M_Range "+p.weapon.range:""}</span>
    </div>
    <div class="player-footer">${footerHtml}</div>`;
}

function renderPlayers(){
  const grid=document.getElementById("playersGrid");
  const existingCards=grid.querySelectorAll(".player-card");
  let filledCount=0;
  let spectateCount=0;

  for(let i=0;i<10;i++){
    const p=players[i];
    const isFilled=!!p._registered&&!p._spectating;
    const isSpectating=!!p._spectating;
    if(isFilled)filledCount++;
    if(isSpectating)spectateCount++;

    const stateKey=(isFilled?"R":isSpectating?"S":"N");
    let card=existingCards[i]||null;
    const prevState=card?card.dataset.state:undefined;
    const needsRebuild=!card||(prevState!==undefined&&prevState!==stateKey);

    if(needsRebuild){
      if(!card){
        card=document.createElement("div");
        grid.appendChild(card);
      }
      card.className="player-card"+(isFilled?" filled":isSpectating?" spectating":"");
      card.dataset.state=stateKey;
      card.dataset.idx=i;
      card.innerHTML=buildCardHtml(i,p,isFilled,isSpectating);
      bindCardEvents(card,i);
    }
    else if(isFilled||isSpectating){
      card.className="player-card"+(isFilled?" filled":" spectating");
      card.dataset.state=stateKey;
      card.innerHTML=buildCardHtml(i,p,isFilled,isSpectating);
      bindCardEvents(card,i);
    }
  }

  while(grid.children.length>10)grid.removeChild(grid.lastChild);

  const activeCount=filledCount;
  let statusText=`${activeCount} / 8 人参加`;
  if(spectateCount>0)statusText+=`（観戦 ${spectateCount}人）`;
  document.getElementById("roomCount").textContent=statusText;
  document.getElementById("generateBtn").disabled=(activeCount!==8);
}

function bindCardEvents(card,idx){
  const nameInput=card.querySelector(".player-name-input:not([disabled])");
  if(nameInput){
    nameInput.addEventListener("input",e=>{players[idx].name=e.target.value;});
  }
  const xpInput=card.querySelector(".xpower-input:not([disabled])");
  if(xpInput){
    xpInput.addEventListener("input",e=>{players[idx].xpower=e.target.value;});
  }
  const dropdown=card.querySelector(".custom-dropdown");
  if(dropdown&&!dropdown.querySelector(".dropdown-trigger.disabled")){
    const trigger=dropdown.querySelector(".dropdown-trigger");
    const list=dropdown.querySelector(".dropdown-list");
    if(trigger&&list){
      trigger.addEventListener("click",e=>{
        e.stopPropagation();
        document.querySelectorAll(".dropdown-list.open").forEach(l=>{if(l!==list)l.classList.remove("open");});
        list.classList.toggle("open");
      });
      list.querySelectorAll(".dropdown-item").forEach(item=>{
        item.addEventListener("click",e=>{
          e.stopPropagation();
          const wname=item.dataset.wname;
          const w=WEAPONS.find(x=>x.name===wname)||null;
          players[idx].weapon=w;
          trigger.className="dropdown-trigger";
          trigger.innerHTML=buildTriggerHtml(w);
          list.classList.remove("open");
          const rangeSpan=card.querySelector(".range-display");
          if(rangeSpan)rangeSpan.textContent=w?"M_Range "+w.range:"";
        });
      });
    }
  }
  const regBtn=card.querySelector(".btn-register");
  if(regBtn){
    regBtn.addEventListener("click",()=>{
      const p=players[idx];
      if(!p.name||!p.weapon||!p.xpower){alert("名前・ブキ・Xパワーをすべて入力してください");return;}
      db.ref("rooms/"+currentRoomId+"/players/"+idx).set({
        name:p.name,weapon:p.weapon.name,xpower:p.xpower
      });
    });
  }
  const editBtn=card.querySelector(".btn-edit");
  if(editBtn){
    editBtn.addEventListener("click",()=>{
      const p=players[idx];
      players[idx]={name:p.name,weapon:p.weapon,xpower:p.xpower,_registered:false,_spectating:false};
      db.ref("rooms/"+currentRoomId+"/players/"+idx).remove();
    });
  }
  const spectateBtn=card.querySelector(".btn-spectate");
  if(spectateBtn){
    spectateBtn.addEventListener("click",()=>{
      const p=players[idx];
      db.ref("rooms/"+currentRoomId+"/players/"+idx).set({
        name:p.name,weapon:p.weapon.name,xpower:p.xpower,spectating:true
      });
    });
  }
  const cancelSpectateBtn=card.querySelector(".btn-cancel-spectate");
  if(cancelSpectateBtn){
    cancelSpectateBtn.addEventListener("click",()=>{
      const p=players[idx];
      db.ref("rooms/"+currentRoomId+"/players/"+idx).set({
        name:p.name,weapon:p.weapon.name,xpower:p.xpower
      });
    });
  }
  // 退出ボタン（未登録状態） - ローカルデータをクリア
  const leaveSlotBtn=card.querySelector(".btn-leave-slot");
  if(leaveSlotBtn){
    leaveSlotBtn.addEventListener("click",()=>{
      players[idx]={name:"",weapon:null,xpower:"",_registered:false,_spectating:false};
      renderPlayers();
    });
  }
  // 退出ボタン（登録済み状態） - Firebaseからも削除してローカルもクリア
  const leaveRegBtn=card.querySelector(".btn-leave-registered");
  if(leaveRegBtn){
    leaveRegBtn.addEventListener("click",()=>{
      players[idx]={name:"",weapon:null,xpower:"",_registered:false,_spectating:false};
      db.ref("rooms/"+currentRoomId+"/players/"+idx).remove();
    });
  }
}

// ========== Team Generation ==========
let topResults=[];
let currentResultIdx=0;

function generateTeams(){
  const active=[];
  for(let i=0;i<10;i++){
    if(players[i]._registered&&!players[i]._spectating)active.push(i);
  }
  if(active.length!==8)return;

  const xpWeight=+document.getElementById("weightSlider").value/100;
  const rangeWeight=1-xpWeight;
  const xps=active.map(i=>+players[i].xpower);
  const ranges=active.map(i=>players[i].weapon.range);
  const xpMin=Math.min(...xps),xpMax=Math.max(...xps);
  const rMin=Math.min(...ranges),rMax=Math.max(...ranges);
  const xpSpan=xpMax-xpMin||1;
  const rSpan=rMax-rMin||1;
  const normXp=xps.map(v=>(v-xpMin)/xpSpan);
  const normRange=ranges.map(v=>(v-rMin)/rSpan);

  const combos=[];
  for(let a=0;a<5;a++)for(let b=a+1;b<6;b++)for(let c=b+1;c<7;c++)for(let d=c+1;d<8;d++)
    combos.push([a,b,c,d]);

  const scored=combos.map(team=>{
    const other=[0,1,2,3,4,5,6,7].filter(i=>!team.includes(i));
    const xpDiffNorm=Math.abs(team.reduce((s,i)=>s+normXp[i],0)-other.reduce((s,i)=>s+normXp[i],0));
    const rangeDiffNorm=Math.abs(team.reduce((s,i)=>s+normRange[i],0)-other.reduce((s,i)=>s+normRange[i],0));
    return{team,other,score:xpWeight*xpDiffNorm+rangeWeight*rangeDiffNorm};
  });
  scored.sort((a,b)=>a.score-b.score);

  topResults=[];
  const seen=new Set();
  for(const r of scored){
    const key=r.team.join(",");
    const keyR=r.other.join(",");
    if(seen.has(key)||seen.has(keyR))continue;
    seen.add(key);seen.add(keyR);
    topResults.push({teamA:r.team.map(j=>active[j]),teamB:r.other.map(j=>active[j])});
    if(topResults.length>=3)break;
  }

  currentResultIdx=0;
  showResult();
}

function showResult(){
  const {teamA,teamB}=topResults[currentResultIdx];
  const div=document.getElementById("result");
  const avgXp=t=>t.reduce((s,i)=>s+(+players[i].xpower),0)/t.length;
  const avgRange=t=>t.reduce((s,i)=>s+players[i].weapon.range,0)/t.length;
  const xpDiff=Math.abs(avgXp(teamA)-avgXp(teamB));
  const rangeDiff=Math.abs(avgRange(teamA)-avgRange(teamB));
  function gradeClass(xd,rd){return xd<30&&rd<2?"diff-good":xd<80&&rd<5?"diff-warn":"diff-bad"}
  function renderTeam(t,name,cls){
    return`<div class="team-box ${cls}">
      <div class="team-title">${name}<span class="team-stats">XP平均:${avgXp(t).toFixed(1)} / M_Range平均:${avgRange(t).toFixed(1)}</span></div>
      ${t.map(i=>{const p=players[i];return`<div class="team-member">
        <div class="member-info">
          ${weaponImgTag(p.weapon.name,28)}
          <span class="member-name">${esc(p.name)}</span>
        </div>
        <div class="member-stats">
          <span class="member-xp">XP ${(+p.xpower).toFixed(1)}</span>
          <span class="member-range ${rangeBadgeClass(p.weapon.range)}">M_Range ${p.weapon.range}</span>
        </div>
      </div>`}).join("")}
    </div>`;
  }
  const gc=gradeClass(xpDiff,rangeDiff);
  const rankLabel=["★ Best","2nd","3rd"];
  const tabs=topResults.map((r,i)=>
    `<button class="result-tab${i===currentResultIdx?" active":""}" data-ridx="${i}">${rankLabel[i]||"候補 "+(i+1)}</button>`
  ).join("");
  div.innerHTML=`
    <h2>チーム分け結果</h2>
    <div class="result-tabs">${tabs}</div>
    <div class="teams-container">
      ${renderTeam(teamA,"Alpha","team-alpha")}
      <div class="vs-divider">VS</div>
      ${renderTeam(teamB,"Bravo","team-bravo")}
    </div>
    <div class="balance-summary">
      <div class="balance-grade ${gc}">${gc==="diff-good"?"Excellent!":gc==="diff-warn"?"Good":"Fair"}</div>
      <div class="diff ${xpDiff<30?"diff-good":xpDiff<80?"diff-warn":"diff-bad"}">XP差: ${xpDiff.toFixed(1)} (平均)</div>
      <div class="diff ${rangeDiff<2?"diff-good":rangeDiff<5?"diff-warn":"diff-bad"}">M_Range差: ${rangeDiff.toFixed(1)} (平均)</div>
    </div>`;
  div.classList.add("show");
  div.querySelectorAll(".result-tab").forEach(btn=>{
    btn.addEventListener("click",e=>{
      currentResultIdx=+e.target.dataset.ridx;
      showResult();
    });
  });
  if(currentResultIdx===0)div.scrollIntoView({behavior:"smooth"});
}

// ========== Event Listeners ==========
const slider=document.getElementById("weightSlider");
const weightDisplay=document.getElementById("weightDisplay");
function updateSliderBg(){
  const v=+slider.value;
  slider.style.background=`linear-gradient(to right,var(--yellow) 0%,var(--yellow) ${v}%,var(--purple) ${v}%,var(--purple) 100%)`;
  weightDisplay.textContent=`XP ${v}% : 射程 ${100-v}%`;
}
slider.addEventListener("input",updateSliderBg);
updateSliderBg();

document.addEventListener("click",()=>{
  document.querySelectorAll(".dropdown-list.open").forEach(l=>l.classList.remove("open"));
});

document.getElementById("createRoomBtn").addEventListener("click",()=>{
  cleanupExpiredRooms();
  const id=genRoomId();
  db.ref("rooms/"+id).set({created:Date.now()}).then(()=>enterRoom(id));
});

document.getElementById("joinRoomBtn").addEventListener("click",()=>{
  const id=document.getElementById("joinRoomInput").value.trim().toUpperCase();
  if(!id){alert("部屋IDを入力してください");return;}
  db.ref("rooms/"+id).once("value",snap=>{
    if(!snap.exists()){alert("部屋が見つかりません: "+id);return;}
    const room=snap.val();
    if(room.created&&(Date.now()-room.created)>SIX_HOURS){
      db.ref("rooms/"+id).remove();
      alert("この部屋は有効期限(6時間)が切れています。新しい部屋を作成してください。");
      return;
    }
    enterRoom(id);
  });
});

document.getElementById("joinRoomInput").addEventListener("keydown",e=>{
  if(e.key==="Enter")document.getElementById("joinRoomBtn").click();
});

document.getElementById("copyRoomBtn").addEventListener("click",()=>{
  const url=location.origin+location.pathname+"#room="+currentRoomId;
  navigator.clipboard.writeText(url).then(()=>{
    const t=document.getElementById("copyToast");
    t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2000);
  });
});

document.getElementById("generateBtn").addEventListener("click",generateTeams);

// ========== Auto-join from URL hash ==========
(function(){
  cleanupExpiredRooms();
  const hash=location.hash;
  if(hash.startsWith("#room=")){
    const id=hash.slice(6).toUpperCase();
    if(id)db.ref("rooms/"+id).once("value",snap=>{
      if(!snap.exists())return;
      const room=snap.val();
      if(room.created&&(Date.now()-room.created)>SIX_HOURS){
        db.ref("rooms/"+id).remove();
        return;
      }
      enterRoom(id);
    });
  }
})();
