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