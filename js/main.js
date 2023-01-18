function rain() {
    const image = document.getElementById('background');
    image.onload = function () {
        var dotEffects  = new RainyDay({
            image: this,
        });
       dotEffects.rain([
            [3, 2, 2]
        ], 100);
    };

    image.crossOrigin = 'anonymous';
    image.src = 'img/slider3.jpg';

}
rain();