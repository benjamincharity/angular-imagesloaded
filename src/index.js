import imagesLoaded from 'imagesloaded';
import { ImagesLoadedDirective } from './imagesloaded.directive';

console.log('imagesLoaded: ', imagesLoaded);

angular.module('bc.angularImagesLoaded', [])
    .directive('bcImagesLoaded', ImagesLoadedDirective)
;

