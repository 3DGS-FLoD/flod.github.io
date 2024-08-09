document.addEventListener('DOMContentLoaded', function() {
    // function BeforeAfter(options) {
    //   this.container = document.querySelector(options.id);
    //   this.handle = this.container.querySelector('.bal-handle');
    //   this.before = this.container.querySelector('.bal-before');
    
    //   this.init();
    // }
    
    // BeforeAfter.prototype.init = function() {
    //   const self = this;
    //   this.handle.addEventListener('mousedown', function(e) { self.onDragStart(e); });
    //   document.addEventListener('mousemove', function(e) { self.onDrag(e); });
    //   document.addEventListener('mouseup', function() { self.onDragEnd(); });
    //   this.dragging = false;
    // };
    
    // BeforeAfter.prototype.onDragStart = function(e) {
    //   this.dragging = true;
    //   this.update(e.clientX);
    // };
    
    // BeforeAfter.prototype.onDrag = function(e) {
    //   if (this.dragging) {
    //     this.update(e.clientX);
    //   }
    // };
    
    // BeforeAfter.prototype.onDragEnd = function() {
    //   this.dragging = false;
    // };
    
    // BeforeAfter.prototype.update = function(x) {
    //   const rect = this.container.getBoundingClientRect();
    //   let position = ((x - rect.left) / rect.width) * 100;
    //   position = Math.max(0, Math.min(100, position));
    
    //   this.handle.style.left = position + '%';
    //   this.before.style.width = position + '%';
    // };

    // new BeforeAfter({ id: 'example1' });
    // new BeforeAfter({ id: 'example2' });
    // new BeforeAfter({ id: 'example3' });
    // new BeforeAfter({ id: 'example4' });
    // new BeforeAfter({ id: 'example5' });
    // new BeforeAfter({ id: 'example6' });
    // new BeforeAfter({ id: 'example7' });
    // new BeforeAfter({ id: 'example8' });
    // new BeforeAfter({ id: 'example10' });
    // new BeforeAfter({ id: 'example11' });
    // new BeforeAfter({ id: 'example12' });
    // new BeforeAfter({ id: 'example13' });

    // Dics 초기화
    const sliders = document.querySelectorAll('[id*="example"] .b-dics');
    sliders.forEach(function(div) {
        new Dics({
            container: div,
            hideTexts: true,
            textPosition: "bottom"
        });
    });


  });


// document.addEventListener('DOMContentLoaded', function() {
//     // 첫 번째 기능: .b-dics 슬라이더 초기화
//     const sliders = document.querySelectorAll('.b-dics');

//     sliders.forEach(function(slider) {
//         new Dics({
//             container: slider,
//             hideTexts: true,
//             textPosition: "bottom"
//         });
//     });

//     // 두 번째 기능: .comparison-slider 초기화
//     const comparisonSliders = document.querySelectorAll('.comparison-slider');

//     comparisonSliders.forEach(function(slider) {
//         const range = slider.querySelector('.slider');
//         const overlay = slider.querySelector('.comparison-overlay');

//         range.addEventListener('input', function() {
//             overlay.style.width = `${this.value}%`;
//         });
//     });
// });

  