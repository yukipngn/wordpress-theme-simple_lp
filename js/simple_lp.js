/**
 * シンプルLPテーマ メインJavaScript
 *
 * 
 */
( function() {
  //------------------------------------------------------------
  // 追随タイトル表示処理
  //------------------------------------------------------------
  var fixhead = document.getElementById('fix-head');
  if(fixhead) {
    // 初期化
    fixhead.style.setProperty('top', (fixhead.clientHeight * -1) + 'px');
    // スクロールイベントを設定
    var frameId_fixhead = null;
    window.addEventListener('scroll', function() {
      // 表示間隔以上では処理しない
      cancelAnimationFrame(frameId_fixhead);
      frameId_fixhead = requestAnimationFrame(function() {
        
        if(window.scrollY > 100) {
          fixhead.style.setProperty('top', '0');
          fixhead.style.setProperty('visibility', 'visible');
        } else {
          fixhead.style.setProperty('top', (fixhead.clientHeight * -1) + 'px');
          fixhead.style.setProperty('visibility', 'hidden');
        }
      });
    });
  }
  //------------------------------------------------------------
  // 追随ボタン表示処理
  //------------------------------------------------------------
  var fixbtn = document.getElementById('fix-btn');
  if(fixbtn) {
    // スクロールイベントを設定
    var frameId_fixbtn = null;
    window.addEventListener('scroll', function() {
      // 表示間隔以上では処理しない
      cancelAnimationFrame(frameId_fixbtn);
      frameId_fixbtn = requestAnimationFrame(function() {
        if(
          window.scrollY > (document.body.clientHeight * 0.08)
       && window.scrollY < (document.body.clientHeight * 0.96 - window.innerHeight)
        ) {
          fixbtn.style.setProperty('visibility', 'visible');
          fixbtn.style.setProperty('opacity', '1');
        } else {
          fixbtn.style.setProperty('visibility', 'hidden');
          fixbtn.style.setProperty('opacity', '0');
        }
      });
    });
  }

  //------------------------------------------------------------
  // 残席バー描画
  //------------------------------------------------------------
  var seatbar = document.getElementById('seat-bar');
  if(seatbar) {
    // スクロールイベントを設定
    var frameId_seatbar = null;
    var seatbar_event = function() {
      // 表示間隔以上では処理しない
      cancelAnimationFrame(frameId_seatbar);
      frameId_seatbar = requestAnimationFrame(function() {
        var rect = seatbar.getBoundingClientRect();
        if(window.innerHeight * 0.8 > rect.top) {
          //一度のみの描画
          window.removeEventListener('scroll', seatbar_event);
          seatbar.classList.add('on');
        }
      });
    };
    window.addEventListener('scroll', seatbar_event);
  }
} )();
