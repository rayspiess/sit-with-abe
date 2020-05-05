import Vue from 'vue';
import Cloudinary, { CldImage,CldTransformation,CldContext }  from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { cloudName: 'university-of-wisconsin-madison' },
    components: [ CldImage,CldTransformation,CldContext ]
})
