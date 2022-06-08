  $("#submit").click(function() {
    //get input field values
    var name = $(this).parents(".mt-form").find('#name').val(); 
    var email = $(this).parents(".mt-form").find('#email').val();
    var phone = $(this).parents(".mt-form").find('#phone').val();
    var message = $(this).parents(".mt-form").find('#message').val();
    var tag = $(this).parents(".mt-form").find('#tag').val();

    $(this).parents(".mt-form").addClass("form-active");

    $.ajax({
        type: 'post',
        url: "https://metanoit.com/wp-content/themes/hub-child/js/email_send.php", 
        dataType: 'json',
        data: 'name='+name+'&email='+email+'&message='+message+'&phone='+phone+'&tag='+tag,
        beforeSend: function() {
            $('.form-active #submit').attr('disabled', true);
            $('.form-active #result').after('<span class="wait">Loading....</span>');
        },
        complete: function() {
            $('.form-active #submit').attr('disabled', false);
            $('.form-active .wait').remove();
        },  
        success: function(data)
        {
          if(data.type == 'error')
          {
              output = '<div class="error">'+data.text+'</div>';
          }else{
              output = '<div class="success">'+data.text+'</div>';
              $('.form-active input:not(#submit)').val(''); 
              $('.form-active textarea').val(''); 
          }

          $(".form-active #result").hide().html(output).slideDown();  
        }
        });
    });

