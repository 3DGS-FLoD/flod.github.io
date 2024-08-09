function BeforeAfter(options) {
    this.container = document.querySelector(options.id);
    this.handle = this.container.querySelector('.bal-handle');
    this.before = this.container.querySelector('.bal-before');
  
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
  };
  
  // 객체를 생성하고 초기화
  const example1 = new BeforeAfter({ id: '#example1' });
  