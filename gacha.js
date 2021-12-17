alert("hahaha");

let result = $('#result');
let namae = $('#namae');
let rarelity = $('#rarelity');

//召喚ボタンを押すと乱数での抽選が行われる
$("#button").on('click',function(){
    let gacha = Math.floor(Math.random()*20);
    console.log(gacha,"ランダムな数字")

    if(gacha === 0){
        result.html('<img src = "images/kento_nakazima.JPG" width=auto" height="400px" id="1"></img>') + namae.html("中島健人")　+ rarelity.html("★★★");
     }else if(gacha === 1){
        result.html('<img src = "images/mahiro_takasugi.JPG" width=auto" height="400px" id="2"></img>') + namae.html("高杉真宙")　+ rarelity.html("★★★");
    }else if(gacha === 2){
        result.html('<img src = "images/masaki_suda.JPG" width=auto" height="400px"  id="3"></img>') + namae.html("菅田将暉")　+ rarelity.html("★★★");
    }else if(gacha === 3){
        result.html('<img src = "images/ryo_narita.JPG" width=auto" height="400px"  id="4"></img>') + namae.html("成田凌")　+ rarelity.html("★★★");
    }else if(gacha === 4){
        result.html('<img src = "images/kento_yamazaki.JPG" width=auto" height="400px" id="5"></img>') + namae.html("山崎賢人") + rarelity.html("★★★★★");
    }else if(gacha === 5){
        result.html('<img src = "images/ryo_yoshizawa.JPG" width=auto" height="400px" id="6"></img>') + namae.html("吉沢亮") + rarelity.html("★★★★");
    }else if(gacha === 6){
        result.html('<img src = "images/ryunosuke_kamiki.JPG" width=auto" height="400px" id="7"></img>') + namae.html("神木隆之介") + rarelity.html("★★★");
    }else if(gacha === 7){
        result.html('<img src = "images/shun_oguri.JPG" width=auto" height="400px" id="8"></img>') + namae.html("小栗旬") + rarelity.html("★★★★★");
    }else if(gacha === 8){
        result.html('<img src = "images/sosuke_ikematsu.JPG" width=auto" height="400px" id="9"></img>') + namae.html("池松壮亮") + rarelity.html("★★");
    }else if(gacha === 9){
        result.html('<img src = "images/tomohisa_yamashita.JPG" width=auto" height="400px" id="10"></img>') + namae.html("山下智久") + rarelity.html("★★★");
    }else if(gacha === 10){
        result.html('<img src = "images/tatsuya_fuziwara.JPG" width=auto" height="400px" id="11"></img>') + namae.html("藤原竜也") + rarelity.html("★★★");
    }else if(gacha === 11){
        result.html('<img src = "images/yosuke_kuboduka.JPG" width=auto" height="400px" id="12"></img>') + namae.html("窪塚洋介") + rarelity.html("★★★★");
    }else if(gacha === 12){
        result.html('<img src = "images/yudai_chiba.JPG" width=auto" height="400px" id="13"></img>') + namae.html("千葉雄大") + rarelity.html("★★★★");
    }else if(gacha === 13){
        result.html('<img src = "images/daiki_tsuneta.JPG" width=auto" height="400px" id="14"></img>') + namae.html("常田大希") + rarelity.html("★★★★");
    }else if(gacha === 14){
        result.html('<img src = "images/eiji_akaso.JPG" width=auto" height="400px" id="15"></img>') + namae.html("赤楚衛二")  + rarelity.html("★★");
    }else if(gacha === 15){
        result.html('<img src = "images/go_ayano.JPG" width=auto" height="400px" id="16"></img>') + namae.html("綾野剛") + rarelity.html("★★★★★");
    }else if(gacha === 16){
        result.html('<img src = "images/humiya_takahashi.JPG" width=auto" height="400px" id="17"></img>') + namae.html("高橋文哉") + rarelity.html("★★");
    }else if(gacha === 17){
        result.html('<img src = "images/keita_machida.JPG" width=auto" height="400px" id="18"></img>') + namae.html("町田啓太") + rarelity.html("★★★");
    }else if(gacha === 18){
        result.html('<img src = "images/akihisa_shiono.JPG" width=auto" height="400px" id="19"></img>') + namae.html("塩野瑛久") + rarelity.html("★★★★");
    }else if(gacha === 19){
        result.html('<img src = "images/takayuki_yamada.JPG" width=auto" height="00px" id="20"></img>') + namae.html("山田孝之") + rarelity.html("★★★★★");
    }
 
        //前回結果を消す
        $('#retsu').html("");
        $('#shokan').html("");
        $('#gentei').html("");
        //ガチャの画像を消す
        $('#ikemen').html("");

});




setTimeout(function(){
    $('#result').fadeOut("slow",function(){
        $(result).appendTo('#result').hide().fadeIn(2000);

    })});

    setTimeout(function(){
        $('#namae').fadeOut("slow",function(){
            $(namae).appendTo('#namae').hide().fadeIn(2000);
    
        })}); 
        
    

    

//保存を押すと、listにカードを出す


//ここからゲットしたカードをlistに保存

$("#save").on("click",function(){
    //valの記述
    let key = $("#namae").val();
    console.log(key, namae);

    let value = $("#rarelity").val();
    console.log(value, rarelity);

    localStorage.setItem(namae.html(),rarelity.html());

    const html =`

    <tr>
    <th>${namae.html()}</th>
    <td>${rarelity.html()}</td>
    </tr>
    `;

    // htmlに表示＝jQueryで処理をしたものをhtmlに埋め込む
    $("#list").append(html);
});



//2.clear クリックイベント
$("#clear").on("click",function(){
    //localstorageの中身を削除します
    localStorage.clear();
    //id="list"の中身を空にする
    $("#list").empty();
});

//3.ページ読み込み：保存データ取得表示

//これを入れてるからロードしても表示されてるっぽい
for(let i =0; i<localStorage.length; i++){
    //key(何番目)でkey名を取得
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);


    //htmlにjQueryで取得したものを表示
    const html =`<tr><th>${key}</th><td>${value}</td></tr>`;
    $("#list").append(html);
};