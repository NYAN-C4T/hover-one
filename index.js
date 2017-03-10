$(function () {
  function getHover(target, callback) {
    target.on('mouseover', function () {
      setTimeout(callback, 1000);
    });
  }

  function appendMsg() {
    $('body').append('<p class="msg">yay hover!</p>');
  }

  function appendAlex() {
    $('body').append('<p class="alex">I am Alex.</p>');
  }

  var $msg = $('#message');
  var $ano = $('#another');

  getHover($msg, appendMsg);
  getHover($ano, appendAlex);


  // ---- 毎回処理をjQueryでやる場合 ----
  //
  // $msg.on('mouseover', function () {
  //   setTimeout(function () {
  //     $('body').append('<p class="msg">yay hover!</p>');
  //   }, 1000)
  // });
  // $ano.on('mouseover', function () {
  //   setTimeout(function () {
  //     $('body').append('<p class="alex">I am Alex.</p>');
  //   }, 1000)
  // });
  //
});