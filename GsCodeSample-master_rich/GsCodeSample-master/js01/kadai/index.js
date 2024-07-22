// モーダル用
// モーダル開く
function modalOpen(modal){
    modal.style.display = "block";
}
// ×を押してモーダル閉じる
function modalClose(modal){
    modal.style.display = "none";
}

//内容の切り替え
function contentSwitch(source, target){
    source.style.display = "none";
    target.style.display = "block";
}

//出し手の閾値と出し手を戻す
function table_complete(){
    let r1 = Math.random()*100;
    let r2 = Math.random()*100;
    let r3 = Math.random()*100;

    let n1 = Math.ceil(r1);
    let n2 = Math.ceil(r2);
    let n3 = Math.ceil(r3);

    let thoreshold1 = "";
    let thoreshold2 = "";

    // 閾値設定
    if(n1 < n2){
        thoreshold1 = n1;
        thoreshold2 = n2;
    }
    if(n1 > n2){
        thoreshold1 = n2;
        thoreshold2 = n1;
    }
    if(n1 == n2){
        thoreshold1 = n1;
        thoreshold2 = n2 + 1;
    }

    let hand = "";

    // 出し手設定
    if(n3 <= thoreshold1){
        hand = 1; //グー
    }
    if(thoreshold1 < n3 && n3 < thoreshold2){
        hand = 2; //チョキ
    }
    if(thoreshold2 <= n3){
        hand = 3; //パー
    }

    return [thoreshold1, thoreshold2, hand]
}

function count(id, num){
    let count = 0;
    for(let i=0;i<num;i++){
        if(id[i] != ""){
            count++;
        }
    }

    return count;
}


function random(){
    
    let r1 = Math.random()*3;
    let n1 = Math.ceil(r1);
    let r2 = Math.random()*3;
    let n2 = Math.ceil(r2);
    let r3 = Math.random()*3;
    let n3 = Math.ceil(r3);
    
    return [n1-1, n2-1, n3-1]
}
