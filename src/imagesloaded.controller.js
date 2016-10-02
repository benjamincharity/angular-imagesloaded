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
            this.options.background = true;
        } else if (this.bcBackground && typeof this.bcBackground === 'string') {
            // if the background type is a string, expect it to be a selector
            this.options.background = this.bcBackground;
        }

        // Expose imagesLoaded on this
        this.imagesLoaded = imagesLoaded;

        // Assigning this to the controller makes testing easier
        this.initElement;

        // Test for string or object
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




        this._bindEvents();


    }


    _bindEvents() {

        // If 'always' function was assigned
        if (typeof this.bcAlwaysMethod === 'function') {
            // Call the custom method on the event
            this.instance.on('always', (instance) => {
                this.bcAlwaysMethod({ instance: instance });
            })
        }

        // If 'done' function was assigned
        if (typeof this.bcDoneMethod === 'function') {
            // Call the custom method on the event
            this.instance.on('done', (instance) => {
                this.bcDoneMethod({ instance: instance });
            })
        }

    }


    imageLoaded() {
        console.log('image was loaded!');
    }


}

