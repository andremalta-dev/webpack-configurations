import SpongeBob from '../assets/img/sponge-bob.png';

class Image {

    insertBobImage() { 
        const img = document.createElement('img');

        img.src = SpongeBob;
        img.width = 200;

        document.querySelector('body').appendChild(img);
    }
}

export default Image