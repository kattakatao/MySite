$(function() {

  //エラーメッセージ配列 start
  var message = {
    'null': 'を入力してください',
    'null2': 'でご入力ください',
    'null3': 'が正しく入力されていません'
  }

  var input = {
    'name': 'お名前',
    'email': 'メールアドレス',
    'tel': '電話番号'
  }
  //エラーメッセージ配列 end

  $('input').on('blur', function() {

    var id = $(this).attr('id');
    var val = $(this).val();

    //各正規表現 変数定義 start
    var nameRegexp = val.match(/[^ァ-ン \s]+/)
    var emailRegexp = !val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    var telRegexp = !val.match(/^[0-9]+$/)
    var addressesRegexp = !val.match(/^[0-9]{3}[0-9]{4}$/)
    //各正規表現 変数定義 end

    switch (id) {
        // お名前 start
      case 'name':
        if (val == "") {
          $("#msg-name").addClass('color');
          $("#name").addClass('input_design');
          $("#msg-name").text(input['name'] + message['null']);
        } else {
          $("#msg-name").removeClass('color');
          $("#last-name").removeClass('input_design');
          $("#msg-name").text("");
        }
        break;
        // お名前end

        // メールアドレス start
      case 'email':
        if (val == "") {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['email'] + message['null']);
        } else if (emailRegexp) {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['email'] + message['null3']);
        } else {
          $("#msg-" + id).removeClass('color');
          $("#" + id).removeClass('input_design');
          $("#msg-" + id).text("");
        }
        break;
        // メールアドレス end

        //電話番号 start
      case 'tel':
        if (val == "") {
          $("#msg-" + id).addClass('color');
          $("#" + id).addClass('input_design');
          $("#msg-" + id).text(input['tel'] + message['null']);
        } else if (telRegexp) {
          $("#msg-" + id).removeClass('color');
          $("#" + id).removeClass('input_design');
          $("#msg-" + id).text("");
        } else {
          $("#msg-" + id).removeClass('color');
          $("#" + id).removeClass('input_design');
          $("#msg-" + id).text("");
        }
        break;
        //電話番号 end
    }
  });

});
