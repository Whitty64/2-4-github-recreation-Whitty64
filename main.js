// SHARED SECRET i7lvlaxd9x

// Handler for .ready() called.



$( document ).ready(function() {
  'use strict';

  const CLIENT_ID='2a25ea82630f503f4aa5';
  const SECRET='8151dec29b9f63af6677eefc31eb66cc9d15093c';

  console.log('ready');
  $.ajax({
    url:'https://api.github.com/users/Whitty64?client_id=2a25ea82630f503f4aa5&client_secret=8151dec29b9f63af6677eefc31eb66cc9d15093c',
    dataType: 'jsonp',
    method: 'GET',

    success: function(response){
      response = {data:response.data};
      console.log('response',response);
      renderHTML(response);
    },

    error: function(xhr){
      console.log('does not work, try again', xhr.status);
    },
  });

  function renderHTML(response) {
    var source   = document.getElementById("profile-template").innerHTML;
    var template = Handlebars.compile(source);

    var context = response;
    var html = template(context);

    $('.insert').html(html);
  }




  $.ajax({
    url:'https://api.github.com/users/Whitty64/repos?client_id=2a25ea82630f503f4aa5&client_secret=8151dec29b9f63af6677eefc31eb66cc9d15093c',
    dataType: 'jsonp',
    method: 'GET',

    success: function(response){
      response = {data:response.data};
      console.log('response',response);
      renderRepoHTML(response);
    },

    error: function(xhr){
      console.log('does not work, try again', xhr.status);
    },
  });

  function renderRepoHTML(response) {
    var source   = document.getElementById("repo-template").innerHTML;
    var template = Handlebars.compile(source);

    var context = response;
    var html = template(context);

    $('.repo-script').html(html);
  }






  $.ajax({
    url:'https://api.github.com/users/Whitty64/orgs?client_id=2a25ea82630f503f4aa5&client_secret=8151dec29b9f63af6677eefc31eb66cc9d15093c',
    dataType: 'jsonp',
    method: 'GET',

    success: function(response){
      response = {data:response.data};
      console.log('response',response);
      renderOrgHTML(response);
    },

    error: function(xhr){
      console.log('does not work, try again', xhr.status);
    },
  });

  function renderOrgHTML(response) {
    var source   = document.getElementById("org-template").innerHTML;
    var template = Handlebars.compile(source);

    var context = response;
    var html = template(context);

    $('.org-insert').html(html);
  }


});








//
