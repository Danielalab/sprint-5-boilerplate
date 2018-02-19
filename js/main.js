$(document).ready(() => {
    // selecionando elementos del DOM
    let btnNewTopic = $('#btn-new-topic');
    let formNewTopic = $('#form-new-topic');
    let btnCreateTopic = $('#btn-create-topic');

    // funcionalidad para mostrar formulario
    let showFormNewTopic = (event) => {
      event.preventDefault()
      formNewTopic.addClass('d-block');
      formNewTopic.removeClass('d-none');
    };

    // funcionalidad para crear topic y ocultar formulario
    let createNewTopic = (event) => {
      event.preventDefault();
      formNewTopic.addClass('d-none');
      formNewTopic.removeClass('d-block')
    }

    // asociando funciones a elementos del DOM
    btnNewTopic.on('click', showFormNewTopic);
    btnCreateTopic.on('click', createNewTopic);
});
// hacer funcionar con ajax
let $addTopic = $('.add-topic')
    $addTopic.append('<div class="row justify-content-center box"/>');
    
function addResponse(data) {
  console.log('the ajax request has finished!');
  console.log(data);
  $.each(data,function(i,obj){
    let aTopic = data[i].content;
    let anAuthor = data[i].author_name;
    let numberAnswers = data[i].responses_count;
    $addTopic.find('.box').append(`<div class="col-8 p-3 my-3 border rounded">
    <div class="row justify-content-center"><div class="col-4"><p class="text-center my-0">Tema:
    <span id="topic">${aTopic}</span></p></div><div class="col-4"><p class="text-center my-0">Por:
    <span id="author">${anAuthor}</span></p></div><div class="col-4"><p class="text-center my-0">Respuestas:
    <span id="responses-number">${numberAnswers}</span></p></div></div></div></div>`);                          
   }) 
}
$.ajax({
  url: `http://examen-laboratoria-sprint-5.herokuapp.com/topics`
}).done(addResponse)
.fail(function() {
  alert( "error" );
});
