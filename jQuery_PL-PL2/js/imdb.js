'use strict';
(function(){
  var form = $('#searchForm');
  var inputSearch = $('#search');
  var searchText ;
  var resultPanel = $('#resultPanel');
  var panelBody = $('.panel-body',resultPanel);
  var mediaClone = $('.media', resultPanel).clone();

  function renderMovie(index, movie){
    var media = mediaClone.clone();
    var title = $('.media-heading',media);
    var link = $('a',media);
    var img = $('img',media);
    var yearAndType = $('p',media);
    title.text(movie.Title);
    link.attr('href','http://www.imdb.com/title/'+movie.imdbID);
    if(movie.Poster !== 'N/A'){
      img.attr('src',movie.Poster);  
    }
    yearAndType.text(movie.Year+' '+movie.Type);
    panelBody.append(media);
  }

  function processAPIResult(result, status){
    resultPanel.removeClass('hidden');
    $('.panel-title span', resultPanel).text(searchText);
    if(result.Response === 'False'){
      resultPanel.removeClass('panel-success');
      resultPanel.addClass('panel-danger');
      panelBody.html('<strong>No results found!</strong>');
    }else{
      resultPanel.addClass('panel-success');
      resultPanel.removeClass('panel-danger');
      panelBody.html('');
      $.each(result.Search,renderMovie);
    }
  }

  function callAPI(){
    var url = 'http://localhost';
    //url +=encodeURI(searchText);
    $.get(url,processAPIResult)
    .fail(function(result, status, request) {
      resultPanel.removeClass('hidden');
      resultPanel.removeClass('panel-success');
      resultPanel.addClass('panel-danger');
      panelBody.html('<strong>API NOT AVAILABLE</strong>');
    }) ;
  }

  $(function() {
    form.submit(function(event){
      event.preventDefault();
      searchText = inputSearch.val();
      callAPI();
    })
  })
})();