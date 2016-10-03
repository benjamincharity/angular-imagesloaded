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

        // If the debug option is set to true
        if (this.bcDebug && this.bcDebug === 'true') {
            this.options.debug = true;
        }

        // Expose imagesLoaded on 'this'
        this.imagesLoaded = imagesLoaded;

        this._initialize();
        this._bindEvents();
    }


    _initialize() {
        // Test for string or object
        const isValidObject = typeof this.bcImagesloaded === 'object'
        const isValidString =
            typeof this.bcImagesloaded === 'string' && this.bcImagesloaded.length > 0;

        // If a selector is passed in
        if (isValidString) {

            // If a class was passed in
            if (this.bcImagesloaded.charAt(0) === '.') {
                const initElement = this.$element[0].querySelectorAll(this.bcImagesloaded);
                this.instance = this.imagesLoaded(initElement, this.options);
            } else if (this.bcImagesloaded.charAt(0) === '#') {
                // If an ID was passed in
                const initElement = this.$element[0].querySelector(this.bcImagesloaded);
                this.instance = this.imagesLoaded(initElement, this.options);
            }

        } else if (isValidObject) {
            // If it's an object, pass it straight in
            this.instance = this.imagesLoaded(this.bcImagesloaded, this.options);
        } else {
            // By default use the element itself
            this.instance = this.imagesLoaded(this.$element, this.options);
        }
    }


    _bindEvents() {

        // If 'always' function was assigned
        if (typeof this.bcAlwaysMethod === 'function') {
            // Call the custom method on the event
            this.instance.on('always', (instance) => {
                this.bcAlwaysMethod({ instance: instance });
            });
        }

        // If 'done' function was assigned
        if (typeof this.bcDoneMethod === 'function') {
            // Call the custom method on the event
            this.instance.on('done', (instance) => {
                this.bcDoneMethod({ instance: instance });
            });
        }

        // If 'fail' function was assigned
        if (typeof this.bcFailMethod === 'function') {
            // Call the custom method on the event
            this.instance.on('fail', (instance) => {
                this.bcFailMethod({ instance: instance });
            });
        }

        // If 'progress' function was assigned
        if (typeof this.bcProgressMethod === 'function') {
            // Call the custom method on the event
            this.instance.on('progress', (instance, image) => {
                this.bcProgressMethod({ instance: instance, image: image });
            });
        }

    }


}

