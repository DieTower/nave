class Nav {
    
    constructor(buttonName) {
        this.button = $(buttonName);
        
        this.eventAttachment();
    }
    
    eventAttachment() {
        this.button.addEventListener("click",this.changeEffect.bind(this));
    }
    
    changeEffect() {
        
        let firstSection;
        let secondSection
        
        if(this.button.classList.contains('button1')) {
            
            /* Define the sections will be removed */
            firstSection = ".section2";
            secondSection = ".section3";
            
        } else if(this.button.classList.contains('button2')) {
            
            /* Define the sections will be removed */
            firstSection = ".section1";
            secondSection = ".section3";
            
        } else if(this.button.classList.contains('button3')) {
            
            /* Define the sections will be removed */
            firstSection = ".section1";
            secondSection = ".section2";
            
        };
        
        /* Remove all current vanish class on sections and add the vanish class's to sections */
        this.removeAllSections();
        $(firstSection).classList.add("vanish");
        $(secondSection).classList.add("vanish");
        
        /* Finds the vanish button anda remove the class vanish to show it */
        $(this.findVanishButton()).classList.remove("vanish");
        
        /* Adds the vanish class to current pressed button */
        this.button.classList.add("vanish");
        
    }
    
    removeAllSections() {
        $(".section1").classList.remove("vanish");
        $(".section2").classList.remove("vanish");
        $(".section3").classList.remove("vanish");
    }
    
    findVanishButton() {
        if($("#button1").classList.contains("vanish")) {
            return "#button1";
        } else if($("#button2").classList.contains("vanish")) {
            return "#button2";
        } else if($("#button3").classList.contains("vanish")) {
            return "#button3";
        };
    }
    
}