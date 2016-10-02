export class ImagesLoadedController {

    constructor(
    ) {
        'ngInject';


        //this._activate();

    }




    _activate() {
        this.options = {
            background: this.bcBackground ? this.bcBackground : false,
        };

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

