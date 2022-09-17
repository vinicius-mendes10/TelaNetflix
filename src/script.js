function toglleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');

    video.curretTime = 0;
    video.pause();
}