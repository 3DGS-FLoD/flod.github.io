
document.addEventListener('DOMContentLoaded', function() {
    const levelVisualizationSlider = document.querySelector('.level-visualization');
    
    if (levelVisualizationSlider) {
        new Dics({
            container: levelVisualizationSlider,
            hideTexts: false,
            textPosition: "bottom"
        });
    }

    const independentSliders = document.querySelectorAll('.independent-slider');

    independentSliders.forEach(function(slid) {
    new Dics({
      container: slid,
      hideTexts: false,
      textPosition: "bottom",
    });
  });
});

function objectSceneEvent(idx) {
    let dics = document.querySelector('.level-visualization');
    let sections = dics.getElementsByClassName('b-dics__section');
    let imagesLength = 5;
    for (let i = 0; i < imagesLength; i++) {
        let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0];
        switch (idx) {
            case 0:
                image.src = './static/images/all_levels/train';
                break;
            case 1:
                image.src = './static/images/all_levels/truck';
                break;
            case 2:
                image.src = './static/images/all_levels/kitchen';
                break;
            case 3:
                image.src = './static/images/all_levels/bicycle';
                break;
            case 4:
                image.src = './static/images/all_levels/9f518';
                break;
            case 5:
                image.src = './static/images/all_levels/ce060';
                break;    
        }
        switch (i) {
            case 0:
                image.src = image.src + '_Level1.jpg';
                break;
            case 1:
                image.src = image.src + '_Level2.jpg';
                break;
            case 2:
                image.src = image.src + '_Level3.jpg';
                break;
            case 3:
                image.src = image.src + '_Level4.jpg';
                break;
            case 4:
                image.src = image.src + '_Level5.jpg';
                break;
        }
    }

    let scene_list = document.getElementById("object-scale-recon").children;
    for (let i = 0; i < scene_list.length; i++) {
        if (idx == i) {
            scene_list[i].children[0].className = "nav-link active";
        } else {
            scene_list[i].children[0].className = "nav-link";
        }
    }
}
