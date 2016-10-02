import imagesLoaded from 'imagesloaded';
import { ImagesLoadedController } from './imagesloaded.controller';

export function ImagesLoadedDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        replace: true,
        scope: {},
        bindToController: {
            bcImagesloaded: '@?',
            bcBackground: '@?',
            bcAlwaysMethod: '&?',
        },
        link: linkFunction,
        controller: ImagesLoadedController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, $ctrl) {
        $ctrl.imagesLoaded = imagesLoaded;
        let element;
        const isValidObject = typeof $ctrl.bcImagesloaded === 'object'
        const isValidString =
            typeof $ctrl.bcImagesloaded === 'string' && $ctrl.bcImagesloaded.length > 0;

        // If a selector is passed in
        if (isValidObject || isValidString) {
            // Use it
            element = $ctrl.bcImagesloaded;
        } else {
            // Otherwise use the $element itself
            element = $element;
            console.log('in otherwise: ', $element);
        }

        // Initialize imagesLoaded
        $ctrl.instance = $ctrl.imagesLoaded(element, $ctrl.options);


        $ctrl._activate();
    }

}

