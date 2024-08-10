
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

// // document.addEventListener('DOMContentLoaded', function() {
// //   function BeforeAfter(options) {
// //       this.container = document.querySelector(options.id);
// //       this.handle = this.container.querySelector('.bal-handle');
// //       this.before = this.container.querySelector('.bal-before');
  
// //       this.init();
// //   }
  
// //   BeforeAfter.prototype.init = function() {
// //       const self = this;
      
// //       // 슬라이더 핸들 위에 마우스를 올려놓기만 해도 슬라이더가 움직이도록 설정
// //       this.handle.addEventListener('mousemove', function(e) {
// //           self.update(e.clientX);
// //       });

// //       // 만약 핸들뿐만 아니라 슬라이더 전체에서 마우스가 움직일 때도 작동하게 하려면
// //       this.container.addEventListener('mousemove', function(e) {
// //           self.update(e.clientX);
// //       });
// //   };

// //   BeforeAfter.prototype.update = function(x) {
// //       const rect = this.container.getBoundingClientRect();
// //       let position = ((x - rect.left) / rect.width) * 100;
// //       position = Math.max(0, Math.min(100, position));

// //       // 슬라이더 핸들과 before 영역의 위치를 업데이트
// //       this.handle.style.left = position + '%';
// //       this.before.style.width = position + '%';
// //   };

// //   // 여러 개의 슬라이더를 초기화
// //   new BeforeAfter({ id: '#example1' });
// //   new BeforeAfter({ id: '#example2' });
// //   new BeforeAfter({ id: '#example3' });
// //   new BeforeAfter({ id: '#example4' });
// //   // 필요에 따라 추가
// // });




document.addEventListener('DOMContentLoaded', function() {
  function BeforeAfter(options) {
      this.container = document.querySelector(options.id);
      this.handle = this.container.querySelector('.bal-handle');
      this.before = this.container.querySelector('.bal-before');
      this.after = this.container.querySelector('.bal-after');
      this.beforeInset = this.before.querySelector('.bal-before-inset'); // bal-before-inset 선택자 추가

      this.init();
  }

  BeforeAfter.prototype.init = function() {
      const self = this;
      this.handle.addEventListener('mousedown', function(e) { self.onDragStart(e); });
      document.addEventListener('mousemove', function(e) { self.onDrag(e); });
      document.addEventListener('mouseup', function() { self.onDragEnd(); });
      this.dragging = false;
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

      // bal-before-inset의 width를 bal-after의 width와 동일하게 설정
      const afterWidth = 100 - position; // bal-after의 width는 전체 width에서 before의 width를 뺀 값
      this.beforeInset.style.width = afterWidth + '%';
  };

  new BeforeAfter({ id: '#example1' });
  new BeforeAfter({ id: '#example2' });
  new BeforeAfter({ id: '#example3' });
  new BeforeAfter({ id: '#example4' });
  // 필요에 따라 다른 슬라이더도 추가
});
