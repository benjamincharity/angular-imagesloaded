import imagesLoaded from 'imagesloaded';
export class ImagesLoadedController {

    constructor(
    ) {
        'ngInject';



    }




    setup() {
        // Set up default options object
        this.options = {};

        // If the background option is set to true
        if (this.bcBackground && this.bcBackground === 'true') {
            // Reflect that in the options object
            this.options.background = true;
        }


        this.imagesLoaded = imagesLoaded;
        // Assigning this to the controller makes testing easier
        this.initElement;
        const isValidObject = typeof this.bcImagesloaded === 'object'
        const isValidString =
            typeof this.bcImagesloaded === 'string' && this.bcImagesloaded.length > 0;

        // If a selector is passed in
        if (isValidObject || isValidString) {
            // Use it
            this.initElement = this.bcImagesloaded;
        } else {
            // Otherwise use the $element itself
            this.initElement = this.$element;
        }

        // Initialize imagesLoaded
        this.instance = this.imagesLoaded(this.initElement, this.options);







        // If a function was assigned
        if (typeof this.bcAlwaysMethod === 'function') {
            // Call the custom method on the always event
            this.instance.on('always', (instance) => {
                this.bcAlwaysMethod({ instance: instance });
            })
        }

    }




    imageLoaded() {
        console.log('image was loaded!');
    }


}

