
$(document).ready(function() {
   $('.table .eBtn').on('click',function (event) {

       event.preventDefault();
       var href = $(this).attr('href');

       $.get(href,function(user,status) {
           $('.editUser #id').val(user.id)
           $('.editUser #firstName1').val(user.firstName)
           $('.editUser #lastName1').val(user.lastName)
           $('.editUser #age1').val(user.age)
           $('.editUser #email1').val(user.email)
       });

       $('.editUser #exampleModal').modal();
   });

    $('.table .delBtn').on('click',function (event) {

        event.preventDefault();
        var href = $(this).attr('href');

        $.get(href,function(user,status) {
            $('.deleteUser #id2').val(user.id)
            $('.deleteUser #firstName2').val(user.firstName)
            $('.deleteUser #lastName2').val(user.lastName)
            $('.deleteUser #age2').val(user.age)
            $('.deleteUser #email2').val(user.email)
        });

        $('.deleteUser #delModal').modal();
    });
});