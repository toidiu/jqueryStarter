$( document ).ready(function() {
    console.log( "ready!" );

    $.ajax({
        async: false,
        cache: false,
        type: 'post',
        dataType: 'json',  // json...just for example sake
        data: ({
            'username': $('#Username').val(),
            'password': $('#Password').val()
        }),
        url: 'ello.com/enter',
        success: function (data) {
            // retrieve a success/failure code from the server
            if (data === '1') {  // server returns a "1" for success
                // success!
                // do whatever you need to do
                console.log( "success!" );

            } else {
                // fail!
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // something went wrong with the request
           console.log( XMLHttpRequest.responseText );
//         alert(XMLHttpRequest.responseText);
        }
    });
});