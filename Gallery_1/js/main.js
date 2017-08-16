//Constructor
var Gallery = function(data){
    this.url = data.url;
    this.index = 0;    
    this.total = data.url.length;   
    this.gallery = document.createElement('div');     
}

//Prototype
Gallery.prototype = {
    Constructor: Gallery,
    height: '600px',
    imgSize:'600px',
    width:  '600px',
    container: document.createElement('div'),
    init: function() {
        // Reinicia el html
        this.reset();
        // Inicia la galeria
        this.projectGallery();
        // Inicia el boton de retroceso
        this.back();
        // Inicia el Boton de Siguente
        this.next();
        // Inicia el Contador
    },

    projectGallery: function() {
        // Estilos Css a la Galeria Ancho y Alto
        this.gallery.style.width = this.width;
        this.gallery.style.height = this.height;
        this.gallery.style.display = 'inline'; 

        // Crea la imagen
        var img = document.createElement('img');
        img.src = this.url[this.index];

        // Llama al SizeImage
        img.style.width = this.imgSize;
        img.style.height = this.imgSize;

        this.gallery.appendChild(img);       
        this.container.appendChild(this.gallery); 
        document.body.appendChild(this.container);
    },

    ////Funcion del la variable del boton BACK
    back: function() {
        var photos = document.createElement('photos');
        var _self = this;
        photos.setAttribute('aria-hidden', 'true');
        photos.style.cursor = 'pointer';        
        photos.style.fontSize = '30px';
        photos.classList.add('fa','fa-chevron-left');
        photos.style.marginLeft = '35px';

        photos.addEventListener('click', function(){
            var img = this.parentNode.getElementsByTagName('img')[0];
            if(_self.index <= 0) {
                _self.index = _self.total-1;                
            }
            else{
                _self.index--;                                            
            };
            img.src = _self.url[_self.index];
        })
        this.gallery.insertBefore(photos, this.gallery.firstChild);      
    },
    //Funcion del la variable del boton NEXT
    next: function() {
        var photos = document.createElement('photos');
        var _self = this;
        photos.setAttribute('aria-hidden', 'true');
        photos.style.cursor = 'pointer';
        photos.style.fontSize = '30px';
        photos.classList.add('fa','fa-chevron-right');
        photos.style.marginRight = '35px';
        photos.addEventListener('click', function(){
            var img = this.parentNode.getElementsByTagName('img')[0];
            if(_self.index >= _self.total-1) {
                _self.index = 0;
            }
            else {
                _self.index++;                           
            };
            img.src = _self.url[_self.index];   
        })
        this.gallery.appendChild(photos);      
    },
    reset: function() {
        this.gallery.innerHTML = '';    
    },
}
// Gallery 
var gall = new Gallery({
    'url': ['img/Place1.jpg','img/Place2.jpg','img/Place3.jpg','img/Place4.jpg','img/Place5.jpg']
});
gall.init();