function onAmbilFotoModal(){
    $('#modal-form').modal('show')
}

$('#modal-form').on('shown.bs.modal',e=>{
    getMediaStreamFromCamera()
})


function onCaptureImage(){
    console.log('capture image...')
    const photoFrameEl = document.getElementById('photo-frame')
    const photoCanvasEl = document.getElementById('photo-canvas')
    const context = photoCanvas.getContext('2d')
    
    context.drawImage(
        photoFrameEl,
        0,
        0,
        photoCanvasEl., 
        $('#photo-canvas').prop('height')
    )

    $('#photo-canvas').css('display','block')
    $('#photo-frame').css('display','none')
    $('#photo-frame').prop('srcObject',null)
}

function handleSuccessMediaStream(mStream){
    $('#photo-frame').prop('srcObject',mStream)
    $('#btn-capture').css('display','block')
}


function getMediaStreamFromCamera(){
    navigator.mediaDevices.getUserMedia({
        video:true
    })
        .then(handleSuccessMediaStream)
}


function submitForm(){

}
