// document.addEventListener('DOMContentLoaded', function() {
//   const independentSliders = document.querySelectorAll('.independent-slider');

//   independentSliders.forEach(function(slider) {
//     new Dics({
//       container: slider,
//       hideTexts: false,
//       textPosition: "bottom",
//       // linesOrientation: 'horizontal', 
//       // linesColor: '#FFFFFF'
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     function BeforeAfter(options) {
//       console.log("options.id:", options.id);  // options.id 확인

//         this.container = document.querySelector(options.id);
//         console.log("this.container:", this.container);  // this.container 확인

//         if (!this.container) {
//             console.error(`Element with id ${options.id} not found.`);
//             return;
//         }


//       this.container = document.querySelector(options.id);
//       this.handle = this.container.querySelector('.bal-handle');
//       this.before = this.container.querySelector('.bal-before');
    
//       this.init();
//     }
    
//     BeforeAfter.prototype.init = function() {
//       const self = this;
//       this.handle.addEventListener('mousedown', function(e) { self.onDragStart(e); });
//       document.addEventListener('mousemove', function(e) { self.onDrag(e); });
//       document.addEventListener('mouseup', function() { self.onDragEnd(); });
//       this.dragging = false;
//     };
    
//     BeforeAfter.prototype.onDragStart = function(e) {
//       console.log('Drag Start:', e.clientX);
//       this.dragging = true;
//       this.update(e.clientX);
//     };
    
//     BeforeAfter.prototype.onDrag = function(e) {
//       if (this.dragging) {
//         this.update(e.clientX);
//       }
//     };
    
//     BeforeAfter.prototype.onDragEnd = function() {
//       this.dragging = false;
//     };
    
//     BeforeAfter.prototype.update = function(x) {
//       const rect = this.container.getBoundingClientRect();
//       let position = ((x - rect.left) / rect.width) * 100;
//       position = Math.max(0, Math.min(100, position));
    
//       this.handle.style.left = position + '%';
//       this.before.style.width = position + '%';
//     };

//     new BeforeAfter({ id: '#example1' });
//     new BeforeAfter({ id: '#example2' });
//     new BeforeAfter({ id: '#example3' });
//     new BeforeAfter({ id: '#example4' });
//     // new BeforeAfter({ id: '#example5' });
//     // new BeforeAfter({ id: '#example6' });
//     // new BeforeAfter({ id: '#example7' });
//     // new BeforeAfter({ id: '#example8' });
//     // new BeforeAfter({ id: '#example10' });
//     // new BeforeAfter({ id: '#example11' });
//     // new BeforeAfter({ id: '#example12' });
//     // new BeforeAfter({ id: '#example13' });



//   });









// document.addEventListener('DOMContentLoaded', function() {
//   function syncBeforeAfterSize() {
//       const afterElement = document.querySelector('.bal-after');
//       const beforeInsetElement = document.querySelector('.bal-before-inset');

//       if (afterElement && beforeInsetElement) {
//           const afterWidth = afterElement.offsetWidth;
//           const afterHeight = afterElement.offsetHeight;

//           beforeInsetElement.style.width = afterWidth + 'px';
//           beforeInsetElement.style.height = afterHeight + 'px';
//       }
//   }

//   function BeforeAfter(options) {
//       this.container = document.querySelector(options.id);
//       this.handle = this.container.querySelector('.bal-handle');
//       this.before = this.container.querySelector('.bal-before');
//       this.after = this.container.querySelector('.bal-after');
//       this.beforeInset = this.before.querySelector('.bal-before-inset'); 

//       this.init();
//   }

//   BeforeAfter.prototype.init = function() {
//       const self = this;
//       this.handle.addEventListener('mousedown', function(e) { self.onDragStart(e); });
//       document.addEventListener('mousemove', function(e) { self.onDrag(e); });
//       document.addEventListener('mouseup', function() { self.onDragEnd(); });
//       this.dragging = false;

//       // 초기 로드 시 크기 동기화
//       syncBeforeAfterSize();
//   };

//   BeforeAfter.prototype.onDragStart = function(e) {
//       this.dragging = true;
//       this.update(e.clientX);
//   };

//   BeforeAfter.prototype.onDrag = function(e) {
//       if (this.dragging) {
//           this.update(e.clientX);
//       }
//   };

//   BeforeAfter.prototype.onDragEnd = function() {
//       this.dragging = false;
//   };

//   BeforeAfter.prototype.update = function(x) {
//       const rect = this.container.getBoundingClientRect();
//       let position = ((x - rect.left) / rect.width) * 100;
//       position = Math.max(0, Math.min(100, position));

//       this.handle.style.left = position + '%';
//       this.before.style.width = position + '%';

//       // 핸들 이동 시 크기 동기화
//       syncBeforeAfterSize();
//   };

//   new BeforeAfter({ id: '#example1' });
//   new BeforeAfter({ id: '#example2' });
//   new BeforeAfter({ id: '#example3' });
//   new BeforeAfter({ id: '#example4' });

//   // 윈도우 리사이즈 시 크기 동기화
//   window.addEventListener('resize', syncBeforeAfterSize);
// });














document.addEventListener('DOMContentLoaded', function() {
  function syncBeforeAfterSize(container) {
      const afterElement = container.querySelector('.bal-after');
      const beforeInsetElement = container.querySelector('.bal-before-inset');

      if (afterElement && beforeInsetElement) {
          const afterWidth = afterElement.offsetWidth;
          const afterHeight = afterElement.offsetHeight;

          beforeInsetElement.style.width = afterWidth + 'px';
          beforeInsetElement.style.height = afterHeight + 'px';
      }
  }

  function BeforeAfter(options) {
      this.container = document.querySelector(options.id);
      this.handle = this.container.querySelector('.bal-handle');
      this.before = this.container.querySelector('.bal-before');
      this.after = this.container.querySelector('.bal-after');
      this.beforeInset = this.before.querySelector('.bal-before-inset'); 

      this.init();
  }

  BeforeAfter.prototype.init = function() {
      const self = this;
      this.handle.addEventListener('mousedown', function(e) { self.onDragStart(e); });
      document.addEventListener('mousemove', function(e) { self.onDrag(e); });
      document.addEventListener('mouseup', function() { self.onDragEnd(); });
      this.dragging = false;

      // 초기 로드 시 크기 동기화
      syncBeforeAfterSize(this.container);
  };

  BeforeAfter.prototype.onDragStart = function(e) {
      this.dragging = true;
      this.update(e.clientX);
  };

  BeforeAfter.prototype.onDrag = function(e) {
      if (this.dragging) {
          this.update(e.clientX);
      }
  };

  BeforeAfter.prototype.onDragEnd = function() {
      this.dragging = false;
  };

  BeforeAfter.prototype.update = function(x) {
      const rect = this.container.getBoundingClientRect();
      let position = ((x - rect.left) / rect.width) * 100;
      position = Math.max(0, Math.min(100, position));

      this.handle.style.left = position + '%';
      this.before.style.width = position + '%';

      // 핸들 이동 시 크기 동기화
      syncBeforeAfterSize(this.container);
  };

  // 모든 슬라이더를 초기화
  new BeforeAfter({ id: '#highlevel1' });
  new BeforeAfter({ id: '#highlevel2' });
  new BeforeAfter({ id: '#highlevel3' });
  new BeforeAfter({ id: '#highlevel4' });

  new BeforeAfter({ id: '#viscomp1' });
  new BeforeAfter({ id: '#viscomp2' });
  new BeforeAfter({ id: '#viscomp3' });
  new BeforeAfter({ id: '#viscomp4' });



  // 윈도우 리사이즈 시 크기 동기화
  window.addEventListener('resize', function() {
      const containers = document.querySelectorAll('.bal-container-small');
      containers.forEach(function(container) {
          syncBeforeAfterSize(container);
      });
  });
});
